import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import orderCoverImg from '../../assets/shop/banner2.jpg'
import Cover from '../Shared/Cover/Cover'
import { useState } from 'react'
import useMenu from './../../Hooks/useMenu';
import FoodCard from '../Shared/FoodCard/FoodCard';

const Order = () => {
  const [tabIndex, setTabIndex] = useState(0)
const [menu] = useMenu()

const dessert = menu.filter( menu => menu.category === 'dessert')
const soup = menu.filter( menu => menu.category === 'soup')
const salad = menu.filter( menu => menu.category === 'salad')
const pizza = menu.filter( menu => menu.category === 'pizza')
const drinks = menu.filter( menu => menu.category === 'drinks')


  return (
    <div>
      <Cover img={orderCoverImg} title={"OUR SHOP"} subtitle={'Would you like to try a dish?'}></Cover>

      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
    <TabList className={'flex justify-center md:gap-8 gap-4 items-center mt-10 my-8'}>
      <Tab className={tabIndex === 0 ? `cursor-pointer text-yellow-700 font-bold border-b-2 border-yellow-700` : `cursor-pointer`}>Salad</Tab>
      <Tab className={tabIndex === 1 ? `cursor-pointer text-yellow-700 font-bold border-b-2 border-yellow-700` : `cursor-pointer`}>Pizza</Tab>
      <Tab className={tabIndex === 2 ? `cursor-pointer text-yellow-700 font-bold border-b-2 border-yellow-700` : `cursor-pointer`}>Soup</Tab>
      <Tab className={tabIndex === 3 ? `cursor-pointer text-yellow-700 font-bold border-b-2 border-yellow-700` : `cursor-pointer`}>Dessert</Tab>
      <Tab className={tabIndex === 4 ? `cursor-pointer text-yellow-700 font-bold border-b-2 border-yellow-700` : `cursor-pointer`}>Drinks</Tab>
    </TabList>
    <TabPanel id='#salad' className={'grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center'}>
{salad.map(item => <FoodCard image={item.image} title={item.name} subtitle={item.recipe} price={item.price} />)} 
    </TabPanel>
    <TabPanel id='#pizza' className={'grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center'}>
{pizza.map(item => <FoodCard image={item.image} title={item.name} subtitle={item.recipe} price={item.price} />)}
    </TabPanel>
    <TabPanel id='#soup' className={'grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center'}>
{soup.map(item => <FoodCard image={item.image} title={item.name} subtitle={item.recipe} price={item.price} />)}
    </TabPanel>
    <TabPanel id='#dessert' className={'grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center'}>
{dessert.map(item => <FoodCard image={item.image} title={item.name} subtitle={item.recipe} price={item.price} />)}
    </TabPanel>
    <TabPanel className={'grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center'}>
{drinks.map(item => <FoodCard image={item.image} title={item.name} subtitle={item.recipe} price={item.price} />)}
    </TabPanel>

  </Tabs>

    </div>
  )
}

export default Order
