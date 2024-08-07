import { Box, Card, Paper, Snackbar } from "@mui/material";

import DialogView from "../components/DialogView";
import ItemList from "../components/ItemList";
import ItemDetailView from "../components/ItemDetailView";

import Beverage from "../models/Beverage";
import data from "../data/data.json";

import { useEffect, useState } from "react";
import PlaceholderView from "../components/PlaceholderView";
import NavigationBar from "../components/NavigationBar";
import Cart from "../models/Cart";

export const cartItems: Beverage[] = [];
const beverages = data.map((item) => {
  return new Beverage(item);
});
export const cart = new Cart();

export default function MainPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [selectedBeverage, setSelectedBeverage] = useState<null | Beverage>(
    null,
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1080) {
        setIsMobileView(true);
      } else {
        setIsMobileView(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleItemClick = () => {
    setIsDialogOpen(true);
  };

  const handleItemClose = () => {
    setIsDialogOpen(false);
  };

  const handleAddToCart = () => {
    if (selectedBeverage) {
      cart.push(selectedBeverage);
      setIsSnackbarOpen(true);
      setIsDialogOpen(false);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <NavigationBar />
      <Box
        sx={{
          display: "flex",
          flex: 1,
          alignContent: "start",
          background: "#fff9de",
          maxHeight: "100%",
        }}
      >
        <DialogView
          selectedBeverage={selectedBeverage}
          open={isMobileView && isDialogOpen}
          onAddToCart={handleAddToCart}
          onClose={handleItemClose}
        />
        <Snackbar
          open={isSnackbarOpen}
          autoHideDuration={4000}
          onClose={() => setIsSnackbarOpen(false)}
          message="Item added to cart"
        />
        <Paper
          style={{
            overflow: "auto",
            flex: 1,
            minWidth: "300px",
            margin: "5rem 1.5rem 1.5rem",
          }}
        >
          <ItemList
            items={beverages}
            itemStateSetter={setSelectedBeverage}
            onItemClick={handleItemClick}
          />
        </Paper>
        {!isMobileView && (
          <Card
            sx={{
              display: "flex",
              flex: 2,
              flexDirection: "row",
              background: "#ffffff",
              margin: "5rem 1.5rem 1.5rem",
            }}
          >
            {selectedBeverage ? (
              <ItemDetailView
                selectedBeverage={selectedBeverage}
                onAddToCart={handleAddToCart}
              />
            ) : (
              <PlaceholderView />
            )}
          </Card>
        )}
      </Box>
    </Box>
  );
}
