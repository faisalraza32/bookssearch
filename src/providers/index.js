import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import MUIThemeProvider from "./MUIThemeProvider";

const queryClient = new QueryClient();

const CustomProviders = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <MUIThemeProvider>{children}</MUIThemeProvider>
    </QueryClientProvider>
  );
};

export default CustomProviders;
