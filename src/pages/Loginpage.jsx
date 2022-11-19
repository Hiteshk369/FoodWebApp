import React from 'react'
import food from '../assets/food1.jpg'
import Logo from '../assets/GoodFood.png'
import {getAuth, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import { app } from '../firebase.config'
import {motion} from 'framer-motion'
import {BsGoogle} from 'react-icons/bs'
import { useSelector , useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';



const Loginpage = () => {

    const myState = useSelector((state) => state.reducers.user);
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
        <div className=' flex items-center h-48 mr-10 justify-center'>
            <div className='flex items-center'>
                <div >
                    <img src={Logo} className='w-36' alt="logo" />
                </div>
                <div>
                    <p className='tracking-wide text-3xl font-poppins font-semibold  text-logoColor'>GooD FooD</p>
                </div>
            </div>
            
        </div>
        <div className='flex flex-col mt-7 ml-28 gap-4'>
            <p className='font-poppins font-semibold text-5xl'>{myState ? myState.displayName : 'Hungry?'}</p>
            <p className='text-xl text-lightColor font-poppins'>Order food from favorite restaurants near you.</p>
        </div>
        <motion.div whileTap={{
                scale : 0.9
            }} className='flex justify-center mt-10'>
             <button onClick={login} className='py-2 px-9 bg-black text-white font-semibold font-poppins flex items-center gap-2 hover:text-orangeColor' >
                <BsGoogle/>LoginWithGoogle</button>  
        </motion.div>
        </div>
        
        <div>
            <img src={food} className='h-screen' alt="Food" />
        </div>
    </div>
  )
}

export default Loginpage