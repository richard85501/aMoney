import React from 'react';
// import styles from './styles/PercentBlock.module.scss';
import DoughnutChart from '../../../graphics/PieChart';

const PercentBlock = () => {
  let color = ['rgb(227, 183, 53)', 'rgb(233, 74, 140)', 'rgb(184, 65, 208)'];

  let pieChartData = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3],
        backgroundColor: color,

        borderWidth: 0,
      },
    ],
  };

  const data = [
    { title: '期貨', value: 50, id: 1 },
    { title: '股票', value: 40, id: 2 },
    { title: '選擇權', value: 30, id: 3 },
  ];

  return (
    <div className='w-1/4 h-96 p-4 ml-5 shadow-lg rounded-sm bg-slate-50 flex flex-col'>
      Percent of investing
      <div className='w-full mt-8'>
        <DoughnutChart pieChartData={pieChartData} responsive={true} />
      </div>
      <div className='flex justify-around mt-16'>
        {data.map((item, idx) => (
          <div className='flex flex-col' key={item.id}>
            <div className='text-black text-2xl font-medium'>{item.value}%</div>
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

export default PercentBlock;
