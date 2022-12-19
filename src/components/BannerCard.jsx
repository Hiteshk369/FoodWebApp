import React from 'react'
import styled from 'styled-components';

import {motion} from 'framer-motion';

const BannerCard = ({banner}) => {
  return (
    <div className='flex items-center justify-center'>
        <motion.div whileHover={{
            scale : 1.1,
        }}>
        <Card src={banner.image} className = "cursor-pointer" alt="img" />
        </motion.div>
    </div>
  )
}

const Card = styled('img')({
    height : '260px',
    width : '260px'
})


export default BannerCard