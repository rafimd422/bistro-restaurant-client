import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home';
import OurMenu from '../Pages/OurMenu/OurMenu';
import Order from '../Pages/Shop/Order';
import Login from '../Pages/Login/Login';
import SignUp from './../Pages/SignUp/SignUp';

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
  ]);

export default Routes
