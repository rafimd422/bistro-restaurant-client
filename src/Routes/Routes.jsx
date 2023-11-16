import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home';
import OurMenu from '../Pages/OurMenu/OurMenu';
import Order from '../Pages/Shop/Order';
import Login from '../Pages/Login/Login';
import SignUp from './../Pages/SignUp/SignUp';
// import PrivateRoute from './PrivateRoute/PrivateRoute';
import Dashboard from './../Layout/Dashboard';
import Cart from './../Pages/Dashboard/Cart/Cart';

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

      ]
    },
     {
       path:`/`,
       element:<Dashboard />,
       children: [

         {
             path:'/cart',
             element:<Cart />
         },
       ]
     },
  ]);

export default Routes
