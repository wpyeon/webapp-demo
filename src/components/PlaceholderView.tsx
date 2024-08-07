import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

export default function PlaceholderView() {
  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        color: "#c2c2c2",
      }}
    >
      <Typography variant="h4">Select a drink to view details</Typography>
    </Box>
  );
}
