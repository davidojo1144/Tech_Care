import React, { useState } from 'react'
import assets from '../assets/assets'
import ResponsiveNav from './ResponsiveNav'

const Navbar = () => {


    const [visible, setVisible] = useState(false)


  return (
    <>
    <div className='container flex items-center justify-between pt-6 rounded-full shadow-lg'>
      <div>
        <img className='w-28' src={assets.logo} alt="" />
      </div>
        <ul className='md:flex items-center justify-center gap-7 hidden'>
            <div className='flex items-center justify-center gap-1'>
                <img src={assets.overview} alt="" />
                <li className=' text-sm font-medium'>Overview</li>
            </div>
            <div className='flex items-center justify-center gap-1 bg-green-400 w-28 h-7 rounded-full'>
                <img src={assets.patient} alt="" />
                <li className=' text-sm font-medium'>Patients</li>
            </div>
            <div className='flex items-center justify-center gap-1'>
                <img src={assets.schedule} alt="" />
                <li  className=' text-sm font-medium'>Schedule</li>
            </div>
            <div className='flex items-center justify-center gap-1'>
                <img src={assets.message} alt="" />
                <li className=' text-sm font-medium'>Message</li>
            </div>
            <div className='flex items-center justify-center gap-1'>
                <img src={assets.transaction} alt="" />
                <li className=' text-sm font-medium'>Transaction</li>
            </div>
        </ul>
        <div className='flex  items-center gap-2'>
            <img className='w-6 h-6' src={assets.doctorwoman} alt="" />
            <div>
                <p className='text-sm'>Dr.Jose Simmons</p>
                <p className='text-sm text-gray-400'>Genaral Practitioner</p>
            </div>
            <img className='w-4 h-4' src={assets.setting} alt="" />
            <img className=' h-4' src={assets.dot} alt="" />
        </div>
        {/* mobile menu section */}
        <div className='md:hidden w-6 h-6' onClick={()=> setVisible(!visible)}>
            <img src={`${visible ? assets.cancel : assets.menu}`} alt="" />
        </div>
      </div>
      {/* Mobile sidebar section  */}
      <ResponsiveNav visible={visible} />
      </>
  )
}

export default Navbar
