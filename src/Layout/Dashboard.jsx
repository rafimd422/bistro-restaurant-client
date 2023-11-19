import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa"
import { NavLink, Outlet } from "react-router-dom"
import useCart from './../Hooks/useCart';

const Dashboard = () => {
const cart = useCart()

const isAdmin = true;
  return (
<div className="flex gap-4">
<div >
<div className="w-64 min-h-screen bg-orange-400 text-white">
<ul className="menu self pt-16 gap-2">
{isAdmin ? <>
  <li>
 <NavLink to={'/dashboard/userHome'}> <FaHome /> Admin Home</NavLink>
  </li>
  <li>
 <NavLink to={'/dashboard/addItems'}> <FaUtensils />Add Items</NavLink>
  </li>
  <li>
 <NavLink to={'/dashboard/manageitems'}> <FaList />Manage Items</NavLink>
  </li>

  <li>
 <NavLink to={'/dashboard/bookings'}> <FaBook />Manage Bookings</NavLink>
  </li>

  <li>
 <NavLink to={'/dashboard/allusers'}> <FaUsers />All users</NavLink>
  </li>


</> :
<>

<li>
 <NavLink to={'/'}> <FaHome />User Home</NavLink>
  </li>
<li>
 <NavLink to={'/dashboard/menu'}> <FaSearch />Menu</NavLink>
  </li>
  <li>
 <NavLink to={'/dashboard/cart'}> <FaShoppingCart />My cart</NavLink>
  </li>
<li>
 <NavLink to={'/dashboard/contact'}> <FaEnvelope />contact</NavLink>
  </li>
  </>
}
{/* {*Shared navlinks*} */}

<hr className="mt-6 bg-black" />

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
