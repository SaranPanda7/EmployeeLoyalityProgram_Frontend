import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { msalConfig } from "./authConfig";
import { ClearBrowserCacheBoundary } from "react-clear-browser-cache";

const msalInstance = new PublicClientApplication(msalConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ClearBrowserCacheBoundary
      auto
      fallback="Loading"
      duration={1000}
    ></ClearBrowserCacheBoundary>

    <MsalProvider instance={msalInstance}>
      <App />
    </MsalProvider>
    <ClearBrowserCacheBoundary />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
