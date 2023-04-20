import React from 'react';
import styles from './styles/PercentBlock.module.scss';
import DoughnutChart from '../../../graphics/PieChart';

const PercentBlock = () => {
  let pieChartData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: ['rgb(227, 183, 53)', 'rgb(233, 74, 140)', 'rgb(184, 65, 208)', 'rgb(74, 233, 77)', 'rgb(74, 95, 233)'],

        borderWidth: 0,
      },
    ],
  };

  const data = [
    { title: '午餐花費', value: 50 },
    { title: '交通花費', value: 40 },
    { title: '零食', value: 30 },
  ];

  return (
    <div className='p-4 ml-5 shadow-lg rounded-sm w-1/4 h-fit bg-slate-50 flex h-96 flex-col'>
      PercentBlock
      <div className='w-fit mt-8'>
        <DoughnutChart pieChartData={pieChartData} responsive={true} />
      </div>
      <div className='flex justify-around mt-16'>
        {data.map((item) => (
          <div className='flex flex-col'>
            <div className='text-black text-2xl font-medium'>{item.value}%</div>
            <div className='flex text-slate-400 text-xs'>{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PercentBlock;
