import { createRoot, Root } from "react-dom/client";
import React from "react";
import { App } from "./App";

let root: Root;
const appContainer = document.getElementById("root");

if (appContainer) {
  root = createRoot(appContainer);

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
