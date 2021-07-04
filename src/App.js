import React from "react";
import { Grid } from "@material-ui/core";
import CustomProviders from "./providers";
import Layout from "./components/Layout";
import Books from "./components/Books";

const App = () => {
  return (
    <CustomProviders>
      <Layout>
        <Grid container>
          <Grid item xs={12}>
            <Books />
          </Grid>
        </Grid>
      </Layout>
    </CustomProviders>
  );
};

export default App;
