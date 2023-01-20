import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { EmailProvider } from "./context/EmailContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <EmailProvider>
      <App />
    </EmailProvider>
  </React.StrictMode>
);
