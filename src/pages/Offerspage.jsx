import React from 'react'
import Header from '../components/Header'
import { Helmet, HelmetProvider } from 'react-helmet-async'

function Offerspage() {
  return (
    <>
    <HelmetProvider>
      <Helmet>
        <title>GoodFood | Offers</title>
      </Helmet>
    </HelmetProvider>
    
    <Header />
    <div className='h-screen w-screen flex flex-1 small:flex-col items-center justify-center'>
       <p className='font-poppins text-3xl small:font-semibold small:m-5'>Offers section is under development</p> 
    </div>
    </>
  )
}

export default Offerspage