import React,{useEffect, useState} from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import Header from '../components/Header'
import {AiTwotoneLock, AiTwotoneUnlock} from 'react-icons/ai'
import {HiCurrencyRupee} from 'react-icons/hi'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from '../components/CartItem'
import Cart from '../components/Cart'
import { motion } from 'framer-motion'
import PaymentButton from '../components/PaymentButton'

function CheckoutPage() {

    const cartItems = useSelector((state)=>state.reducers.cartItems);
    const cartShow = useSelector((state)=>state.reducers.cartShow);

    const dispatch = useDispatch();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [streetAddress, setStreetAddress] = useState('');
    const [city, setCity] = useState('');
    const [phone, setPhone] = useState('');
    const [saveUser, setSaveUser] = useState(false); 

    const [flag, setFlag] = useState(1);
    const [total, setTotal] = useState(0);

    const closeCart = () => {
        dispatch({
            type : 'SET_CARTSHOW',
            cartShow : !cartShow
        })
    }

    useEffect(() => {
        let totalPrice = cartItems.reduce((accumulator,item) => {
              return accumulator + (item.qty * item.price);     
        },0);
        setTotal(totalPrice);
      },[total , cartItems, flag]);
    
      const SaveShippingDetails = () => {
        if(firstName === '' || lastName === '' || streetAddress === '' || city === '' || phone === ''){
            alert('Enter the Shipping Details to continue')
        }else{
            setSaveUser(true);
        }
      }

      useEffect(() => {
        closeCart();
      },[])
      

  return (
    <>
    <HelmetProvider>
        <Helmet>
            <title>GoodFood | Checkout</title>
        </Helmet>
    </HelmetProvider>

    <Header />

    <section className='small:hidden w-full h-full mt-24'>
        <div className='m-10 h-full'>
            <div className='grid grid-cols-3 gap-10'>
                <div className='col-span-2 border border-borderColor rounded-md'>
                    <div className='font-poppins font-xl font-semibold text-white bg-cartBg p-3'>
                        SHIPPING
                    </div>
                    <div className='m-5 flex flex-col gap-4 mb-8'>
                        <div className='font-poppins font-lg font-medium '>
                            SHIPPING ADDRESS
                        </div>
                        <div className='flex flex-1 gap-4'>
                            <input placeholder='First Name' type="text" className='border text-base p-4 w-[50%] font-poppins' value = {firstName} onChange={(e)=>setFirstName(e.target.value)} required />
                            <input placeholder='Last Name' type="text" className='border text-base p-4 w-[50%] font-poppins' value={lastName} onChange={(e)=>setLastName(e.target.value)} required />
                        </div>
                        <div>
                            <input placeholder='Street Address' type="text" className='border text-base p-4 w-full font-poppins' value={streetAddress} onChange={(e)=>setStreetAddress(e.target.value)} required  />
                        </div>
                        <div className='flex flex-1 gap-4'>
                            <input placeholder='City' type="text" className='border text-base p-4 w-[50%] font-poppins' value={city} onChange={(e)=>setCity(e.target.value)} required />
                            <input placeholder='Phone Number' type="tel" className='border text-base p-4 w-[50%] font-poppins' value={phone} onChange={(e)=>setPhone(e.target.value)} required />
                        </div>
                        <motion.div whileTap={{scale:0.9}} className='ml-auto'>
                            <button onClick = {SaveShippingDetails} className='p-3 px-10 bg-gradient-to-tr from-orange-400 to-orange-600 text-white font-poppins font-semibold rounded-md'>SAVE & CONTINUE</button>
                        </motion.div>
                    </div>
                    <div className='font-poppins mb-5  font-semibold text-white bg-cartBg p-3'>
                        <div className='flex'>
                            <div className='flex items-center gap-3'>PAYMENT 
                            {
                                saveUser ? <AiTwotoneUnlock/> : <AiTwotoneLock />
                            }
                            </div>
                            <div className='ml-auto font-medium text-sm text-gray-200'>Gpay</div>
                        </div>   
                    </div>
                    {
                        saveUser && cartItems.length > 0 && (
                            <motion.div whileTap={{scale:0.9}}  className='m-4 flex justify-center items-center'>
                                <PaymentButton total={total} />
                            </motion.div>
                        )

                    }
                </div>
                <div className='border border-borderColor rounded-md p-5'>
                    <div className='m-5'>
                        <div className='mb-8 font-poppins text-base font-medium text-black'>
                            ORDER SUMMARY
                        </div>
                        <div className='flex flex-col gap-2 after:border-b  after:border-b-black after:mb-2'>
                            <div className='flex'>
                                <p className='font-poppins text-sm font-medium'>Sub Total</p>
                                <p className='ml-auto flex gap-1 items-center font-poppins text-sm font-medium'><HiCurrencyRupee/>{total}</p>
                            </div>
                            <div className='flex mb-1'>
                                <p className='font-poppins text-sm font-medium'>Delivery</p>
                                <p className='ml-auto flex gap-1 items-center font-poppins text-sm font-medium'><HiCurrencyRupee/>40</p>
                            </div>
                        </div>
                        <div className='flex mt-1 mb-8'>
                            <p className='font-poppins text-lg font-medium'>Total</p>
                            <p className='ml-auto flex gap-1 items-center font-poppins text-lg font-medium'><HiCurrencyRupee/>{total+40}</p>
                        </div>
                        <div className='mb-6'>
                            <div className='flex gap-2 items-center font-poppins text-base font-medium text-black'>
                                <p>BAG SUMMARY</p>
                                <p className='w-5 h-5 bg-black text-white text-sm rounded-full flex items-center justify-center'>{cartItems.length}</p>
                            </div>
                            <div>
                                {
                                        cartItems && cartItems.length > 0 && (

                                            <div className='w-full h-full flex flex-col'>
                                            <div className='w-full h-300 py-5 flex flex-col gap-3 overflow-y-scroll scrollbar-hide'>
                                            {
                                                cartItems && cartItems.map((item) => {
                                                    return (
                                                        <CartItem key={item.id} data={item} flag={flag} setFlag={setFlag} />
                                                    )
                                                })
                                            }
                                            
                                        </div>
                                        </div>
                                        )
                                    }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            {
                cartShow &&  (
                  <Cart />
                )
            }
    </section>

    {/* Mobile View */}
    <section className='md:hidden w-full h-full mt-24'>
        <div className=' h-full'>
            <div className='border m-5 border-borderColor rounded-md  pb-5'>
                 <div className='mb-8 font-poppins text-base font-medium p-3 text-white bg-cartBg'>
                    ORDER SUMMARY
                </div>
                    <div className='m-5'>
                        <div className='flex flex-col gap-2 after:border-b  after:border-b-black after:mb-2'>
                            <div className='flex'>
                                <p className='font-poppins text-sm font-medium'>Sub Total</p>
                                <p className='ml-auto flex gap-1 items-center font-poppins text-sm font-medium'><HiCurrencyRupee/>{total}</p>
                            </div>
                            <div className='flex mb-1'>
                                <p className='font-poppins text-sm font-medium'>Delivery</p>
                                <p className='ml-auto flex gap-1 items-center font-poppins text-sm font-medium'><HiCurrencyRupee/>40</p>
                            </div>
                        </div>
                        <div className='flex mt-1 mb-8'>
                            <p className='font-poppins text-lg font-medium'>Total</p>
                            <p className='ml-auto flex gap-1 items-center font-poppins text-lg font-medium'><HiCurrencyRupee/>{total+40}</p>
                        </div>
                        <div className='mb-6'>
                            <div className='flex gap-2 items-center font-poppins text-base font-medium text-black'>
                                <p>BAG SUMMARY</p>
                                <p className='w-5 h-5 bg-black text-white text-sm rounded-full flex items-center justify-center'>{cartItems.length}</p>
                            </div>
                            <div>
                                {
                                        cartItems && cartItems.length > 0 && (

                                            <div className='w-full h-full flex flex-col'>
                                            <div className='w-full h-auto py-2 flex flex-col gap-3 overflow-y-scroll scrollbar-hide'>
                                            {
                                                cartItems && cartItems.map((item) => {
                                                    return (
                                                        <CartItem key={item.id} data={item} flag={flag} setFlag={setFlag} />
                                                    )
                                                })
                                            }
                                            
                                        </div>
                                        </div>
                                        )
                                    }
                            </div>
                        </div>
                    </div>
                </div>
                <div className='m-5 border border-borderColor rounded-md'>
                    <div className='font-poppins font-xl font-semibold text-white bg-cartBg p-3'>
                        SHIPPING
                    </div>
                    <div className='m-5 flex flex-col gap-4 mb-8'>
                        <div className='font-poppins font-lg font-medium '>
                            SHIPPING ADDRESS
                        </div>
                        <div className='flex flex-col gap-2'>
                            <input placeholder='First Name' type="text" className='border text-sm p-3 w-full font-poppins' value = {firstName} onChange={(e)=>setFirstName(e.target.value)} required />
                            <input placeholder='Last Name' type="text" className='border text-sm p-3 w-full font-poppins' value={lastName} onChange={(e)=>setLastName(e.target.value)} required />
                            <input placeholder='Street Address' type="text" className='border text-sm p-3 w-full font-poppins' value={streetAddress} onChange={(e)=>setStreetAddress(e.target.value)} required  />
                            <input placeholder='City' type="text" className='border text-sm p-3 w-full font-poppins' value={city} onChange={(e)=>setCity(e.target.value)} required />
                            <input placeholder='Phone Number' type="tel" className='border text-sm p-3 w-full font-poppins' value={phone} onChange={(e)=>setPhone(e.target.value)} required />
                        </div>
                        <motion.div whileTap={{scale:0.9}} >
                            <button onClick = {SaveShippingDetails} className='p-2 w-full bg-gradient-to-tr from-orange-400 to-orange-600 text-white font-poppins font-semibold rounded-md'>SAVE & CONTINUE</button>
                        </motion.div>
                    </div>
                </div>
                <div className='border border-borderColor m-5 rounded-md'>
                    <div className='flex font-poppins bg-cartBg p-3'>
                        <div className='flex items-center gap-3 text-white font-semibold'>PAYMENT 
                        {
                            saveUser ? <AiTwotoneUnlock/> : <AiTwotoneLock />
                        }
                        </div>
                        <div className='ml-auto font-medium text-sm text-gray-200'>Gpay</div>
                    </div>
                    {
                        saveUser && cartItems.length > 0 && (
                            <motion.div whileTap={{scale:0.9}}  className='w-full mt-3 mb-3 flex justify-center items-center'>
                                <PaymentButton total={total} />
                            </motion.div>
                        )
                    } 
                </div>
        </div>
            {
                cartShow &&  (
                  <Cart />
                )
            }
    </section>


    
    </>
  )
}

export default CheckoutPage