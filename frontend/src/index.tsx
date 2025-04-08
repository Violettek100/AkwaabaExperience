import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/CartContext"; // ✅ Ensure correct path

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider> {/* ✅ Wrap Entire App */}
        <App />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
