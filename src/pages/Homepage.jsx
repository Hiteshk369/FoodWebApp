import React from 'react'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HomeMenu from '../components/HomeMenu'
import HomeNav from '../components/HomeNav'

const Homepage = () => {
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