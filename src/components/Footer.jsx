import React from 'react'

const Footer = () => {
  return (
    <div className = 'bg-black w-screen h-auto mt-8'>
        <div className='ml-48 mr-48'>
        <div className = 'grid grid-cols-4'>
            <div className='mt-20 mb-12 text-footerHeader font-semibold'>
                COMPANY
            </div>
            <div className='mt-20 mb-12 text-footerHeader font-semibold'>
                CONTACT
            </div>
            <div className='mt-20 mb-12 text-footerHeader font-semibold'>
                LEGAL
            </div>
            <div className='mt-20 mb-12 text-footerHeader font-semibold'>
                HMM
            </div>
        </div>
        </div>
        
    </div>
  )
}

export default Footer