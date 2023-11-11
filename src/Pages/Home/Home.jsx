import React from 'react'
import Banner from '../Banner/Banner'
import Category from './../Category/Category';
import PopulerMenu from './PopulerMenu/PopulerMenu';
import Featured from './Featured/Featured';

const Home = () => {
  return (
    <div className='top-0 relative'>
      <Banner/>
      <Category />

      <PopulerMenu />

      <Featured />
    </div>
  )
}

export default Home
