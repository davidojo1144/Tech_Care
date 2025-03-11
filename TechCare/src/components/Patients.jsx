import React from 'react'
import assets, { patients } from '../assets/assets'
import Diagnosis from './Diagnosis'
import Jessica from './Jessica'

const Patients = () => {
  return (
    <div className='container pt-8 flex flex-col  md:flex-row items-center justify-between '>
        <div className='border items-center shadow-lg md:w-64 w-[70vw]  rounded-xl '>
            <div className='flex items-center justify-between p-2'>
                <p className='text-lg font-semibold'>Patients</p>
                <img className='w-4 h-4' src={assets.search} alt="" />
            </div>
            {
            patients.map((patient) => (
            <div className='flex items-center justify-between p-2  space-y-4 ' key={patient.id}>
                <img className='w-10' src={patient.picture} alt={`Patient ${patient.id}`} />
                <div className='items-center pr-6'>
                    <p className='text-sm font-semibold'>{patient.name}</p>
                    <p className='text-sm text-gray-400'>{patient.gender}, {patient.age}</p>
                </div>
                <img className='w-3 ' src={assets.dot2} alt="" />
            </div>
            ))
            }
        </div>
        <Diagnosis/>
        <Jessica/>
      
    </div>
  )
}

export default Patients
