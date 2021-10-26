import React from "react";
import ReactDOM from "react-dom";
import { LayoutProvider } from "./context/LayoutContext";
import { ThemeProvider } from "@material-ui/styles";
import Themes from "./themes";
import { CssBaseline } from "@material-ui/core";
import App from "./components/App";

ReactDOM.render(
  <LayoutProvider>
      <ThemeProvider theme={Themes.default}>
        <CssBaseline />
        <App />
      </ThemeProvider>
  </LayoutProvider>,
  document.getElementById("root"),
);
