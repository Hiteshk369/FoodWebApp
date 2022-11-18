import React from 'react'
import {HiOutlineAdjustmentsVertical} from 'react-icons/hi2'
import { resLength } from '../assets/Restaurants';


const HomeNav = () => {

  return (
    <div className='w-screen h-auto flex justify-evenly' style={{
        "borderBottom":"1px #686b78"
    }}>
        <div className='w-full md:flex h-full justify-between ml-44 mr-48 mb-3 '>
            <div className="text-3xl flex font-semibold items-center justify-center">
                {resLength} Restaurants Near You!
            </div>
            <ul className="flex gap-10 items-center justify-center">
                
                <li className='font-semibold text-lg flex items-center justify-center mr-2 cursor-pointer hover:text-orangeColor'>
                    Filters
                    <span className='pl-2'><HiOutlineAdjustmentsVertical size='40' color='#ffa700' style={{
                        'padding':'8px',
                        'borderRadius':'50%',
                        'border':'1px solid #ffa700',
                    }} /></span>
                </li>
            </ul>
        </div>     
    </div>
  )
}

export default HomeNav;