import React from 'react';
import LineChart from '../../../graphics/LineChart';
import Button from '../../../utility/Button';
import styles from './styles/MainInfo.module.scss';

import { FiActivity } from 'react-icons/fi';

const MainInfo = () => {
  const template = [
    { title: 'wallet balance', value: '5000' },
    { title: 'wallet balance', value: '5000' },
    { title: 'wallet balance', value: '5000' },
    { title: 'wallet balance', value: '5000' },
  ];

  return (
    <div className='p-4 shadow-lg rounded-sm w-3/4 h-fit bg-slate-50 h-96'>
      <div className='flex'>
        <div>
          <div className='text-black text-lg'>DashBoard</div>
          <div className='mt-1 text-slate-400 text-xs'>overveiw of lastmonth</div>
          <div className='mt-6 text-black text-2xl font-medium'>$4568</div>
          <div className='mt-1 text-slate-400 text-xs'>current month earnig</div>
          <div className='mt-6 text-black text-2xl font-medium'>82</div>
          <div className='mt-1 mb-6 text-slate-400 text-xs'>current month sales</div>
          <Button label='last month summary' type='primary' size='large' />
        </div>

        <div className={styles.right}>
          <div className={styles.right_header}>
            <div>DAILY</div>
            <div>WEEKLY</div>
            <div>MONTHLY</div>
            <div>YEARLY</div>
            <div className={styles.legend}>
              <div className={styles.current}>current</div>
              <div className={styles.online}>online</div>
            </div>
          </div>
          <div className={styles.right_content}>
            <LineChart responsive={true} />
          </div>
        </div>
      </div>
      <div className='flex justify-between'>
        {template.map((item) => (
          <div className='w-1/5 h-16 flex items-center'>
            <div className='bg-red-400 w-8 h-8 rounded-full ml-2'>
              <FiActivity className='m-auto h-full text-white' />
            </div>
            <div className='ml-2'>
              <div className='text-slate-400 text-xs'>{item.title}</div>
              <div className='text-black text-2l font-medium'>${item.value}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainInfo;
