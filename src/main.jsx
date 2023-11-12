import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Routes from "./Routes/Routes";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'



const queryClient = new QueryClient()

const router = Routes;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
        <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <div className="max-w-screen-xl mx-auto">
      <RouterProvider router={router} />
      </div>
    </HelmetProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
