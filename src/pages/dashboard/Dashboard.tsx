import React from 'react';
import ColorCards from './components/ColorCards';
import MainInfo from './components/MainInfo';
import PercentBlock from './components/PercentBlock';

const Dashboard = () => {
  return (
    <body className='p-8 bg-gray-100'>
      <div className='flex gap-px'>
        <MainInfo />
        <PercentBlock />
      </div>
      <ColorCards type='pink' title='Revinues' subtitle='$432' date='2022/01/02' />
      <ColorCards type='yellow' title='Revinues' subtitle='$432' date='2022/01/02' />
    </body>
  );
};

export default Dashboard;
  