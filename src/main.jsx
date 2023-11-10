import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Routes from "./Routes/Routes";
import { RouterProvider } from "react-router-dom";

const router = Routes;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="max-w-screen-xl mx-auto">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
