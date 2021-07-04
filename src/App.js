import { Grid } from "@material-ui/core";
import React from "react";
import CustomProviders from "./providers";

const App = () => {
  return (
    <CustomProviders>
      <Grid container>
        <Grid item xs={12}>
          iTunes Book Searcha
        </Grid>
      </Grid>
    </CustomProviders>
  );
};

export default App;
