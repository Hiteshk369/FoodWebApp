import React from 'react'
import food from '../assets/food.jpg'
import Logo from '../assets/GoodFood.png'
import {getAuth, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import { app } from '../firebase.config'
import {motion} from 'framer-motion'


const Loginpage = () => {

    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    
    const login = async() => {
        const response = await signInWithPopup(auth , provider);
        console.log(response)
    }

  return (
    <div className='grid grid-cols-2 h-screen'>
        <div className=' flex items-center h-60 ml-20 justify-between'>
            <div className='flex items-center'>
                <div >
                    <img src={Logo} className='w-32' alt="logo" />
                </div>
                <div>
                    <p className='tracking-wide text-3xl font-poppins font-semibold  text-titleColor'>GOOD FOOD</p>
                </div>
            </div>
            <motion.div whileTap={{
                scale : 0.9
            }} className='mr-14'>
                <button onClick={login} className='py-2 px-8 bg-black text-white font-semibold font-poppins' >Login</button>
            </motion.div>
        </div>
        
        <div>
            <img src={food} alt="Food" />
        </div>
    </div>
  )
}

export default Loginpage