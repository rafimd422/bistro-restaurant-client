import React from 'react'
import Footer from './../Pages/Shared/Footer/Footer';
import { Outlet, useLocation } from 'react-router-dom';
import NavBar from './../Pages/Shared/NavBar/NavBar';

const Main = () => {

const location = useLocation()
console.log(location)
const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('register')

  return (
    <div className='w-full'>
        {!noHeaderFooter && <NavBar />}
      <Outlet/>
      {!noHeaderFooter && <Footer />}
    </div>
  )
}

export default Main
