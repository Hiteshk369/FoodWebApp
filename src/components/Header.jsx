import React from 'react'
import { useSelector } from 'react-redux'
import Logo from '../assets/GoodFood.png'
import Avatar from '../assets/avatar.png'
import styled from 'styled-components'
import {BiSearch} from 'react-icons/bi'
import {TbDiscount2} from 'react-icons/tb'
import {IoIosHelpBuoy} from 'react-icons/io'
import {BsCart} from 'react-icons/bs'
import './Styles.css';



const Header = () => {
  
  const user = useSelector((state)=>state.reducers.user)
  return (
    <div className='w-screen h-auto flex flex-col'>
    <header className = "w-screen h-100 fixed z-50 bg-white">
        <div className = "hidden w-full md:flex pt-3 pb-3 justify-evenly h-24">
            <div className="flex items-center gap-2  ">
                <LogoImg src= { Logo } className = "  object-cover" alt="logo" />
                <p className='pl-2 font-semibold text-xl cursor-pointer font-poppins hover:text-orangeColor '>GooD FooD</p>
            </div>
              <ul className = "flex gap-10 items-center justify-center">
                  <li className=" flex items-center justify-center cursor-pointer buttonColor transition duration-200 ease-in-out" >
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
                  
                  <li className="flex items-center justify-center cursor-pointer  transition  duration-200  ease-in-out">
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
                  <li className="flex items-center justify-center">
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
                  <li className="flex items-center justify-center cursor-pointer  transition duration-200 ease-in-out">
                    <div className='flex'>
                    <BsCart style={{
                      'fontSize':"20px",
                      'fontWeight':"bold"
                    }}/>
                    <Loctext className = " font-semibold mx-3  cursor-pointer  transition duration-200 ease-in-out">
                      Cart
                    </Loctext>
                    </div>
                  </li>
                  <li className="flex items-center justify-center cursor-pointer relative">
                    <img src={user ? user.photoURL : Avatar} alt="avatar" className=' w-10 rounded-full' />
                    <p className='font-arial font-semibold'>{ user ? user.displayName : 'Login' }</p>
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
  width : '100px',

})


export default Header;