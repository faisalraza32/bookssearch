import React from "react";
import { Grid } from "@material-ui/core";
import CustomProviders from "./providers";
import Layout from "./components/Layout";

const App = () => {
  return (
    <CustomProviders>
      <Layout>
        <Grid container>
          <Grid item xs={12}>
            iTunes Book Search
          </Grid>
        </Grid>
      </Layout>
    </CustomProviders>
  );
};

export default App;
