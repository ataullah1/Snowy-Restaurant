import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';
import { Toaster } from 'react-hot-toast';

const Root = () => {
  return (
    <div>
      <Toaster />
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
