import React from "react";
import "./App.css";
import LoadingPage from "./containers/LoadingPage/loading-page.component";
import { ThemeProvider } from "./contexts/theme.context";

const App = () => {
  return (
    <ThemeProvider>
      <LoadingPage />
    </ThemeProvider>
  );
};

export default App;
