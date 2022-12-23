import React from 'react'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {IoLocationSharp} from 'react-icons/io5'
import {BsInstagram, BsGithub, BsTwitter} from 'react-icons/bs'
import {FaLinkedinIn} from 'react-icons/fa'
import './IconStyles.css'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <footer className = 'bg-black w-screen md:h-auto mt-16 small:mt-10'>
        <div className='small:hidden ml-64 mr-52'>
        <div className = 'grid grid-cols-3'>
            <div className='mt-20 mb-12 text-footerHeader font-semibold'>
                COMPANY
                <div className='mt-10 mb-12 cursor-pointer text-borderColor '>
                    <ul className='flex flex-col gap-1 '>
                        <li><h2 className='hover:text-white hover:font-bold'>About Us</h2></li>
                        <li><h2 className='hover:text-white hover:font-bold'>Team</h2> </li>
                        <li><h2 className='hover:text-white hover:font-bold'>Help & Support</h2></li>
                        <Link to='/contact'><li><h2 className='hover:text-white hover:font-bold'>Partner with us</h2> </li></Link>
                    </ul>
                </div>
            </div>
            <div className='mt-20 mb-12 text-footerHeader font-semibold'>
                ADDRESS
                <div className='mt-10 mb-10 cursor-pointer text-borderColor'>
                <ul className='flex flex-col gap-2'>
                        <li className='flex'><h2 className='flex justify-center items-center gap-1 hover:text-white hover:font-bold'><IoLocationSharp size='20px'/>Maisammaguda, Hyderabad, India</h2></li>
                        <li className='flex'><h2 className='flex items-center justify-center gap-1 hover:text-white hover:font-bold'><BsFillTelephoneFill size="16px" />+91-9247770353</h2> </li>
                    </ul>
                </div>
            </div>
            <div className='mt-20 mb-12 text-footerHeader font-semibold'>
                SOCIAL
                <div className='mt-10 mb-10 cursor-pointer text-borderColor '>
                <ul className='flex gap-6 items-center'>
                        <li ><a href="https://www.instagram.com/hitesh_kumar369/" target='blank'><BsInstagram  className='instaiconHover' size='30px'/></a></li>
                        <li><a href="https://www.linkedin.com/in/hitesh-kumar-b9b3a2135/" target='blank'><FaLinkedinIn className='linkediniconHover' size='30px'/></a></li>
                        <li><a href="https://github.com/Hiteshk369" target='blank'><BsGithub className='githubiconHover' size='30px'/></a></li>
                        <li><a href="https://twitter.com/Hitesh39934681" target='blank'><BsTwitter className='twittericonHover' size='30px' /></a></li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
        
        {/* Mobile view */}
        <div className='md:hidden'>
        <div className = 'grid grid-cols-2 ml-8 mr-8'>
            <div className='mt-10 mb-1 text-footerHeader font-semibold'>
                COMPANY
                <div className='mt-6 mb-6 cursor-pointer text-borderColor '>
                    <ul className='flex flex-col gap-2 '>
                        <li><h2 className='text-sm text-gray-300 hover:text-white hover:font-bold'>About Us</h2></li>
                        <li><h2 className='text-sm text-gray-300 hover:text-white hover:font-bold'>Team</h2> </li>
                        <li><h2 className='text-sm text-gray-300 hover:text-white hover:font-bold'>Help & Support</h2></li>
                        <li><h2 className='text-sm text-gray-300 hover:text-white hover:font-bold'>Partner with us</h2> </li>
                    </ul>
                </div>
            </div>
            <div className='mt-10 mb-1 text-footerHeader font-semibold pl-3'>
                ADDRESS
                <div className='mt-6 mb-6 cursor-pointer text-borderColor'>
                <ul className='flex flex-col gap-2'>
                        <li className='flex'><h2 className='flex justify-center items-center  text-sm text-gray-300 hover:text-white hover:font-bold '><IoLocationSharp size='40px'/>Maisammaguda, Hyderabad, India</h2></li>
                        <li className='flex'><h2 className='flex items-center justify-center  text-sm text-gray-300  hover:text-white hover:font-bold pl-1'><BsFillTelephoneFill size="16px" />+91-9247770353</h2> </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <p className='text-footerHeader font-bold mb-4'>SOCIAL</p>
            <div className='cursor-pointer text-borderColor'>
                <ul className='flex gap-6 pb-6'>
                    <li><a href="https://www.instagram.com/hitesh_kumar369/" target='blank'><BsInstagram  className='instaiconHover' size='30px'/></a></li>
                    <li><a href="https://www.linkedin.com/in/hitesh-kumar-b9b3a2135/" target='blank'><FaLinkedinIn className='linkediniconHover' size='30px'/></a></li>
                    <li><a href="https://github.com/Hiteshk369" target='blank'><BsGithub className='githubiconHover' size='30px'/></a></li>
                    <li><a href="https://twitter.com/Hitesh39934681" target='blank'><BsTwitter className='twittericonHover' size='30px' /></a></li>
                </ul>
            </div>
        </div>
        </div>
    </footer>
  )
}



export default Footer