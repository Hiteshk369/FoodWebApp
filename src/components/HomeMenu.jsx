import React from 'react'
import MenuCard from './MenuCard'
import { restaurants } from '../assets/Restaurants'

const HomeMenu = () => {
  return (
    <>
      <div className ='flex ml-48 gap-8 mr-48 mt-5 flex-wrap '>
      {
        restaurants.map((restaurant,index)=>{
          return(
            <React.Fragment key={index}>
              <MenuCard restaurant={restaurant}/>
            </React.Fragment>
          );
        })
      }
      </div>
      
    </>
  )
}

export default HomeMenu