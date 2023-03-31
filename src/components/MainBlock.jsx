import React from 'react';

const MainBlock = () => {
  return (
    <div className='p-4 shadow-lg rounded-sm w-fit h-fit bg-slate-50'>
      <div>
        <div className='text-black text-lg'>DashBoard</div>
        <div className='mt-1 text-slate-400 text-xs'>overveiw of lastmonth</div>
        <div className='mt-6 text-black text-2xl font-medium'>$4568</div>
        <div className='mt-1 text-slate-400 text-xs'>current month earnig</div>
        <div className='mt-6 text-black text-2xl font-medium'>82</div>
        <div className='mt-1 text-slate-400 text-xs'>current month sales</div>
      </div>
    </div>
  );
};

export default MainBlock;
