import React from 'react'
import Logo from '../assets/swiggy-logo.png'
import styled from 'styled-components'
import {BiSearch} from 'react-icons/bi'
import {TbDiscount2} from 'react-icons/tb'
import {IoIosHelpBuoy} from 'react-icons/io'
import {MdPersonOutline} from 'react-icons/md'
import {GrCart} from 'react-icons/gr'
import '../App.css'


const Header = () => {
  
  return (
    <header className = "w-screen h-100 fixed z-50 bg-white">
        <div className = "hidden w-full md:flex h-full p-6 justify-evenly">
            <div className="flex items-center gap-2 mix-blend-multiply ">
                <img src= { Logo } className = "w-10  object-cover mix-blend-overlay" alt="logo" />
                <Loctext className='pl-10 font-semibold gap-3 cursor-pointer hover:text-orangeColor'>Other</Loctext>
                <Loctext className="text-lightColor">Hyderabad, Telangana, India</Loctext>
            </div>
              <ul className = "flex gap-10 items-center justify-center">
                  <li className="flex items-center justify-center cursor-pointer hover:text-orangeColor transition duration-300 ease-in-out" >
                    <BiSearch style={{
                      'fontSize':"23px",
                      'fontWeight':"bold"
                    }} />
                    <Loctext className = "text-headerColor font-semibold mx-2  hover:text-orangeColor cursor-pointer transition duration-300 ease-in-out">
                      Search
                    </Loctext>
                  </li>
                  <li className="flex items-center justify-center cursor-pointer hover:text-orangeColor duration-300 transition ease-in-out">
                    <TbDiscount2 style={{
                      'fontSize':"23px",
                      'fontWeight':"bold"
                    }}/>
                    <Loctext className = "text-headerColor font-semibold mx-2 hover:text-orangeColor  cursor-pointer transition duration-300 ease-in-out">
                      Offers
                    </Loctext>
                  </li>
                  <li className="flex items-center justify-center">
                    <IoIosHelpBuoy style={{
                      'color':"#3d4152",
                      'fontSize':"23px",
                      'fontWeight':"bold"
                    }}/>
                    <Loctext className = "text-headerColor font-semibold mx-3  hover:text-orangeColor cursor-pointer transition duration-300 ease-in-out">
                      Help
                    </Loctext>
                  </li>
                  <li className="flex items-center justify-center">
                    <MdPersonOutline style={{
                      'color':"#3d4152",
                      'fontSize':"26px",
                      'fontWeight':"bold"
                    }}/>
                    <Loctext className = "text-headerColor font-semibold mx-3  hover:text-orangeColor cursor-pointer transition duration-300 ease-in-out">
                      Hitesh
                    </Loctext>
                  </li>
                  <li className="flex items-center justify-center cursor-pointer hover:text-orangeColor transition duration-300 ease-in-out">
                    <GrCart style={{
                      'fontSize':"26px",
                      'fontWeight':"bold"
                    }}/>
                    <Loctext className = "text-headerColor font-semibold mx-3  cursor-pointer hover:text-orangeColor transition duration-300 ease-in-out">
                      Cart
                    </Loctext>
                  </li>
              </ul>  
        </div>
    </header>
  )
}

const Loctext = styled.p`
  font-family: 'Poppins';
`



export default Header;