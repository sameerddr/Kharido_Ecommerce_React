import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Auth0Provider } from "@auth0/auth0-react";
import { AppProvider } from "./components/context/Productcontext";
import { CartProvider } from "./components/context/cart_context";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-2h0cp1vwdrde3eja.us.auth0.com"
    clientId="lSQzmreNnZOHORL0sXoGPGf5qP4q1a67"
    redirectUri={window.location.origin}>
    <AppProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </AppProvider>{" "}
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
