import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import MUIThemeProvider from "./MUIThemeProvider";
import BooksProvider from "../components/Books/context/BooksContext";

const queryClient = new QueryClient();

const CustomProviders = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <BooksProvider>
        <MUIThemeProvider>{children}</MUIThemeProvider>
      </BooksProvider>
    </QueryClientProvider>
  );
};

export default CustomProviders;
