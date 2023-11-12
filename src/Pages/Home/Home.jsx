import React from 'react'
import Banner from '../Banner/Banner'
import Category from './../Category/Category';
import PopulerMenu from './PopulerMenu/PopulerMenu';
import Featured from './Featured/Featured';
import Testimonials from './Testimonials/Testimonials';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
<>
<Helmet>
    <title>Bistro Boss Resturant | Home</title>
    </Helmet>
    <div className='top-0 relative'>

      <Banner/>
      <Category />

      <PopulerMenu />

      <Featured />
      <Testimonials />
    </div>
    </>
  )
}

export default Home
