import {
  FaAd,
  FaBook,
  FaCalendar,
  FaEnvelope,
  FaHome,
  FaList,
  FaSearch,
  FaShoppingCart,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
  const [isAdmin, isAdminLoading] = useAdmin();

  if (isAdminLoading) {
    return (
      <div className="h-screen w-full flex justify-center items-center">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="flex gap-4">
      <div>
        <div className="w-64 min-h-screen bg-orange-400 text-white">
          <ul className="menu self pt-16 gap-2">
            {isAdmin && (
              <>
                <li>
                  <NavLink to={"/dashboard/adminhome"}>
                    {" "}
                    <FaHome /> Admin Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/dashboard/addItems"}>
                    {" "}
                    <FaUtensils />
                    Add Items
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/dashboard/manageItems"}>
                    {" "}
                    <FaList />
                    Manage Items
                  </NavLink>
                </li>

                <li>
                  <NavLink to={"/dashboard/bookings"}>
                    {" "}
                    <FaBook />
                    Manage Bookings
                  </NavLink>
                </li>

                <li>
                  <NavLink to={"/dashboard/allusers"}>
                    {" "}
                    <FaUsers />
                    All users
                  </NavLink>
                </li>
              </>
            )}

            {!isAdmin && (
              <>
                <li>
                  <NavLink to="/dashboard/userHome">
                    <FaHome></FaHome>
                    User Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/paymenthistory">
                    <FaCalendar></FaCalendar>
                    Payment History
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/dashboard/cart"}>
                    {" "}
                    <FaShoppingCart />
                    My cart
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/dashboard/contact"}>
                    {" "}
                    <FaEnvelope />
                    contact
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/review">
                    <FaAd></FaAd>
                    Add a Review
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/bookings">
                    <FaList></FaList>
                    My Bookings
                  </NavLink>
                </li>
              </>
            )}

            {/* {*Shared navlinks*} */}

            <hr className="mt-6 bg-black" />
            <div className="divider"></div>
            <li>
              <NavLink to="/">
                <FaHome></FaHome>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/menu">
                <FaSearch></FaSearch>
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink to="/order/contact">
                <FaEnvelope></FaEnvelope>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
