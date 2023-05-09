import React, { useEffect } from 'react';
import ColorCards from './components/ColorCards';
import MainInfo from './components/MainInfo';
import Percent from './components/Percent';
import Activities from './components/Activities';
import Detail from './components/Detail';

const Dashboard = () => {
  useEffect(() => {
    fetch(
      'https://sheets.googleapis.com/v4/spreadsheets/1lw17u6YExrljLci0vrPVx5WuToUB6W1mCnnLQVdYdEg/values/trade_record_database?alt=json&key=AIzaSyCTVKBmNnCVjgos3DRJvH2CWvbzplUQ73g'
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  }, []);

  return (
    <body className='p-8 bg-gray-100'>
      <div className='flex'>
        <MainInfo />
        <Percent />
      </div>
      <div className='flex mt-4 justify-center justify-around'>
        <ColorCards type='pink' title='Revinues' subtitle='$432' date='2022/01/02' />
        <ColorCards type='purple' title='Revinues' subtitle='$432' date='2022/01/02' />
        <ColorCards type='blue' title='Revinues' subtitle='$432' date='2022/01/02' />
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
  