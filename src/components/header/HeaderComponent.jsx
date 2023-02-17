import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import NightsStayTwoToneIcon from "@mui/icons-material/NightsStayTwoTone";

export default function HeaderComponent() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <NightsStayTwoToneIcon
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2 }}
          />

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Weather Like
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
