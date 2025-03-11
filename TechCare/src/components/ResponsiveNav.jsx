import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import assets from '../assets/assets';

const ResponsiveNav = ({ visible }) => {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
          exit={{ x: '-100%' }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className=' top-[8] left-0 z-10 shadow-lg m-4 h-[30vh] md:hidden bg-sky-300 rounded-xl uppercase'
        >
          <div className='p-5 space-y-7'>
            <div className='flex gap-3'>
              <img src={assets.overview} alt="" />
              <p>Overview</p>
            </div>
            <div className='flex gap-3'>
              <img src={assets.patient} alt="" />
              <p>Patients</p>
            </div>
            <div className='flex gap-3'>
              <img src={assets.schedule} alt="" />
              <p>Schedule</p>
            </div>
            <div className='flex gap-3'>
              <img src={assets.message} alt="" />
              <p>Message</p>
            </div>
            <div className='flex gap-3'>
              <img src={assets.transaction} alt="" />
              <p>Transaction</p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveNav;