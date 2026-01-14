import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { UiProvider } from "./context/UiContext.jsx";
import "./styles/styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UiProvider>
      <App />
    </UiProvider>
  </React.StrictMode>
);
