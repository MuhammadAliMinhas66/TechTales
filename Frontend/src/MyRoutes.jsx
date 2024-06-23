import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

/* 
    This is the file where all the routes of our app is defined.
    
*/

const MyRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [{ index: true, element: <Home /> }],
    },
    {
      path: "/login",
      element: <Login />,
    },
    { path: "/signup", element: <Signup /> },
  ]);

  return <RouterProvider router={router} />;
};

export default MyRoutes;
