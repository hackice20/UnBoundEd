import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { StrictMode } from "react";
import { ClerkProvider } from "@clerk/clerk-react";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={import.meta.env.VITE_CLERK_FRONTEND_API}>
      <App />
    </ClerkProvider>
  </StrictMode>
);
