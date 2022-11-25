import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HomeMenu from '../components/HomeMenu'
import HomeNav from '../components/HomeNav'
import { getFoodItems } from '../utils/FirebaseFunctions'

const Homepage = () => {

  const dispatch = useDispatch();

  const fetchItems = async() => {
    await getFoodItems().then((data)=>{
      dispatch({
        type : 'SET_FOOD_ITEMS',
        foodItems : data
      });
    });
  };

  useEffect(() => {
    fetchItems();
  },);

  return (
    <>
        <Header />
        <Carousel />
        <HomeNav />
        <HomeMenu />
        <Footer />
    </>
  )
}

export default Homepage;