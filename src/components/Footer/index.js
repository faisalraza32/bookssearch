import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import MuiLink from "@material-ui/core/Link";

const useStyles = makeStyles(() => ({
  root: {
    padding: 24,
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        <MuiLink color="inherit" href="https://bookssearch.vercel.app">
          iTunes Book Search
        </MuiLink>{" "}
        {new Date().getFullYear()}.
      </Typography>
    </div>
  );
};

export default Footer;
