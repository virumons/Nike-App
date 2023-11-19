import React from 'react'

const footer = () => {
  return (
    <>
    <div className='flex flex-row text-[#757575] text-[20px]'>
      <div className='mx-[50px] text-[#d7d7d7]'>
        <h1>FIND A STORE</h1>
        <h1>BECOME A MEMBER</h1>
        <h1>SEND US FEEDBACK</h1>
      </div>
      <div >
        <h1 className='text-[#d7d7d7] font-semibold '>About Us</h1>
        <h1 className='hover:text-white'>Order Status</h1>
        <h1 className='hover:text-white'>Returns</h1>
        <h1 className='hover:text-white'>Delivery</h1>
        <h1 className='hover:text-white'>Contact us</h1>
        <h1 className='hover:text-white'>Nike.com inquires</h1>
      </div>
    </div>
    <div className='mt-[1rem] flex flex-row justify-between mx-[50px] text-[18px] text-[#d7d7d7]'>
        <h1>@2023 Nike, copy</h1>
        <div className='flex flex-row mx-8'>
            <h1 className='px-[20px] hover:text-white'>Giudes</h1>
            <h1 className='px-[20px] hover:text-white'>Terms of use</h1>
            <h1 className='px-[20px] hover:text-white'>INDIA</h1>
        </div>
    </div>
    </>
  )
}

export default footer;
