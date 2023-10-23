import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import "aos/dist/aos.css";
import "remixicon/fonts/remixicon.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
