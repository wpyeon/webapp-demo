import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function NavigationBar() {
  return (
    <AppBar
      sx={{
        background: "#e0a960",
        color: "#57441f",
      }}
    >
      <Toolbar>
        <Link
          to="/"
          style={{
            flexGrow: 1,
            textDecoration: "none",
            color: "#57441f",
          }}
        >
          <Typography variant="h5">Delicious Boba Shop</Typography>
        </Link>
        <Link to="/cart">
          <img
            src="icons8-cart-90.png"
            alt="cart"
            style={{ width: "2.5rem" }}
          />
        </Link>
      </Toolbar>
    </AppBar>
  );
}
