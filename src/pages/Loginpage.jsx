import React, { useState , useEffect } from 'react'
import food from '../assets/food.jpg'
import Logo from '../assets/logo1.png'
import FastDelivery from '../assets/FastDelivery.png'
import MinOrder from '../assets/MinOrder.jpg'
import {getAuth, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import { app } from '../firebase.config'
import {motion} from 'framer-motion'
import {BsGoogle} from 'react-icons/bs'
import { useSelector , useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async'


const Loginpage = () => {

    const user = useSelector((state) => state.reducers.user);
    const dispatch = useDispatch();
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const navigate = useNavigate();
    
    const login = async() => {
        const {user : { refreshToken , providerData }} = await signInWithPopup(auth , provider);
        navigate('/home')
        dispatch({
            type : 'SET_USER',
            user : providerData[0]
        });
        localStorage.setItem("user",JSON.stringify(providerData[0]));

    }

    const [width, setWidth] = useState(window.innerWidth);

    const updateWidth = () => {
        setWidth(window.innerWidth);
    };
    
    useEffect(()=>{
        window.addEventListener('resize',updateWidth);
        return () => window.removeEventListener('resize',updateWidth)
    })

  return (
    <>
    <HelmetProvider>
        <Helmet>
            <title>GoodFood | Login</title>
        </Helmet>
    </HelmetProvider>

    <div className='md:grid md:grid-cols-2 h-screen'>
        <div>
        <div className=' flex items-center h-48 mt-6 justify-center '>
            <div className='flex items-center'>
                <div >
                    <img src={Logo} className='w-56 small:w-48' alt="logo" />
                </div>
            </div>
            
        </div>
        <div className='flex flex-col md:ml-28 md:mt-4 md:mb-3 gap-4 mt-10 '>
            <p className='font-poppins font-semibold text-5xl flex small:items-center small:justify-center'>Hungry?</p>
            <p className='text-xl text-lightColor font-poppins small:m-4 small:flex small:items-center small:justify-center'>Order Fresh Food & Enjoy.</p>
        </div>
        <motion.div whileTap={{
                scale : 0.9
            }} className='flex justify-center mt-5'>
             <button onClick={login} className='py-2 px-9 bg-black text-white font-semibold font-poppins flex items-center gap-2 hover:text-orangeColor' >
                <BsGoogle/>LoginWithGoogle</button>  
        </motion.div>
        {
            width < 768 && (
                <div className='flex flex-col items-center justify-center m-7 text-sm text-lightColor font-poppins'>
                    <p>*Login with Google to enjoy food from your</p>
                    <p>favourite restaurant</p>
                </div>
            )
        }
       
        <div className=' mt-10 '>
            <div className='grid grid-cols-2 bg-slate-200 md:h-[285px] small:pb-16 small:pt-10 small:mt-32'>
                <div className='flex flex-col items-center justify-center'>
                    <img src={FastDelivery} className = 'w-48 pr-3 small:w-36 small:pt-2' alt="fastDelivery" />
                    <p className='font-poppins font-medium text-2xl small:text-lg small:pt-2 small:pb-2'>Fast-Delivery</p>
                    <p className='font-poppins font-normal text-base small:ml-4 small:mr-4 small:text-sm small:flex small:items-center small:justify-center small:pl-6'>Experience superfast delivery</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <img src={MinOrder} className='w-28 pt-3 small:w-20 small:pt-6' alt="MinOrder" />
                    <p className='font-poppins font-medium text-2xl pt-4 small:flex small:items-center small:justify-center small:text-lg small:pb-2'>No Minimum Order</p>
                    <p className='font-poppins font-normal text-base small:text-sm small:flex small:items-center small:justify-center small:pl-2 small:pr-3'>Order with no restrictions on order value</p>

                </div>

            </div>
            
        </div>
        </div>
        {
            width > 768 && (
                <div>
                    <img src={food} className='h-screen' alt="Food" />
                </div>
            )
        }  
    </div>
    </>
  )
}

export default Loginpage