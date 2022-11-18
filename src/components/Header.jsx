import React from 'react'
import Logo from '../assets/GoodFood.png'
import styled from 'styled-components'
import {BiSearch} from 'react-icons/bi'
import {TbDiscount2} from 'react-icons/tb'
import {IoIosHelpBuoy} from 'react-icons/io'
import {MdPersonOutline} from 'react-icons/md'
import {BsCart} from 'react-icons/bs'
import '../App.css'
import './Styles.css';


const Header = () => {
  
  return (
    <div className='w-screen h-auto flex flex-col'>
    <header className = "w-screen h-100 fixed z-50 bg-white">
        <div className = "hidden w-full md:flex pt-3 pb-3 justify-evenly h-24">
            <div className="flex items-center gap-2  ">
                <LogoImg src= { Logo } className = "  object-cover" alt="logo" />
                <Loctext className='pl-10 font-semibold gap-3 cursor-pointer hover:text-orangeColor '>Other</Loctext>
                <Loctext className="text-lightColor">Hyderabad, Telangana, India</Loctext>
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
                  <li className="flex items-center justify-center">
                    <div className='flex'>
                    <MdPersonOutline style={{
                      'fontSize':"26px",
                      'fontWeight':"bold"
                    }}/>
                    <Loctext className = " font-semibold mx-3   cursor-pointer transition duration-200 ease-in-out">
                      Hitesh
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