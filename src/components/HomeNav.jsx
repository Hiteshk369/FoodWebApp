import React, { useState } from 'react'
import {HiOutlineAdjustmentsVertical} from 'react-icons/hi2'



const HomeNav = () => {

    const [isfilter , setIsfilter] = useState(false);

    const openFilter = () => {
        isfilter ? setIsfilter(false) : setIsfilter(true);
    }

  return (
    <div className='w-screen h-auto flex justify-evenly' style={{
        "borderBottom":"1px #686b78"
    }}>
        <div className='w-full md:flex h-full justify-between ml-44 mr-48 mb-3 '>
            <div className="text-3xl flex items-center justify-center font-medium">
               <p className='font-poppins'>Order from the dishes below!</p>
            </div>
            <ul className="flex gap-10 items-center justify-center">
                <li onClick = {openFilter} className='relative font-semibold text-lg flex items-center justify-center mr-2 cursor-pointer hover:text-orangeColor'>
                    <p className='font-poppins'>Filters</p>
                    <span className='pl-2'><HiOutlineAdjustmentsVertical size='40' color='#ffa700' style={{
                        'padding':'8px',
                        'borderRadius':'50%',
                        'border':'1px solid #ffa700',
                    }} /></span>
                {
                    isfilter && (
                        <div className = 'absolute flex flex-col w-40 top-11 right-3 gap-1 z-50 font-normal text-black bg-white text-base border rounded-lg p-2 border-gray-300'>
                            <p className='px-2 py-1 hover:bg-slate-200  rounded-lg '>Main Course</p>
                            <p className='px-2 py-1 hover:bg-slate-200  rounded-lg '>Starter</p>
                            <p className='px-2 py-1 hover:bg-slate-200  rounded-lg '>Rice</p>
                            <p className='px-2 py-1 hover:bg-slate-200  rounded-lg '>Bread</p>
                            <p className='px-2 py-1 hover:bg-slate-200  rounded-lg '>Desert</p>
                            <p className='px-2 py-1 hover:bg-slate-200  rounded-lg '>Berverage</p>
                        </div>
                    )
                }
                </li>
            </ul>
        </div>     
    </div>
  )
}

export default HomeNav;