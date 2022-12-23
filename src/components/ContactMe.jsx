import React, { useState } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import Header from './Header'
import { saveContactDetails } from '../utils/FirebaseFunctions'

const ContactMe = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [description, setDescription] = useState('');
    const [dataSaved, setDataSaved] = useState(false);
    const [error, setError] = useState(false);

    const saveDetails = () => {
        try{
            if(name === '' || phone === '' || email === '' || description === ''){
                setError(true);
                setTimeout(()=>{
                    setError(false)
                },2000)
            }
            else{
                const data = {
                    id : Date.now(),
                    name : name,
                    email : email,
                    phone : phone,
                    description : description
                }
                saveContactDetails(data);
                setDataSaved(true)
                setTimeout(()=>{
                    setDataSaved(false)
                    setName('');
                    setEmail('');
                    setPhone('');
                    setDescription('');
                },2000)
            }
        }catch(error){
            setError(true);
            setTimeout(() => {
                setError(false);
            }, 2000);
        }   
    };

  return (
    <div className='h-screen w-screen'>
    <HelmetProvider>
        <Helmet>
            <title>GoodFood | Contact</title>
        </Helmet>
    </HelmetProvider>
    <Header />
    
    <div className='flex flex-1 flex-col items-center justify-center h-full small:gap-14 gap-10'>
        <div className='font-poppins text-2xl font-semibold'>
            CONTACT ME
        </div>
        <div className='md:w-[30%] small:w-[80%] flex flex-col gap-5'>
        <input className='p-3 font-poppins text-base  border border-borderColor rounded-md' placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)} type="text" required />
        <input className='p-3 font-poppins text-base border border-borderColor rounded-md' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} type="email" required/>
        <input className='p-3 font-poppins text-base  border border-borderColor rounded-md' placeholder='Phone' value={phone} onChange={(e)=>setPhone(e.target.value)} type="tel" required/>
        <textarea className='p-3 font-poppins text-base   border border-borderColor rounded-md' placeholder='Description' value={description} onChange={(e)=>setDescription(e.target.value)} type="text" required/>
        <button onClick = {saveDetails} className='p-3 px-16 text-white font-poppins bg-gradient-to-tr from-orange-400 to-orange-600 rounded-md '>Submit</button>
        {
            dataSaved && (
                <div className='font-poppins p-3 bg-emerald-500 text-white text-base rounded-md flex justify-center items-center'>Submitted successfully</div>
                
            )
        }
        {
            error && (
                <div className='font-poppins p-3 bg-red-600 text-white text-base rounded-md flex justify-center items-center'>Enter all the fields</div>
                
            )
        }
        </div>
    </div>
    </div>
  )
}

export default ContactMe