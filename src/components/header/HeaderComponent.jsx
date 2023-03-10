import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import NightsStayTwoToneIcon from "@mui/icons-material/NightsStayTwoTone";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import SearchForm from "../search/SearchForm";

export default function HeaderComponent() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, textAlign: "center" }}
          >
            Weather Like
          </Typography>
          <Link to="/">
            <HomeIcon
              size="large"
              edge="start"
              aria-label="home"
              sx={{ ml: 2, color: "white" }}
            />
          </Link>
          <div className="navbar-menu-icon">
            <MenuIcon
              size="large"
              edge="start"
              aria-label="home"
              sx={{ ml: 2, color: "white", cursor: "pointer" }}
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            />
          </div>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>Bruselas</MenuItem>
            <MenuItem onClick={handleClose}>Madrid</MenuItem>
            <MenuItem onClick={handleClose}>Tokyo</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
