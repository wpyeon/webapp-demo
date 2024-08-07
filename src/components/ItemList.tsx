import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import Divider from "@mui/material/Divider";

import Beverage from "../models/Beverage";
import {
  Avatar,
  Box,
  ListItemAvatar,
  ListSubheader,
  Typography,
} from "@mui/material";

import { IMAGE_ASSETS_DIRECTORY, LABELS_ID_NAME_MAPPING } from "../Constants";

interface ItemListProps {
  items: Beverage[];
  itemStateSetter: (value: null | Beverage) => void;
  onItemClick: () => void;
}

export default function ItemList({
  items,
  itemStateSetter,
  onItemClick,
}: ItemListProps) {
  const labelsSet = new Set<string>();
  items.forEach((item) => {
    item.labels.forEach((label) => {
      labelsSet.add(label);
    });
  });
  const labels: string[] = [];
  if (labelsSet.delete("popular")) labels.push("popular");
  labelsSet.forEach((label) => {
    labels.push(label);
  });

  return (
    <List>
      {labels.map((label) => (
        <>
          <ListSubheader sx={{ background: "#ededed" }}>
            {LABELS_ID_NAME_MAPPING.get(label)}
          </ListSubheader>
          {items
            .filter((item) => item.labels.includes(label))
            .map((item) => (
              <Box>
                <ListItem
                  key={item.id}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "stretch",
                    backgroundColor: "#ffffff",
                    padding: "10px",
                  }}
                  onClick={() => {
                    itemStateSetter(item);
                    onItemClick();
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      paddingRight: "30px",
                    }}
                  >
                    <ListItemText
                      primary={item.name}
                      secondary={item.description}
                    />
                    <Typography variant="subtitle2">
                      {item.price} {item.currency}
                    </Typography>
                  </Box>
                  <ListItemAvatar
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <Avatar
                      alt={item.name}
                      src={
                        item.assetPath === ""
                          ? IMAGE_ASSETS_DIRECTORY + "default.png"
                          : IMAGE_ASSETS_DIRECTORY + item.assetPath
                      }
                      sx={{
                        height: "100px",
                        width: "100px",
                        background: "#ededed",
                      }}
                    />
                  </ListItemAvatar>
                </ListItem>
                <Divider variant="inset" component="li" />
              </Box>
            ))}
        </>
      ))}
    </List>
  );
}
