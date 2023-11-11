import React, { useEffect, useState } from 'react'
import SectionTitle from './../../../Components/SectionTitle/SectionTitle';
import axios from 'axios';
import MenuItem from '../../Shared/MenuItem/MenuItem';


const PopulerMenu = () => {

const [menu, setMenu] = useState([])

  useEffect(()=> {axios.get('menu.json')
  .then(res => {
    const populerItem = res.data.filter(populer => populer.category === 'popular')
    setMenu(populerItem)})}
    ,[])


  return (
<>
<SectionTitle heading={'-Check it out-'} subHeading={'FROM OUR MENU'} />


<div className='grid md:grid-cols-2 xl:gap-10 md:gap-6 gap-4 mb-12'>
{menu.map(item => <MenuItem key={item._id} item={item} />)}
</div>

</>
  )
}

export default PopulerMenu
