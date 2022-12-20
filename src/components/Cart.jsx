import React, { useEffect, useState } from 'react'
import {BsArrowLeft} from 'react-icons/bs'
import {HiCurrencyRupee} from 'react-icons/hi'
import {GrClear} from 'react-icons/gr'
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import EmptyCart from '../assets/EmptyCart.svg'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'



const Cart = () => {

    const cartShow = useSelector((state)=>state.reducers.cartShow)
    const cartItems = useSelector((state)=>state.reducers.cartItems);
    const user = useSelector((state)=>state.reducers.user);

    const dispatch = useDispatch();

    const [flag,setFlag] = useState(1);
    const [total,setTotal] = useState(0);

    const closeCart = () => {
        dispatch({
            type : 'SET_CARTSHOW',
            cartShow : !cartShow
        })
    }

    const clearCart = () => {
        dispatch({
            type : 'SET_CART_ITEMS',
            cartItems : []
        })

        localStorage.setItem('cartItems' , JSON.stringify([]));
    }

    useEffect(() => {
      let totalPrice = cartItems.reduce((accumulator,item) => {
            return accumulator + (item.qty * item.price);     
      },0);
      setTotal(totalPrice);
    },[total , cartItems, flag]);
    

  return (
    <motion.div 
     initial = {{opacity : 0 , x : 200}}
     animate = {{opacity : 1 , x : 0}}
     exit = {{opacity : 0 , x : 200}} 
     className = 'fixed right-0 top-0 z-[101] h-screen w-full md:w-375 bg-white drop-shadow-md flex flex-col'>
        <div className = 'flex justify-between font-poppins text-base font-semibold p-4 items-center'>
            <motion.p onClick = {closeCart} whileTap={{scale : 0.75}}><BsArrowLeft size="24px" className='cursor-pointer' /></motion.p>
            <p>Cart</p>
            <motion.p onClick={clearCart} whileTap={{scale : 0.75}} className='flex items-center gap-2 bg-gray-100 hover:shadow-md rounded-lg px-2 py-1 cursor-pointer'>Clear <GrClear /></motion.p>
        </div>

        {
            cartItems && cartItems.length > 0 ? (
                <div className='w-full h-full bg-cartBg flex flex-col rounded-t-[1.5rem]'>
                <div className='w-full h-340 md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-hide'>
                {
                    cartItems && cartItems.map((item) => {
                        return (
                            <CartItem key={item.id} data={item} flag={flag} setFlag={setFlag} />
                        )
                    })
                }
                
            </div>
            <div className = 'w-full flex-1 bg-cartTotal rounded-t-[1.5rem] flex flex-col items-center justify-evenly px-8 py-2'>
                <div className='w-full flex items-center justify-between'>
                    <p className='text-gray-400 text-lg font-poppins'>Sub Total</p>
                    <p className='flex text-gray-400 items-center text-lg font-poppins'><HiCurrencyRupee />{total}</p>
                </div>
                <div className='w-full flex items-center justify-between'>
                    <p className='text-gray-400 text-lg font-poppins'>Delivery</p>
                    <p className='flex text-gray-400 items-center text-lg font-poppins'><HiCurrencyRupee />40</p>
                </div>
                <div className='w-full border-b border-gray-600 my-2'></div>
                <div className='w-full flex items-center justify-between'>
                    <p className='text-gray-200 text-lg font-poppins'>Total</p>
                    <p className='flex text-gray-200 items-center text-lg font-poppins'><HiCurrencyRupee />{total+40}</p>
                </div>
                {
                    user ? (
                        <Link to='/checkout' className = 'w-full'>
                        <motion.button whileTap={{scale : 0.9}} className = 'w-full rounded-lg  bg-gradient-to-tr from-orange-400 to-orange-600 text-gray-50 py-2 text-lg font-poppins font-semibold hover:shadow-lg'>
                            Check out
                        </motion.button>
                        </Link>
                    ) :
                    (
                        <motion.button whileTap={{scale : 0.9}} className = 'w-full rounded-lg  bg-gradient-to-tr from-orange-400 to-orange-600 text-gray-50 py-2 text-lg font-poppins font-semibold hover:shadow-lg'>
                            Login to Check out
                        </motion.button>
                    )
                }
            </div>
            </div>
            ) :
            <div className='w-full h-full flex flex-col items-center justify-center'>
                <div className='flex flex-col items-center justify-center gap-6'>
                    <img src={EmptyCart} className='w-300' alt="" />
                    <p className = 'font-poppins font-semibold text-3xl text-lightColor'>Your cart is empty!</p>
                </div>
                
                <p className='font-poppins font-semibold text-medium text-lightColor'>Add items to your cart</p>
            </div>
        }
        
    </motion.div>
  )
}

export default Cart