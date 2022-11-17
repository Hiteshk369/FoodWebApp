import React from 'react'
import {AiFillStar} from 'react-icons/ai'
import { HiCurrencyRupee } from 'react-icons/hi2'
import styled from 'styled-components'


const MenuCard = ({restaurant}) => {
  return (
    <div className='h-380 w-380 block relative border p-6 cursor-pointer border-white hover:border-borderColor'>
    <div>
        <ItemImg className="mt-3" src={restaurant.image} alt="Cake" />
    </div>
    <div className='mt-2'>
        <p className='font-semibold text-lg'>{restaurant.title}</p>
        <p className="text-lightColor text-base">{restaurant.cuisine}</p>
    </div>
    <div className='flex justify-between mt-3'>
        <div className='flex items-center justify-center bg-badgeColor px-1'>
            <AiFillStar color='#fff' /><p className='text-white font-semibold text-md'>{restaurant.rating}</p>
        </div>
        <div>
            <p className='text-lightColor text-base'>{restaurant.time} MINS</p>
        </div>
        <div>
            <p className='text-lightColor flex items-center justify-center'><HiCurrencyRupee size="20px" />{restaurant.price} FOR TWO</p>
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