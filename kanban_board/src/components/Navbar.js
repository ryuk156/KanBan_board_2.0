import React from "react";
import {
  AppBar,
  IconButton,
  Typography,
  Button,
  Toolbar,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
import { Link, NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: "#3b5998" }}>
        <Toolbar>
          <Typography
            variant="h6"
            className={classes.title}
            style={{ color: "white" }}
          >
            KANBAN BOARD
          </Typography>
          <NavLink to={`/Login`}>
            <Typography style={{ color: "white" }}>Sign In</Typography>
          </NavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
