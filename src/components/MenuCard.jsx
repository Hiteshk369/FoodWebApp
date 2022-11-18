import React from 'react'
import {AiFillStar} from 'react-icons/ai'
import { HiCurrencyRupee } from 'react-icons/hi2'
import styled from 'styled-components'


const MenuCard = ({restaurant}) => {
  return (
    <div className='block relative border p-6 cursor-pointer rounded-3xl border-white hover:border-borderColor h-340 w-370 '>
    <div>
        <ItemImg className="mt-3 rounded-3xl" src={restaurant.image} alt="Cake" />
    </div>
    <div className='mt-3'>
        <p className='font-semibold text-lg'>{restaurant.title}</p>
        <p className="text-lightColor text-base">{restaurant.cuisine}</p>
    </div>
    <div className='flex justify-between mt-3'>
        <div className='flex items-center justify-center bg-badgeColor px-1'>
            <AiFillStar color='#fff' /><p className='text-white font-semibold text-xs'>{restaurant.rating}</p>
        </div>
        <div>
            <p className='text-lightColor flex text-xs items-center'>{restaurant.time} MINS</p>
        </div>
        <div>
            <p className='text-lightColor flex items-center justify-center text-xs'><HiCurrencyRupee size="20px" />{restaurant.price} FOR TWO</p>
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