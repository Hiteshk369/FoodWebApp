import React, { useEffect }  from 'react'
import MenuCard from './MenuCard'
import {motion} from 'framer-motion'
import {useDispatch, useSelector} from 'react-redux'
import { getFoodItems } from '../utils/FirebaseFunctions'
import NoData from '../assets/NoData.webp'

const HomeMenu = () => {

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
  });
  
  const food = useSelector((state) => state.reducers.foodItems);
  const filterItem = useSelector((state) => state.reducersItem.filterItem );
  
  return (
    <>
      {
        food && food.length > 0 ? (
          <div className ='flex md:ml-28 gap-8 md:mr-28 mt-5 flex-wrap small:flex-col small:items-center small:justify-center small:gap-3'>
    {
      filterItem === 'All Dishes' ? 
      food.map((food) => {
        return(
          <motion.div key= {food.id} whileHover={{
            scale : 1.1
          }}>
              <React.Fragment>
              <MenuCard food={food}/>
              </React.Fragment>
          </motion.div>
          
        );
      } )
        : 
      food.filter((item) => item.category === filterItem).length > 0 ?
      food.filter((item) => item.category === filterItem).map((food) =>{
        return(
          <motion.div key= {food.id} whileHover={{
            scale : 1.1
          }}>
              <React.Fragment>
              <MenuCard food={food}/>
              </React.Fragment>
          </motion.div>
  
        );
      }) : 
      <div className='flex flex-col w-full items-center justify-center gap-4'>
        <img className = 'w-300' src={NoData} alt="" />
        <p className='font-poppins text-xl text-lightColor small:text-lg small:flex small:items-center small:justify-center'>Dishes are not available in this category</p>
      </div>
    
    }
    
    </div>
        )
         : (
          <div className='flex items-center justify-center w-300'>
              <img src={NoData} alt="" />
          </div>
         )
      }
        
  
      
      
    </>
  )
}

export default HomeMenu