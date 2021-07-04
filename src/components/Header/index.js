import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchField from "../SearchField";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  toolbar: {
    paddingLeft: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
}));
const Header = ({ title }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <IconButton color="inherit">
            <MenuIcon />
          </IconButton>
          <Typography
            noWrap
            variant="h6"
            color="inherit"
            className={classes.title}
          >
            {title}
          </Typography>
          <SearchField />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
