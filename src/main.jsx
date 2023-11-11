import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Routes from "./Routes/Routes";
import { RouterProvider } from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

const router = Routes;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
        <QueryClientProvider client={queryClient}>
    <div className="max-w-screen-xl mx-auto">
      <RouterProvider router={router} />
    </div>
    </QueryClientProvider>
  </React.StrictMode>
);
