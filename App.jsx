import React, { StrictMode } from "react";
import HomePage from "./src/pages/HomePage";
import { createRoot } from "react-dom/client";
const rootElement = document.querySelector(".root");
createRoot(rootElement).render(
  <StrictMode>
    
      <HomePage />
    
  </StrictMode>
)

