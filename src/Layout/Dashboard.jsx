import { FaAd, FaCalendar, FaHome, FaList, FaSearch, FaShoppingCart } from "react-icons/fa"
import { NavLink, Outlet } from "react-router-dom"

const Dashboard = () => {
  return (
<div className="flex gap-4">
<div >
<div className="w-64 min-h-screen bg-orange-400 text-white">
<ul className="menu">
  <li>
 <NavLink to={'/userHome'}> <FaHome /> User Home</NavLink>
  </li>
  <li>
 <NavLink to={'/cart'}> <FaShoppingCart />My cart</NavLink>
  </li>
  <li>
 <NavLink to={'/reservation'}> <FaCalendar />Reservation</NavLink>
  </li>
  <li>
 <NavLink to={'/review'}> <FaAd />Add Review</NavLink>
  </li>
  <li>
 <NavLink to={'/bookings'}> <FaList />My Bookings</NavLink>
  </li>

<hr className="mt-6 bg-black" />

<li>
 <NavLink to={'/'}> <FaHome />User Home</NavLink>
  </li>
<li>
 <NavLink to={'/menu'}> <FaSearch />Menu</NavLink>
  </li>
</ul>
</div>
</div>

<div className="w-full">
<Outlet /> 
</div>
</div>

  )
}

export default Dashboard
