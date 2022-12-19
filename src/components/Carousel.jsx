import React from 'react'
import styled from 'styled-components';

import {HiOutlineArrowNarrowRight,HiOutlineArrowNarrowLeft} from 'react-icons/hi'

import Slider from 'react-slick';
import BannerCard from './BannerCard';
import { banners } from '../utils/banner';



const Carousel = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow : <RightArrow to = "next" />,
        prevArrow : <LeftArrow  to = "prev" />
      };

      const mobilesettings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow : <RightArrow to = "next" />,
        prevArrow : <LeftArrow  to = "prev" />
      };
     
    const slider = React.useRef(null);
    const mobileSlider = React.useRef(null);

  return (
    <>
    <section className='mt-20'>
        <Slider ref={slider} className='bg-carouselColor small:hidden mt-1 justify-evenly pb-8 pt-12 pl-44 pr-40 overflow-y-hidden overflow-x-hidden' {...settings}>
         
            {
                banners.map((banner,index) =>{
                    return (
                        <React.Fragment key={index}>
                            <BannerCard banner={banner} />  

                        </React.Fragment>
                    );
                })
            }
        </Slider>

        <button className='small:hidden' onClick={() => slider?.current?.slickPrev()}><LeftArrow style={{
            'top': '240px',
            'fontSize': '56px',
            'background':' #fff',
            'color': 'black',
            'borderRadius': '50%',
            'left': '160px',
            'padding':'14px',
            'cursor' : 'pointer'
        }}/>
        </button>
        <button className='small:hidden' onClick={() => slider?.current?.slickNext()}><RightArrow style={{
            'top': '240px',
            'fontSize': '56px',
            'background':' #fff',
            'color': 'black',
            'borderRadius': '50%',
            'right': '130px',
            'padding':'14px',
            'cursor':'pointer'
        }} />
        </button>

        {/* Mobile view */}
        <Slider ref={mobileSlider} className='bg-carouselColor md:hidden mt-1 pb-8 pt-8  overflow-y-hidden overflow-x-hidden' {...mobilesettings}>
         
            {
                banners.map((banner,index) =>{
                    return (
                        <React.Fragment key={index}>
                            <BannerCard banner={banner} />  

                        </React.Fragment>
                    );
                })
            }
        </Slider>

        <button className='md:hidden' onClick={() => mobileSlider?.current?.slickPrev()}><LeftArrow style={{
            'top': '220px',
            'fontSize': '50px',
            'background':' #fff',
            'color': 'black',
            'borderRadius': '50%',
            'left': '18px',
            'padding':'14px',
            'cursor' : 'pointer'
        }}/>
        </button>
        <button className='md:hidden' onClick={() => mobileSlider?.current?.slickNext()}><RightArrow style={{
            'top': '220px',
            'fontSize': '50px',
            'background':' #fff',
            'color': 'black',
            'borderRadius': '50%',
            'right': '20px',
            'padding':'14px',
            'cursor':'pointer'
        }} />
        </button>
        
        
         
    </section>
    </>
  )
}

const RightArrow = styled(HiOutlineArrowNarrowRight)`
    position: absolute;
`
const LeftArrow = styled(HiOutlineArrowNarrowLeft)`
    position: absolute;
`


export default Carousel;

