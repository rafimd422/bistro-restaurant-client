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
import Update from '../Pages/Dashboard/Update/Update';
import axios from 'axios';
import Payment from '../Pages/Dashboard/Payment/Payment';
import PaymentHistory from '../Pages/Dashboard/PaymentHsitory/PaymentHistory';

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
            {
                path:'/dashboard/payment',
                element:<Payment />
            },
            {
                path:'/dashboard/paymenthistory',
                element:<PaymentHistory />
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
                element:<ManageItems />
            },
            {
                path:'/dashboard/update/:id',
                element:<AdminRoute>< Update/></AdminRoute>,
                loader: ({params}) => axios.get(`http://localhost:5000/menu/${params.id}`)
            },
          ]
        },
      ]
    },

  ]);

export default Routes
