import React from 'react'
import assets from '../assets/assets'


const Diagnosis = () => {


    return (
    <div>
      <div className='border shadow-lg md:w-96 p-5 w-[70vw] rounded-xl mt-10 md:mt-0'>
        <div className='p-2 space-y-4'>
            <p className='text-lg font-semibold'>Diagnosis History</p>
            <img src={assets.graph} alt="" />
            <div className='flex flex-col md:flex-row gap-2'>
                <div className='bg-sky-200 border w-[50vw] shadow-lg rounded-xl p-4'>
                    <img className='w-10 h-10' src={assets.respiratory} alt="" />
                    <p className='md:text-sm text-xs'>Respiratory Rate</p>
                    <p className='text-xl font-semibold'>20 bpm</p>
                    <p className='text-xs pt-3'>Normal</p>
                </div>
                <div className='bg-orange-200 border w-[50vw] shadow-lg rounded-xl p-4'>
                    <img className='w-10 h-10' src={assets.temperature} alt="" />
                    <p className='md:text-sm text-xs'>Respiratory Rate</p>
                    <p className='text-xl font-semibold'>98.6 f</p>
                    <p className='text-xs pt-3'>Normal</p>
                </div>
                <div className='bg-pink-200 border w-[50vw] shadow-lg rounded-xl p-4'>
                    <img className='w-10 h-10' src={assets.heartbpm} alt="" />
                    <p className='md:text-sm text-xs'>Respiratory Rate</p>
                    <p className='text-xl font-semibold'>78 bpm</p>
                    <p className='text-xs pt-3'>Lower than Average</p>
                </div>
            </div>
        </div>
      </div>
      <div className='border shadow-lg md:w-[30vw] rounded-xl mt-10 p-4'>
        <div>
            <p className='text-xl font-medium'>Diagnostic List</p>
        </div>
        <div className='flex flex-col md:flex-row md:gap-10 gap-5 pt-10 text-xs'>
            <div className='md:space-y-10 space-y-3'>
                <p className='text-lg md:text-xs font-semibold'>Problem/Diagnosis</p>
                <p>Hypertention</p>
                <p>Type 2 Diabetes</p>
                <p>Asthma</p>
            </div>
            <div className='md:space-y-10 space-y-3'>
                <p className='text-lg md:text-xs font-semibold'>Description</p>
                <p>Chronic high blood pressure</p>
                <p>Insulin resistance and elevated blood sugar</p>
                <p>Recurrent episodes of brochial constriction</p>
            </div>
            <div className='md:space-y-10 space-y-3'>
                <p className='text-lg md:text-xs font-semibold'>status</p>
                <p>Under observation</p>
                <p>Cured</p>
                <p>Inactive</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Diagnosis
