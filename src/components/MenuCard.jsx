import React from 'react'
import {FaRegCaretSquareUp} from 'react-icons/fa'
import { HiCurrencyRupee } from 'react-icons/hi2'
import styled from 'styled-components'


const MenuCard = ({food}) => {
  return (
    <div className='block relative border p-6 cursor-pointer rounded-3xl border-white hover:border-borderColor h-340 w-370 '>
    <div>
        <ItemImg className="mt-3 rounded-3xl" src={food?.imageUrl} alt="Cake" />
    </div>
    <div className='mt-3'>
        <p className='font-poppins font-semibold text-lg'>{food?.title}</p>
        <p className="font-poppins font-normal text-base">{food?.category}</p>
    </div>
    <div className='flex justify-between mt-2'>
        <div>
            <p className='font-normal font-poppins flex items-center justify-center text-sm'><HiCurrencyRupee size="20px" />{food?.price}</p>
        </div>
        <div>
            <FaRegCaretSquareUp className = {`${food.vegnonveg === 'veg' ? 'text-emerald-800' : 'text-red-800' } `} />
        </div>
    </div>
    </div>
    
  )
}

const ItemImg = styled('img')({
    height:'160px',
    width : '254px'
});

export default MenuCard