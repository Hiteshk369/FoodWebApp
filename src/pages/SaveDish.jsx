import React from 'react'
import { useSelector } from 'react-redux';
import CreateContainer from '../components/CreateContainer'
import Header from '../components/Header'
import PermissionDenied from '../assets/permission denied.webp'
import { Helmet, HelmetProvider } from 'react-helmet-async';

const SaveDish = () => {

  const user = useSelector((state)=>state.reducers.user);
  return (
    <>
        <HelmetProvider>
          <Helmet>
            <title>GoodFood | Create</title>
          </Helmet>
        </HelmetProvider>
        
        <Header />
        {
          user.email === `${process.env.REACT_APP_EMAIL}` ?
            <CreateContainer /> : 
            <div className='mt-36 flex flex-1 flex-col items-center justify-center gap-6'>
              <img src={PermissionDenied} className='w-508' alt="" />
              <p className='font-poppins text-3xl font-medium ' >Only authorized persons are allowed to view this page!</p>
            </div>
          
        }
       
    </>
  )
}

export default SaveDish