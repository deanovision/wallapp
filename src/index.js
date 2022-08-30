import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AuthorizerProvider } from "@authorizerdev/authorizer-react";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthorizerProvider
      config={{
        authorizerURL: process.env.REACT_APP_AUTH_URL,
        redirectURL: "http://localhost:3000/wall",
        clientID: process.env.REACT_APP_AUTH_CLIENT_ID,
      }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthorizerProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
