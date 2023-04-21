import React from 'react';
import styles from './styles/Activities.module.scss';

import { FiCloudDrizzle } from 'react-icons/fi';

const Activities = () => {
  const value = [1, 2, 3, 4, 5];
  return (
    <div className='p-4 shadow-lg rounded-sm w-1/3 bg-slate-50 flex h-96 flex-col'>
      Rencent Activites
      {value.map((item) => (
        <div className='flex items-center mt-6'>
          <div className='text-slate-400 text-xs'>42 Mins ago </div>
          <div className={`bg-red-400 w-8 h-8 rounded-full ml-4 ${styles.line}`}>
            <FiCloudDrizzle className='m-auto h-full text-white' />
          </div>
          <div className='ml-4'>
            <div className='text-slate-900 text-xs'>Task update</div>
            <div className='text-slate-400 text-xs mt-1'>
              <span className='text-slate-900'>{`Nikon `}</span>
              update a task
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Activities;
