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
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
]);
export default router;
