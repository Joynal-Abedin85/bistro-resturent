import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Mainlayout from "./Mainlayout";
import Home from "./pages/Home";
import Menupage from "./pages/Menupage";
import Food from "./pages/Food";
import Login from "./auth/Login";
import Register from "./auth/Register";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout></Mainlayout>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: 'ourmenu',
            element: <Menupage></Menupage>
        },
        {
          path: '/food/:category',
          element: <Food></Food>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'register',
          element: <Register></Register>

        }

      ]
    },
  ]);

export default router