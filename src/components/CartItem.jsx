import React, { useEffect, useState } from 'react'
import {BiPlus , BiMinus} from 'react-icons/bi'
import {HiCurrencyRupee} from 'react-icons/hi'
import { motion } from 'framer-motion'
import { useDispatch , useSelector } from 'react-redux'

const CartItem = ({data , flag , setFlag}) => {

    const [qty,setQty] = useState(data.qty);
    const [items,setItems] = useState([]);
    const dispatch = useDispatch();

    const cartItems = useSelector((state)=>state.reducers.cartItems)

    const cartDispatch = () => {
        localStorage.setItem('cartItems' , JSON.stringify(items));
        dispatch({
            type : 'SET_CART_ITEMS',
            cartItems : items,
        });
    };

    const updateQty = (action , id) => {
        if(action === 'add'){
            setQty(qty + 1);
            cartItems.map((item)=>{
                if(item.id === id){
                    item.qty += 1;
                    setFlag(flag+1);
                }
            });
            cartDispatch();
        }else{
            if(qty === 1){
                setItems(cartItems.filter((item) => item.id !== id));
                setFlag(flag+1);
                cartDispatch();
            }else{
                setQty(qty-1);
                cartItems.map((item)=>{
                    if(item.id === id){
                        item.qty -= 1;
                        setFlag(flag+1);
                    }
                });
                cartDispatch();
            }
        }
        
    };

    useEffect(() => {
      setItems(cartItems);
    
    }, [ cartItems ]);
    

  return (
    <div  className = 'w-full px-2 p-1 gap-1 flex items-center bg-cartItem'>
        <img className = 'w-20 h-16 max-w-[60px] rounded-lg object-contain' src={data?.imageUrl} alt="" />

            <div className=' font-poppins flex flex-col ml-1 gap-1'>
                <p className='text-base text-gray-50'>{data?.title}</p>
                <p className = 'text-xs text-gray-100 flex items-center'><HiCurrencyRupee size='15px' />
                {parseFloat(data?.price) * qty}
                </p>
            </div>

            <div className='group flex items-center gap-2 ml-auto'>
                <motion.div whileTap={{scale:0.75}} onClick={()=>updateQty('remove',data?.id)}>
                    <BiMinus className='text-gray-50 cursor-pointer' />
                </motion.div>

                <p className = 'w-5 h-5 flex items-center rounded-sm bg-cartBg justify-center text-gray-50 '>{data?.qty}</p>

                <motion.div whileTap={{scale:0.75}} onClick={()=>updateQty('add',data?.id)}>
                    <BiPlus className='text-gray-50 cursor-pointer' />
                </motion.div>

            </div>

    </div>
  )
}

export default CartItem