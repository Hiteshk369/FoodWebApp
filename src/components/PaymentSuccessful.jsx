import React from 'react'
import Lottie from 'lottie-react'
import Successful from '../assets/79952-successful.json'


const PaymentSuccessful = () => {


  return (
    <div className='h-screen w-screen flex flex-1 items-center justify-center'>
        <Lottie className='md:w-508' animationData={Successful}/>
    </div>
  )
}

export default PaymentSuccessful