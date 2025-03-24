import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// Create an array of font paths to preload
const fontFiles = [
  "./assets/fonts/Louis George Cafe.woff",
  "./assets/fonts/Louis George Cafe Bold.woff",
  "./assets/fonts/Louis George Cafe Italic.woff",
  "./assets/fonts/Louis George Cafe Bold Italic.woff",
  "./assets/fonts/Louis George Cafe Light.woff",
  "./assets/fonts/Louis George Cafe Light Italic.woff",
];

// Preload fonts
fontFiles.forEach((fontPath) => {
  const link = document.createElement("link");
  link.rel = "preload";
  link.href = fontPath;
  link.as = "font";
  link.type = "font/woff";
  link.crossOrigin = "anonymous";
  document.head.appendChild(link);
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
