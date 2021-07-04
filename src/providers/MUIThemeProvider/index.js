import React from "react";
import {
  CssBaseline,
  useMediaQuery,
  unstable_createMuiStrictModeTheme as createMuiTheme,
} from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { white } from "./colors";
import "@fontsource/roboto";

const MUIThemeProvider = ({ children }) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? "dark" : "light",
          background: {
            default: "#f0f0f0",
          },
          primary: {
            light: "#00a8f4",
            main: "#0076bd",
            dark: "#00569b",
          },
          secondary: white,
          action: {
            active: "#52a2d2",
            disabled: "rgba(0, 0, 0, 0.38)",
            disabledBackground: "rgba(0, 0, 0, 0.10)",
            selected: "#e1f5fe",
          },
          contrastThreshold: 3,
          tonalOffset: 0.2,
        },
      }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default MUIThemeProvider;
