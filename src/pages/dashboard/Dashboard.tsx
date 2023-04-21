import React from 'react';
import ColorCards from './components/ColorCards';
import MainInfo from './components/MainInfo';
import Percent from './components/Percent';
import Activities from './components/Activities';
import Detail from './components/Detail';

const Dashboard = () => {
  return (
    <body className='p-8 bg-gray-100'>
      <div className='flex'>
        <MainInfo />
        <Percent />
      </div>
      <div className='flex mt-4 justify-center justify-around'>
        <ColorCards type='pink' title='Revinues' subtitle='$432' date='2022/01/02' />
        <ColorCards type='purple' title='Revinues' subtitle='$432' date='2022/01/02' />
        <ColorCards type='pink' title='Revinues' subtitle='$432' date='2022/01/02' />
        <ColorCards type='yellow' title='Revinues' subtitle='$432' date='2022/01/02' />
      </div>

      <div className='flex mt-4 '>
        <Activities />
        <Detail />
      </div>
    </body>
  );
};

export default Dashboard;
