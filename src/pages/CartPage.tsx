import {
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  Typography,
  IconButton,
  Snackbar,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";

import { useReducer, useState } from "react";

import NavigationBar from "../components/NavigationBar";

import { cart } from "./MainPage";

export default function CartPage() {
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        background: "#fff9de",
        minHeight: "100vh",
      }}
    >
      <NavigationBar />
      <Snackbar
        open={isSnackbarOpen}
        autoHideDuration={4000}
        onClose={() => setIsSnackbarOpen(false)}
        message="Item removed from cart"
      />
      <Box
        sx={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          justifyContent: "space-between",
          margin: "5rem 1.5rem 1.5rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flex: 1,
            flexDirection: "Column",
          }}
        >
          <Typography variant="h4">Cart</Typography>
          <List>
            {cart.getItems().map((item) => (
              <ListItem
                secondaryAction={
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => {
                      cart.deleteItem(item.id);
                      forceUpdate();
                      setIsSnackbarOpen(true);
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                }
                sx={{ background: "#ffffff" }}
              >
                <ListItemText
                  primary={item.name}
                  secondary={`${item.currency} ${item.price}`}
                  sx={{ flexGrow: 1 }}
                />
                <Typography variant="subtitle2">
                  x{cart.getCount(item.id)}
                </Typography>
              </ListItem>
            ))}
            <ListItem
              sx={{ background: "#ffffff", justifyContent: "flex-end" }}
            >
              <Typography variant="subtitle1">
                {`Total: ${cart.getTotalPrice()} HKD`}
              </Typography>
            </ListItem>
          </List>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "1rem",
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#e0a960",
              "&:hover": {
                backgroundColor: "#f7dbb5",
                color: "#57441f",
              },
            }}
          >
            Purchase
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
