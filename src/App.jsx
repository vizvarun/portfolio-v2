import React from "react";
import "./App.css";
import LoadingPage from "./containers/LoadingPage/loading-page.component";
import { ThemeProvider } from "./contexts/theme.context";
import ScrollToTop from "./components/ScrollToTop/scroll-to-top.component";

const App = () => {
  return (
    <ThemeProvider>
      <div className="App">
        <LoadingPage />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
};

export default App;
