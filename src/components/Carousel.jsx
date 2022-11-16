import React from 'react'
import styled from 'styled-components';
import B1 from '../assets/b1.webp';
import B2 from '../assets/B2.jpg';
import B3 from '../assets/B3.jpg';
import B4 from '../assets/B4.webp';
import {HiOutlineArrowNarrowRight,HiOutlineArrowNarrowLeft} from 'react-icons/hi'
import { motion } from "framer-motion"

const Carousel = () => {
  return (
    <>
    <div className='bg-black w-full h-auto text-white p-10 flex'>
        <motion.div
            whileHover={{
                scale: 1.1,
            }}>
            <Banner src={B1} alt="img" className='pl-52 cursor-pointer' />
        </motion.div>
        <motion.div whileHover={{
            scale: 1.1,
            }}>
            <Banner src={B2} alt="img" className='mx-12 cursor-pointer' />
        </motion.div>
        <motion.div whileHover={{
            scale : 1.1,
            }}>
            <Banner src={B3} alt="img" className='mr-12 cursor-pointer'/>
        </motion.div>
        <motion.div whileHover={{
            scale : 1.1,
            }}>
            <Banner src={B4} alt="img" className="cursor-pointer" />
        </motion.div>
        
        <div>
            
                <RightArrow style={{
                'top': '250px',
                'fontSize': '56px',
                'background':' #fff',
                'color': 'black',
                'borderRadius': '50%',
                'right': '240px',
                'padding':'14px',
                'cursor':'pointer'
            }}/>
          
            
        </div>
        <div>
            <LeftArrow style={{
                'top': '250px',
                'fontSize': '56px',
                'background':' #fff',
                'color': 'black',
                'borderRadius': '50%',
                'left': '212px',
                'padding':'14px',
                'cursor' : 'pointer'
            }} />
        </div>
    </div>

    
    </>
  )
}

const Banner = styled('img')({
    height : "260px"
});
const RightArrow = styled(HiOutlineArrowNarrowRight)`
    position: absolute;
`
const LeftArrow = styled(HiOutlineArrowNarrowLeft)`
    position: absolute;
`


export default Carousel;