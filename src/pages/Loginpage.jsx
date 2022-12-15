import React from 'react'
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

  return (
    <div className='grid grid-cols-2 h-screen'>
        <div>
        <div className=' flex items-center h-48 mt-6 justify-center '>
            <div className='flex items-center'>
                <div >
                    <img src={Logo} className='w-56' alt="logo" />
                </div>
                {/* <div>
                    <p className='tracking-wide text-3xl font-poppins font-semibold  text-logoColor'>GooD FooD</p>
                </div> */}
            </div>
            
        </div>
        <div className='flex flex-col ml-28 mt-4 mb-3 gap-4'>
            <p className='font-poppins font-semibold text-5xl'>Hungry?</p>
            <p className='text-xl text-lightColor font-poppins'>Order food from favorite restaurants near you.</p>
        </div>
        <motion.div whileTap={{
                scale : 0.9
            }} className='flex justify-center mt-5'>
             <button onClick={login} className='py-2 px-9 bg-black text-white font-semibold font-poppins flex items-center gap-2 hover:text-orangeColor' >
                <BsGoogle/>LoginWithGoogle</button>  
        </motion.div>
        <div className=' mt-10 '>
            <div className='grid grid-cols-2 bg-slate-200 h-[285px]'>
                <div className='flex flex-col items-center justify-center'>
                    <img src={FastDelivery} className = 'w-48 pr-3' alt="fastDelivery" />
                    <p className='font-poppins font-medium text-2xl'>Fast-Delivery</p>
                    <p className='font-poppins font-normal text-base'>Experience superfast delivery</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <img src={MinOrder} className='w-28 pt-3' alt="MinOrder" />
                    <p className='font-poppins font-medium text-2xl pt-4'>No Minimum Order</p>
                    <p className='font-poppins font-normal text-base'>Order with no restrictions on order value</p>

                </div>

            </div>
            
        </div>
        </div>

        <div>
            <img src={food} className='h-screen' alt="Food" />
        </div>
    </div>
  )
}

export default Loginpage