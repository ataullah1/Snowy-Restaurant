import { NavLink, Outlet } from 'react-router-dom';
import Logo from '../../../assets/dashboard-logo.png';
import { FaCartPlus, FaHome, FaList } from 'react-icons/fa';
import './dashboard.css';
// import { useEffect, useRef } from 'react';
import { FaMessage, FaShop } from 'react-icons/fa6';
import { Toaster } from 'react-hot-toast';
import useAdmin from '../../../Hooks/useAdmin';
const MyDashboard = () => {
  const [isAdmin] = useAdmin();
  const admin = isAdmin;
  return (
    <div>
      <Toaster />

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
            {admin ? (
              <>
                <li>
                  <NavLink
                    end
                    to={'/dashboard'}
                    className="flex items-center p-2 text-neutral-900 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 group"
                  >
                    <FaHome />
                    <span className="ms-3">Admin Home</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={'/dashboard/reservation'}
                    className="flex items-center p-2 text-neutral-900 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 group"
                  >
                    <FaHome />
                    <span className="ms-3">Add Items</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={'/dashboard/payment-history'}
                    className="flex items-center p-2 text-neutral-900 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 group"
                  >
                    <FaHome />
                    <span className="ms-3">Manage items</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={'/dashboard/my-cart'}
                    className="flex items-center p-2 text-neutral-900 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 group"
                  >
                    <FaCartPlus />
                    <span className="ms-3">Manage bookings</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={'/dashboard/all-users'}
                    className="flex items-center p-2 text-gray-800 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 group"
                  >
                    <FaHome />
                    <span className="ms-3">All users</span>
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink
                    end
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
              </>
            )}

            {/* COmmon menu */}
            <div className="py-3">
              <div className="h-[1px] bg-white w-full" />
            </div>
            <li>
              <NavLink
                to={'/'}
                className="flex items-center p-2 text-neutral-900 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 group"
              >
                <FaHome />
                <span className="ms-3">Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'/menu'}
                className="flex items-center p-2 text-neutral-900 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 group"
              >
                <FaList />
                <span className="ms-3">Menu</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'/shop'}
                className="flex items-center p-2 text-neutral-900 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 group"
              >
                <FaShop />
                <span className="ms-3">Shop</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'/contact'}
                className="flex items-center p-2 text-neutral-900 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 group"
              >
                <FaMessage />
                <span className="ms-3">Contact</span>
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
