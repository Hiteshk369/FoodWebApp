import React from 'react'
import MenuCard from './MenuCard'
import { restaurants } from '../utils/Restaurants'
import {motion} from 'framer-motion'

const HomeMenu = () => {
  return (
    <>
      <div className ='flex ml-28  gap-8 mr-28 mt-5 flex-wrap '>
      {
        restaurants.map((restaurant)=>{
          return(
            <motion.div key= {restaurant.id} whileHover={{
              scale : 1.1
            }}>
                <React.Fragment>
                <MenuCard restaurant={restaurant}/>
                </React.Fragment>
            </motion.div>
            
          );
        })
      }
      </div>
      
    </>
  )
}

export default HomeMenu