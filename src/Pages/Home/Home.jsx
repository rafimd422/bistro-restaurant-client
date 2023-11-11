import React from 'react'
import Banner from '../Banner/Banner'
import Category from './../Category/Category';
import PopulerMenu from './PopulerMenu/PopulerMenu';

const Home = () => {
  return (
    <div className='top-0 relative'>
      <Banner/>
      <Category />

      <PopulerMenu />
    </div>
  )
}

export default Home
