import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home';
import OurMenu from '../Pages/OurMenu/OurMenu';
import Order from '../Pages/Shop/Order';
import Login from '../Pages/Login/Login';
import SignUp from './../Pages/SignUp/SignUp';
 import PrivateRoute from './PrivateRoute/PrivateRoute';
import Dashboard from './../Layout/Dashboard';
import Cart from './../Pages/Dashboard/Cart/Cart';
import AllUsers from '../Pages/Dashboard/AllUsers/AllUsers';
import AddItems from '../Pages/Dashboard/AddItems.jsx/AddItems';
import AdminRoute from './AdminRoute/AdminRoute';
import ManageItems from '../Pages/Dashboard/ManageItems/ManageItems';

const Routes = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
            path:'/',
            element:<Home />
        },
        {
          path:'/menu',
          element: <OurMenu />
        },
        {
          path:'/shop',
          element: <Order />
        },
        {
          path:'/login',
          element: <Login />
        },
        {
          path:'/register',
          element: <SignUp />
        },
        {
          path:`/dashboard`,
          element:<PrivateRoute><Dashboard /></PrivateRoute>,
          children: [
   
            // normal user routes 

            {
                path:'/dashboard/cart',
                element:<Cart />
            },
            
            
            // Admin Routes
            {
                path:'/dashboard/allusers',
                element:<AllUsers />
            },
            {
                path:'/dashboard/addItems',
                element:<AdminRoute><AddItems /></AdminRoute>
            },
            {
                path:'/dashboard/manageItems',
                element:<AdminRoute><ManageItems /></AdminRoute>
            },
          ]
        },
      ]
    },

  ]);

export default Routes
