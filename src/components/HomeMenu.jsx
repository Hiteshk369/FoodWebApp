import React, { useEffect }  from 'react'
import MenuCard from './MenuCard'
import {motion} from 'framer-motion'
import {useDispatch, useSelector} from 'react-redux'
import { getFoodItems } from '../utils/FirebaseFunctions'

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
  },[]);


  const food = useSelector((state) => state.reducers.foodItems);
  const filterItem = useSelector((state) => state.reducersItem.filterItem );
  
  return (
    <>
      <div className ='flex ml-28  gap-8 mr-28 mt-5 flex-wrap '>
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
      })
      
      }
      
      </div>
      
    </>
  )
}

export default HomeMenu