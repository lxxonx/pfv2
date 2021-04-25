import { Box, CssBaseline, ThemeProvider } from "@material-ui/core";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import theme from "../styles/theme";
import AppRouter from "./AppRouter";

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Router>
          <Box width="100%">
            <AppRouter />
          </Box>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
