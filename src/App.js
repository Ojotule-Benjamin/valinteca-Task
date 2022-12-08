import React from "react";
import Welcome from "./pages/Welcome";
import SignUp from "./pages/SignUp";
import Succeed from "./pages/Succeed";
// import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "/register",
    element: <SignUp />,
  },
  {
    path: "/successful",
    element: <Succeed />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
