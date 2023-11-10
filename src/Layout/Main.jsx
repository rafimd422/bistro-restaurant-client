import React from 'react'
import Footer from './../Pages/Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
  return (
    <div>
      <Outlet/>
      <Footer />
    </div>
  )
}

export default Main
