import { Link } from 'react-router-dom';
import img1 from '../../assets/logImg.png';
import useAuth from '../../Hooks/useAuth';
import ProfileMenu from '../ProfileMenu/ProfileMenu';
import { ImSpinner9 } from 'react-icons/im';
const Nav = () => {
  const { userDta, isLoading } = useAuth();
  return (
    <div className="fixed z-10 w-full">
      <nav className="bg-[#15151580] border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <div className="max-w-screen-2xl w-10/12 flex flex-wrap items-center justify-between mx-auto py-4">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={img1} className="h-8" alt="Flowbite Logo" />
          </a>
          <button
            data-collapse-toggle="navbar-dropdown"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-dropdown"
            aria-expanded="false"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-dropdown"
          >
            <ul className="flex flex-row items-center font-medium p-4 md:p-0 mt-4 border border-gray-100 text-white rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link className="block py-2 px-3">Home</Link>
              </li>
              <li>
                <Link className="block py-2 px-3 " to={'menu'}>
                  Our Menu
                </Link>
              </li>
              <li>
                <Link className="block py-2 px-3" to={'/shop'}>
                  Shop
                </Link>
              </li>
              <li>
                <Link className="block py-2 px-3" to={'/pricing'}>
                  Pricing
                </Link>
              </li>
              <li>
                <Link className="block py-2 px-3 ">Contact</Link>
              </li>
              <li>
                {isLoading ? (
                  <div className="py-2 w-[60px] h-[60px] flex items-center justify-center text-5xl text-white">
                    <ImSpinner9 className="animate-spin" />
                  </div>
                ) : userDta ? (
                  <ProfileMenu />
                ) : (
                  <Link to={'/login'}>
                    <button className="py-2 px-6 bg-[#efa905] rounded ">
                      Login
                    </button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
