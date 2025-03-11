import React from 'react';
import assets, { jesPngs, jessicaDetails } from '../assets/assets';
// import axios from 'axios';

const Jessica = () => {
//   const [data, setData] = useState([]); 
//   const [loading, setLoading] = useState(true); 
//   const [error, setError] = useState(null); 


//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('https://fedskillstest.coalitiontechnologies.workers.dev'); // Replace with your API endpoint
//         setData(response.data); 
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

  
//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

  
  return (
    <div>
      <div className='flex items-center justify-center border mt-20 rounded-xl  shadow-lg w-72'>
        {
        jessicaDetails.map((details) => (
          <div   key={details.id}>
            <div className='space-y-2 p-10'>
                <img className='w-40 ' src={details.image} alt="" />
                <p className='text-lg font-semibold pl-7'>{details.name}</p>
            </div>
            <div className='flex items-center pt-5 gap-4'>
                <img className='w-10' src={jesPngs.birthicon} alt="" />
                <div>
                    <p className='text-sm text-gray-400'>Date Of Birth</p>
                    <p className='text-sm font-medium'>{details.DOB}</p>
                </div>
            </div>
            <div className='flex items-center pt-5 gap-4'>
                <img className='w-10' src={jesPngs.femaleicon} alt="" />
                <div>
                    <p className='text-sm text-gray-400'>Gender</p>
                    <p className='text-sm font-medium'>{details.gender}</p>
                </div>
            </div>
            <div className='flex items-center pt-5 gap-4'>
                <img className='w-10' src={jesPngs.phoneicon} alt="" />
                <div>
                    <p className='text-sm text-gray-400'>Contact Info</p>
                    <p className='text-sm font-medium'>{details.info}</p>
                </div>
            </div>
            <div className='flex items-center pt-5 gap-4'>
                <img className='w-10' src={jesPngs.phoneicon} alt="" />
                <div>
                    <p className='text-sm text-gray-400'>Emergrncy Contacts</p>
                    <p className='text-sm font-medium'>{details.EmergencyContact}</p>
                </div>
            </div>
            <div className='flex items-center pt-5 gap-4'>
                <img className='w-10' src={jesPngs.insuranceicon} alt="" />
                <div>
                    <p className='text-sm text-gray-400'>Insurance Provider</p>
                    <p className='text-sm font-medium'>{details.insuranceprovider}</p>
                </div>
            </div>
            <button className='bg-green-500 text-black w-48 rounded-full mt-6 mb-6 h-7 ml-8'>Show All Information</button>
          </div>
        ))
        }
      </div>
      <div className='border shadow-lg mt-5 mb-20 rounded-xl'>
        <div className='space-y-4 p-3'>
            <p className='text-xl font-semibold'>Lab Results</p>
            <div className='flex justify-between'>
                <p className='text-gray-700 text-sm'>Blood Tests</p>
                <img className='w-4 h-4' src={assets.download} alt="" />
            </div>
            <div className='flex justify-between'>
                <p className='text-gray-700 text-sm'>CT Scans</p>
                <img className='w-4 h-4' src={assets.download} alt="" />
            </div>
            <div className='flex justify-between'>
                <p className='text-gray-700 text-sm'>Radiology Reports</p>
                <img className='w-4 h-4' src={assets.download} alt="" />
            </div>
            <div className='flex justify-between'>
                <p className='text-gray-700 text-sm'>X-Rays</p>
                <img className='w-4 h-4' src={assets.download} alt="" />
            </div>
            <div className='flex justify-between'>
                <p className='text-gray-700 text-sm'>Urine Test</p>
                <img className='w-4 h-4' src={assets.download} alt="" />
            </div>
        </div>
    </div>
    </div>
  );
};

export default Jessica;