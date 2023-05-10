import React, { useEffect, useState } from 'react';
// import styles from './styles/PercentBlock.module.scss';
import DoughnutChart from '../../../graphics/PieChart';

type PercentProps = {
  data?: Array<{
    code: string;
    name: string;
    type: string;
    buy: string;
    sold: string;
    isProfitable: string;
    startPeriod: string;
    isFinished: string;
    profit: string;
  }>;
};

const Percent = ({ data }: PercentProps) => {
  const [percent, setPercent] = useState([
    { title: '股票', value: 0, id: 1 },
    { title: '選擇權', value: 0, id: 2 },
    { title: '期貨', value: 0, id: 3 },
  ]);

  let color = ['rgb(227, 183, 53)', 'rgb(233, 74, 140)', 'rgb(184, 65, 208)'];

  let pieChartData = {
    labels: ['股票', '選擇權', '期貨'],
    datasets: [
      {
        label: '比例',
        data: [percent[0].value, percent[1].value, percent[2].value],
        backgroundColor: color,
      },
    ],
  };

  useEffect(() => {
    let arr = [...percent];
    data?.forEach((item) => {
      if (item.type === '股票') {
        arr[0].value++;
      } else if (item.type === '選擇權') {
        arr[1].value++;
      } else if (item.type === '期貨') {
        arr[2].value++;
      }
    });
    setPercent(arr);
  }, [data]);

  return (
    <div className='w-1/4 h-96 p-4 ml-5 shadow-lg rounded-sm bg-slate-50 flex flex-col'>
      Percent of investing
      <div className='w-full mt-8'>
        <DoughnutChart pieChartData={pieChartData} responsive={true} />
      </div>
      <div className='flex justify-around mt-16'>
        {percent?.map((item: any) => (
          <div className='flex flex-col' key={item.id}>
            <div className='text-black text-2xl font-medium'>{data ? ((item.value / (data?.length || 0)) * 100).toFixed(0) : '-'}%</div>
            <div className='flex text-slate-400 text-xs items-center mt-2'>
              <div className='w-1.5 h-1.5 bg-slate-400 rounded-full mr-2'></div>
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Percent;
