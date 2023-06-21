import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function DenseAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Link style={{ textDecoration: "none", color: "white" }} to={"/me"}>
              <AccountCircleIcon />
            </Link>
          </IconButton>
          <Link style={{ textDecoration: "none" }} to={"/"}>
            <Typography variant="h6" color="black" component="div">
              Charity & Me
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
