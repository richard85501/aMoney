import React, { useEffect, useState } from 'react';
import ColorCards from './components/ColorCards';
import MainInfo from './components/MainInfo';
import Percent from './components/Percent';
import Activities from './components/Activities';
import Detail from './components/Detail';

const Dashboard = () => {
  const [data, setData] = useState();
  // console.log(process.env.REACT_APP_EXCEL_KEY);
  useEffect(() => {
    fetch(
      'https://sheets.googleapis.com/v4/spreadsheets/1lw17u6YExrljLci0vrPVx5WuToUB6W1mCnnLQVdYdEg/values/trade_record_database?alt=json&key=AIzaSyCTVKBmNnCVjgos3DRJvH2CWvbzplUQ73g'
    )
      .then((res) => res.json())
      .then((res) => {
        let list = res.values.reduce((acc: any, obj: Array<string>, index: number) => {
          if (index === 0) return acc;
          let detail = {
            code: obj[0],
            name: obj[1],
            share: obj[2],
            buy: +obj[3],
            sold: +obj[4],
            isProfitable: obj[5] === 'FALSE' ? false : true,
            startPeriod: obj[6],
            endPeriod: obj[7],
            isFinished: obj[8],
            type: obj[9],
            profit: +obj[10],
          };
          acc.push(detail);
          return acc;
        }, []);
        setData(list);
      });
  }, []);

  return (
    <body className='p-8 bg-gray-100'>
      <div className='flex'>
        <MainInfo data={data} />
        <Percent data={data} />
      </div>
      {/* <div className='flex mt-4 justify-center justify-around'>
        <ColorCards type='pink' title='Revinues' subtitle='$432' date='2022/01/02' />
        <ColorCards type='purple' title='Revinues' subtitle='$432' date='2022/01/02' />
        <ColorCards type='blue' title='Revinues' subtitle='$432' date='2022/01/02' />
        <ColorCards type='yellow' title='Revinues' subtitle='$432' date='2022/01/02' />
      </div> */}

      <div className='flex mt-4 '>
        {/* <Activities /> */}
        <Detail data={data} />
      </div>
    </body>
  );
};

export default Dashboard;
