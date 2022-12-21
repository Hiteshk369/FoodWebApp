import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {motion} from 'framer-motion';

const PaymentButton = () => {

  const [success, setSucces] = useState(false);
  const navigate = useNavigate();

  const checkPayment = () => {
   setSucces(true);
   if(success === true){
      navigate('/confirmation')
   }
  }

  return (
    <motion.div whileTap={{scale:0.9}} className='p-3 border-none bg-cartBg text-white rounded-3xl px-10 cursor-pointer' onClick={checkPayment}>Payment</motion.div>
  )
}

export default PaymentButton