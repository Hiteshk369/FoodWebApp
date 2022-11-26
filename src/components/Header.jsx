import React, { useState } from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { Link , useNavigate } from 'react-router-dom'
import {motion} from 'framer-motion'
import Logo from '../assets/logo1.png'
import Avatar from '../assets/avatar.png'
import styled from 'styled-components'
import {BiSearch , BiLogOut} from 'react-icons/bi'
import {TbDiscount2} from 'react-icons/tb'
import {IoIosHelpBuoy} from 'react-icons/io'
import {BsFillCartCheckFill , BsPlus} from 'react-icons/bs'
import './Styles.css';



const Header = () => {
  
  const user = useSelector((state)=>state.reducers.user)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isMenu, setisMenu] = useState(false);

  const openMenu = () => {
    isMenu ? setisMenu(false) : setisMenu(true);
  }

  const clearStorage = () => {
    dispatch({
      type : 'SET_USER',
      user : null,
    });
    setisMenu('false');
    localStorage.clear();
    navigate('/')
  }

  const cartShow = useSelector((state)=>state.reducers.cartShow);

  const showCart = () => {
    dispatch({
      type : 'SET_CARTSHOW',
      cartShow : !cartShow
    })
  }

  return (
    <div className='w-screen h-auto flex flex-col' >
    <header className = "w-screen h-100 fixed z-50 bg-white" >
        <div className = "hidden w-full md:flex pt-3 pb-3 justify-evenly h-24">
            <div className="flex items-center"onClick={() => setisMenu(false)}>
                <LogoImg src= { Logo } className = " pt-4 object-cover" alt="logo" />
            </div>
              <ul className = "flex gap-10 items-center justify-center">
                  <li className=" flex items-center justify-center cursor-pointer py-8 buttonColor transition duration-200 ease-in-out" onClick={() => setisMenu(false)}>
                    <div className='flex'>
                    <BiSearch style={{
                      'fontSize':"23px",
                      'fontWeight':"bold"
                    }} />
                    <Loctext className = " font-semibold mx-2  cursor-pointer transition duration-200 ease-in-out">
                      Search
                    </Loctext>
                    </div>
                    
                  </li>
                  
                  <li className="flex items-center justify-center cursor-pointer py-8 transition  duration-200  ease-in-out"onClick={() => setisMenu(false)}>
                  <div className='flex'>
                    <TbDiscount2 style={{
                      'fontSize':"23px",
                      'fontWeight':"bold"
                    }}/>
                    <Loctext className = " font-semibold mx-2   cursor-pointer transition duration-200 ease-in-out">
                      Offers
                    </Loctext>
                  </div>
                  </li>
                  <li className="flex items-center py-8 duration-100 ease-in-out cursor-pointer justify-center"onClick={() => setisMenu(false)}>
                    <div className='flex'>
                    <IoIosHelpBuoy style={{
                      'fontSize':"23px",
                      'fontWeight':"bold"
                    }}/>
                    <Loctext className = " font-semibold mx-3   cursor-pointer transition duration-200 ease-in-out">
                      Help
                    </Loctext>
                    </div>
                  </li>
                  <li className="flex items-center py-8 justify-center cursor-pointer  transition duration-200 ease-in-out" onClick={() => setisMenu(false)}>
                    <div className='flex' onClick = {showCart}>
                    <BsFillCartCheckFill style={{
                      'fontSize':"20px",
                      'fontWeight':"bold"
                    }}/>
                    <Loctext className = " font-semibold mx-3  cursor-pointer  transition duration-200 ease-in-out">
                      Cart
                    </Loctext>
                    
                    </div>
                  </li>
                  <li className="flex items-center py-9 justify-center cursor-pointer w-56 relative gap-1">
                    <motion.img src={user ? user.photoURL : Avatar}
                     onClick={openMenu}
                     alt="avatar"
                     className=' w-10 rounded-full'
                     whileTap={{scale : 0.9}} />
                    <motion.p 
                     className='font-arial font-semibold'
                     >{ user ? user.displayName : 'Login' }</motion.p>
                    {
                      isMenu && (
                        <motion.div className='flex flex-col absolute top-20 py-2 w-40 z-50 border bg-white rounded-lg gap-2 right-32'
                        initial = {{opacity : 0}}
                        animate = {{opacity : 1}}
                        exit = {{opacity : 0}}
                        >
                          {
                            user.email === 'parchahiteshkumar123@gmail.com' && (
                              <Link to='/create'><p className='text-base font-poppins flex items-center gap-2 justify-between p-2 mx-1 rounded-lg hover:bg-slate-200'>Create Item <BsPlus size='20px' /></p></Link>
                            )
                          }
                          <p className='flex items-center justify-center gap-2 hover:bg-slate-200 rounded-lg p-2 mx-1' onClick={clearStorage}>Logout <BiLogOut size='20px' /></p>
                        </motion.div>
                      )
                    }
                    
                  </li>

              </ul>  
        </div>
    </header>
    </div>
  )
}

const Loctext = styled.p`
  font-family: 'arial';
`
const LogoImg = styled('img')({
  height : '100px',
  width : '145px',

})


export default Header;