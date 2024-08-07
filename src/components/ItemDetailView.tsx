import { Box, Typography, Button } from "@mui/material";

import Beverage from "../models/Beverage";

import { IMAGE_ASSETS_DIRECTORY } from "../Constants";

interface ItemDetailViewProps {
  selectedBeverage: Beverage | null;
  onAddToCart: () => void;
}

export default function ItemDetailView({
  selectedBeverage,
  onAddToCart,
}: ItemDetailViewProps) {
  return (
    <Box sx={{ display: "flex", flex: 1 }}>
      <Box
        sx={{
          display: "flex",
          flex: 1,
          background: "#ededed",
        }}
      >
        <img
          src={
            selectedBeverage?.assetPath === ""
              ? IMAGE_ASSETS_DIRECTORY + "default.png"
              : IMAGE_ASSETS_DIRECTORY + selectedBeverage?.assetPath
          }
          alt={selectedBeverage?.name}
          style={{ maxWidth: "100%", objectFit: "cover" }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "5%",
        }}
      >
        <Box>
          <Typography variant="h4" sx={{ paddingBottom: "20px" }}>
            {selectedBeverage?.name}
          </Typography>
          <Typography
            variant="h5"
            sx={{ color: "#787878", paddingBottom: "20px" }}
          >
            {selectedBeverage?.currency} {selectedBeverage?.price}
          </Typography>
          <Typography variant="body1">
            {selectedBeverage?.description}
          </Typography>
        </Box>
        <Button
          variant="contained"
          onClick={onAddToCart}
          sx={{
            backgroundColor: "#e0a960",
            "&:hover": {
              backgroundColor: "#f7dbb5",
              color: "#57441f",
            },
          }}
        >
          Add to Cart
        </Button>
      </Box>
    </Box>
  );
}
