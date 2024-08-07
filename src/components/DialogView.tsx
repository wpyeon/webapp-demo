import Beverage from "../models/Beverage";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";

import { IMAGE_ASSETS_DIRECTORY } from "../Constants";

interface DialogViewProps {
  selectedBeverage: Beverage | null;
  open: boolean;
  onAddToCart: () => void;
  onClose: () => void;
}

export default function DialogView({
  selectedBeverage,
  open,
  onAddToCart,
  onClose,
}: DialogViewProps) {
  return (
    <Dialog open={open}>
      <DialogTitle>{selectedBeverage?.name}</DialogTitle>
      <DialogContent>
        <img
          src={
            selectedBeverage?.assetPath === ""
              ? IMAGE_ASSETS_DIRECTORY + "default.png"
              : IMAGE_ASSETS_DIRECTORY + selectedBeverage?.assetPath
          }
          alt={selectedBeverage?.name}
          style={{ width: "100%" }}
        />
        <DialogContentText variant="subtitle1">
          {selectedBeverage?.description}
        </DialogContentText>
        <DialogContentText variant="subtitle2">
          {`${selectedBeverage?.currency} ${selectedBeverage?.price}`}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
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
        <Button
          variant="outlined"
          onClick={onClose}
          sx={{
            borderColor: "#e0a960",
            color: "#e0a960",
            "&:hover": {
              background: "#f7e8d2",
              borderColor: "#e0a960",
              color: "#e0a960",
            },
          }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
