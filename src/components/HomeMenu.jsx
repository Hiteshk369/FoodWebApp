import React from 'react'
import MenuCard from './MenuCard'
import {motion} from 'framer-motion'
import {useSelector} from 'react-redux'

const HomeMenu = () => {

  const food = useSelector((state) => state.reducers.foodItems)
  return (
    <>
      <div className ='flex ml-28  gap-8 mr-28 mt-5 flex-wrap '>
      {
        food.map((food)=>{
          return(
            <motion.div key= {food.id} whileHover={{
              scale : 1.1
            }}>
                <React.Fragment>
                <MenuCard food={food}/>
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