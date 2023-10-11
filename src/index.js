import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./routes/Home";
import ErrorPage from "./routes/ErrorPage";
import Way1 from "./routes/Way1";
import Way2 from "./routes/Way2";
import { ThemeProvider } from "./context/ThemeContext";
import { StateProvider } from "./context/StateContext";

const AllProviders = ({ children }) => {
  return (
    <ThemeProvider>
      <StateProvider>{children}</StateProvider>
    </ThemeProvider>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/way1",
        element: <Way1 />,
      },
      {
        path: "/way2",
        element: <Way2 />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <StateProvider>
        <RouterProvider router={router} />
      </StateProvider>
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
