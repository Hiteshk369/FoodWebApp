import React, { useEffect, useState } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import Header from '../components/Header'
import {HiCurrencyRupee} from 'react-icons/hi'
import { useJsApiLoader, GoogleMap, Marker, DirectionsRenderer} from '@react-google-maps/api'
import Loader from '../components/Loader'
import { useSelector } from 'react-redux'
import Lottie from "lottie-react";
import CookingAnimation from '../assets/6519-cooking.json'


const OrderConfirmationPage = () => {

  const cartItems = useSelector((state)=>state.reducers.cartItems);
  const destination = useSelector((state)=>state.reducers.destination);
  let orderTime = new Date();

  const [total, setTotal] = useState(0);

  useEffect(() => {
    let totalPrice = cartItems.reduce((accumulator,item) => {
          return accumulator + (item.qty * item.price);     
    },0);
    setTotal(totalPrice);
  },[total , cartItems]);
 
  const origin = 'Maisammaguda, Dulapally, Hyderabad, Telangana';

  const [directionResponse, setDirectionResponse] = useState(null);
  const [distance, setDistance] = useState(null);
  const [duration, setDuration] = useState(null);

  const {isLoaded } = useJsApiLoader({
    googleMapsApiKey : process.env.REACT_APP_MAPS_API_KEY,
    libraries : ['places']
  })

  const calculateRoute = async() => {
    if(origin === '' || destination === ''){
      return
    }
    //eslint-disable-next-line no-undef
    const directionService = new google.maps.DirectionsService();
    const results = await directionService.route({
      origin : origin,
      destination : destination,
      //eslint-disable-next-line no-undef
      travelMode : google.maps.TravelMode.DRIVING
    })
    setDirectionResponse(results);
    setDistance(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);
    console.log(directionResponse)
  }

    useEffect(()=>{
      calculateRoute();
    },[])

  if(!isLoaded){
    return <Loader />
  }

  return (
    <div className='overflow-y-hidden overflow-hidden h-[800]'>
    <HelmetProvider>
        <Helmet>
            <title>GoodFood | Confirmation</title>
        </Helmet>
    </HelmetProvider>

    <Header />
    <section className='mt-28 small:mt-28  w-full h-screen small:h-[700]'>
        <div className = 'md:ml-48 md:mr-56 small:w-[90%] small:ml-5  h-[80%]   border rounded-md border-borderColor relative'>
          <div className='w-full md:px-10 small:py-2 small:pt-4 px-3 pt-5 text-white bg-cartBg flex gap-2 font-poppins border-none'>
            <p className='font-bold md:font-base small:text-sm text-white '>ORDER</p>
            <p className='font-semibold small:text-sm text-white'>#4646445444</p>
            <p className='ml-auto font-medium md:text-base text-sm'>{distance}</p>
          </div>
          <div className='bg-cartBg pb-4 border-none'>
            <p className='flex items-center md:px-10 px-3 small:text-sm text-gray-200'>{orderTime.toLocaleTimeString()} | {cartItems.length} items ,<HiCurrencyRupee />{total+40}<span className='ml-auto text-gray-200 font-medium text-base'>{duration}</span></p>
          </div>
          <div className='mt-1 small:mt-5 w-full h-[50%] relative '> 
              
              <GoogleMap
                center={{lat : 17.56206652920838, lng : 78.45299501443304}}
                zoom={17}
                mapContainerStyle={{width:'100%',height:'100%'}}
                options = {{
                  mapTypeControl : false,
                  fullscreenControl : false,
                  panControl : false
                }}
              >
                <Marker position={{lat : 17.56206652920838, lng : 78.45299501443304}}/>
                {directionResponse && <DirectionsRenderer directions={directionResponse} />}
              </GoogleMap>

          </div>
          <div className='flex flex-1 items-center justify-center md:pr-24 small:m-4 small:mt-8' >
            <Lottie className='w-60 ' animationData={CookingAnimation} setSpeed={3} loop={true} />
            <div className='flex flex-col gap-1 md:items-center'>
              <p className='font-poppins md:text-2xl text-lg font-semibold'>Your Order has been placed!</p>
              <p className='font-poppins md:text-base text-sm font-medium text-lightColor'>Food is being prepared</p>
            </div>
          </div>
        </div>
    </section>
    </div>
  )
}

export default OrderConfirmationPage