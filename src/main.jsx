import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import MenuLado from "../Components/MenuLado.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter className="flex flex-row">
    <App />
  </BrowserRouter>,
);
