import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const navOptions = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/contact"}>Contact</NavLink>
      </li>
      <li>
        <NavLink to={"/dashboard"}>Dashboard</NavLink>
      </li>
      <li>
        <NavLink to={"/menu"}>Our Menu</NavLink>
      </li>
      <li>
        <NavLink to={"/shop"}>Our shop</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-transparent bg-opacity-10 bg-black text-white fixed z-10 max-w-screen-xl">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 uppercase"
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
        <Link to={"/login"}>
          <button className="btn">Log in</button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;