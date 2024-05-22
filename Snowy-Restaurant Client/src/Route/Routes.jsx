import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Root from '../root/Root';
import OurMenu from '../pages/OurMenu/OurMenu';
import Shop from '../pages/Shop/Shop';
import Pricing from '../pages/Pricing/Pricing';
import PrivetRoute from './PrivetRoute';
import MyDashboard from '../pages/Dashbord/MyDashboard/MyDashboard';
import MyCart from '../pages/Dashbord/MyCart/MyCart';
import DashboardHome from '../pages/Dashbord/DashboardHome/DashboardHome';
import AllUsers from '../pages/Dashbord/AllUsers/AllUsers';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/menu',
        element: <OurMenu />,
      },
      {
        path: '/shop',
        element: <Shop />,
      },
      {
        path: '/pricing',
        element: (
          <PrivetRoute>
            <Pricing />
          </PrivetRoute>
        ),
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
  {
    path: '/dashboard',
    element: <MyDashboard />,
    children: [
      {
        path: '/dashboard',
        element: <DashboardHome />,
      },
      {
        path: '/dashboard/my-cart',
        element: <MyCart />,
      },
      {
        path: '/dashboard/my-booking',
        element: <MyCart />,
      },
      {
        path: '/dashboard/add-review',
        element: <MyCart />,
      },
      {
        path: '/dashboard/payment-history',
        element: <MyCart />,
      },
      {
        path: '/dashboard/reservation',
        element: <MyCart />,
      },
      {
        path: '/dashboard/all-users',
        element: <AllUsers />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
]);
export default router;
