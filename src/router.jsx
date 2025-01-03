import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Mainlayout from "./Mainlayout";
import Home from "./pages/Home";
import Menupage from "./pages/Menupage";
import Food from "./pages/Food";


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
        }

      ]
    },
  ]);

export default router