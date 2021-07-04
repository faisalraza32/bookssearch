import React from "react";
import { Grid } from "@material-ui/core";

const Layout = ({ children }) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        Header
      </Grid>
      <Grid item xs={12}>
        {children}
      </Grid>
      <Grid item xs={12}>
        Footer
      </Grid>
    </Grid>
  );
};

export default Layout;
