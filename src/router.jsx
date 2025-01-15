import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Mainlayout from "./Mainlayout";
import Home from "./pages/Home";
import Menupage from "./pages/Menupage";
import Food from "./pages/Food";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Privateroute from "./privateroute";
import Dashboard from "./Dashboard/Dashboard";
import Cart from "./Dashboard/Cart";
import Alluser from "./Dashboard/pages/Alluser";
import Additems from "./Dashboard/components/Additems";
import Adminroute from "./Dashboard/Adminroute";
import Manageitem from "./Dashboard/pages/Manageitem";


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
            element: <Privateroute><Menupage></Menupage></Privateroute>
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
          element:  <Register></Register>

        }

      ]
    },
    {
      path: 'dashboard',
      element: <Privateroute><Dashboard></Dashboard></Privateroute>,
      children: [
        {
          path: 'cart',
          element: <Cart></Cart>
        },
        {
          path: 'allusers',
          element: <Adminroute><Alluser></Alluser></Adminroute> 
        },
        {
          path: 'additems',
          element: <Adminroute><Additems></Additems></Adminroute> 
        },
        {
          path: 'manageitems',
          element: <Manageitem></Manageitem>
        }

      ]
    }
  ]);

export default router