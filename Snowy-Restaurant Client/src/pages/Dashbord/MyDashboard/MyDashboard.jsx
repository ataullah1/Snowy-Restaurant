import { NavLink, Outlet, useLocation } from 'react-router-dom';
import Logo from '../../../assets/dashboard-logo.png';
import { FaCartPlus, FaHome } from 'react-icons/fa';
import './dashboard.css';
import { useEffect, useRef } from 'react';
const MyDashboard = () => {
  const location = useLocation();
  const active = useRef();
  useEffect(() => {
    if (active.current) {
      if (location.pathname !== '/dashboard') {
        active.current.classList.remove('active');
      } else {
        active.current.classList.add('active');
      }
    }
  }, [location.pathname]);

  return (
    <div>
      <button
        data-drawer-target="separator-sidebar"
        data-drawer-toggle="separator-sidebar"
        aria-controls="separator-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          />
        </svg>
      </button>
      <aside
        id="separator-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-5 py-4 overflow-y-auto bg-[#D1A054] dark:bg-gray-800">
          <div className="px-3 pt-10 pb-14">
            <img src={Logo} alt="" />
          </div>
          <ul className="space-y-2 font-medium dashboardNav">
            <li>
              <NavLink
                ref={active}
                to={'/dashboard'}
                className="flex items-center p-2 text-neutral-900 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 group"
              >
                <FaHome />
                <span className="ms-3">User Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'/dashboard/reservation'}
                className="flex items-center p-2 text-neutral-900 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 group"
              >
                <FaHome />
                <span className="ms-3">Reservation</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'/dashboard/payment-history'}
                className="flex items-center p-2 text-neutral-900 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 group"
              >
                <FaHome />
                <span className="ms-3">Payment History</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'/dashboard/my-cart'}
                className="flex items-center p-2 text-neutral-900 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 group"
              >
                <FaCartPlus />
                <span className="ms-3">My Cart</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'/dashboard/add-review'}
                className="flex items-center p-2 text-gray-800 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 group"
              >
                <FaHome />
                <span className="ms-3">Add Review</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'/dashboard/my-booking'}
                className="flex items-center p-2 text-neutral-900 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 group"
              >
                <FaHome />
                <span className="ms-3">My Booking</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>

      <div className="p-4 sm:ml-64 min-h-screen bg-gray-100">
        <Outlet />
      </div>
    </div>
  );
};

export default MyDashboard;
