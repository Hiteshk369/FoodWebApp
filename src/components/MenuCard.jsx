import React, { useEffect, useState } from 'react'
import {FaRegCaretSquareUp} from 'react-icons/fa'
import { HiCurrencyRupee } from 'react-icons/hi2'
import { BsFillCartPlusFill } from 'react-icons/bs'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'



const MenuCard = ({food}) => {

    const cartItems = useSelector((state)=>state.reducers.cartItems);
    const dispatch = useDispatch();
    const [items , setItems] = useState([]);

    const addtocart = () => {
        dispatch({
            type : 'SET_CART_ITEMS',
            cartItems : items
        })
        localStorage.setItem('cartItems' , JSON.stringify(items));
    }

    useEffect(() => {
      addtocart();
    
    }, [items ])
    

  return (
   
    
    <div className='block relative border p-6 cursor-pointer rounded-xl border-white hover:border-borderColor h-340 w-370 '>
    <div>
        <ItemImg className="mt-3 rounded-xl" src={food?.imageUrl} alt="Cake" />
    </div>
    <div className='mt-3'>
        <p className='font-poppins font-semibold text-lg'>{food?.title}</p>
        <div className='flex items-center justify-between'>
        <p className="font-poppins font-normal text-base">{food?.category}</p>
        <FaRegCaretSquareUp className = {`${food.vegnonveg === 'veg' ? 'text-emerald-800' : 'text-red-800' } mr-2 `} />
        </div>
        
    </div>
    <div className='mt-2'>
        <div className='flex items-center justify-between'>
            <p className='font-normal font-poppins flex items-center text-sm'><HiCurrencyRupee size="20px" />{food?.price}</p>
            <motion.p onClick = {()=>setItems([...cartItems,food])} whileTap={{scale : 0.75}} className='p-2 rounded-full bg-orange-700 text-white font-semibold' ><BsFillCartPlusFill /></motion.p>
        </div>
    </div>
    </div> 
    
  )
}

const ItemImg = styled('img')({
    height:'160px',
    width : '254px'
});

export default MenuCard