import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from './../../../Provider/AuthProvider';
import swal from "sweetalert";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../Hooks/useCart";
import useAdmin from "../../../Hooks/useAdmin";

const NavBar = () => {

const {logOut, user} = useContext(AuthContext)
const [cart] = useCart()
const [isAdmin] = useAdmin()

const handleLogOut = () => {

  swal({
    title: "Do you want to Log Out From This Account?",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      logOut()
      .then(() => {
        localStorage.removeItem("access-token");
      })
swal("Log Out Successfull", {
  icon: "success",
});}
});
}

  const navOptions = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/contact"}>Contact</NavLink>
      </li>
      <li>
      
{
user && isAdmin &&   <NavLink to={"/dashboard/adminhome"}>Dashboard</NavLink>
}
{
  user && !isAdmin &&   <NavLink to={"/dashboard/userhome"}>Dashboard</NavLink>
}

      </li>
      <li>
        <NavLink to={"/menu"}>Our Menu</NavLink>
      </li>
      <li>
        <NavLink to={"/shop"}>Our shop</NavLink>
      </li>
      <li className="indicator">
  <span className="flex items-center indicator-item badge badge-primary">{cart.length}</span> 
  <NavLink className={'text-lg'} to={'/dashboard/cart'}><FaShoppingCart />
</NavLink>
</li>
    </>
  );
  return (
    <div className="navbar bg-transparent bg-opacity-10 bg-white text-gray-200 fixed z-10 max-w-screen-xl">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 uppercase items-center"
          >
            {navOptions}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 uppercase">{navOptions}</ul>
      </div>
      <div className="navbar-end">
       {user == null ?  <Link to={"/login"}>
          <button className="btn">Log in</button>
        </Link> : <button onClick={handleLogOut} className="btn">Log Out</button>}
      </div>
    </div>
  );
};

export default NavBar;
