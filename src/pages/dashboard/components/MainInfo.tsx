import React, { useState } from 'react';
import LineChart from '../../../graphics/LineChart';
import Button from '../../../utility/Button';
import ColorIcon from '../../../utility/ColorIcon';
import styles from './styles/MainInfo.module.scss';

import { FiActivity } from 'react-icons/fi';
import { isTemplateTail } from 'typescript/lib/tsserverlibrary';

type MainInfoProps = {
  data?: Array<{
    code: string;
    name: string;
    type: string;
    buy: number;
    sold: number;
    isProfitable: string;
    startPeriod: string;
    isFinished: string;
    profit: number;
  }>;
};

const MainInfo = ({ data }: MainInfoProps) => {
  // const [period, setPeriod] = useState(0);
  // const periodList = ['DAILY', 'WEEKLY', 'MONTHLY', 'YEARLY'];
  const template = [
    { title: '股票損益', value: '股票' },
    { title: '期貨損益', value: '期貨' },
    { title: '選擇權損益', value: '選擇權' },
  ];

  const getSumOfEarning = () => {
    let total = data?.reduce((acc: number, obj: any) => {
      if (obj.profit) acc = acc + +obj.profit;
      return acc;
    }, 0);
    return total;
  };

  const getEachProductEarning = (title: string) => {
    let res = data?.reduce((acc: number, obj: any) => {
      if (obj.profit && obj.type === title) acc = acc + obj.profit;
      return acc;
    }, 0);
    return res;
  };

  const getxAxisLabels = () => {
    const arr = Array(data?.length)
      .fill(null)
      .map((_, index) => index + 1);
    return arr;
  };

  const getValues = () => {
    let profitList: number[][] = [[]];
    data?.reduce((acc: number, obj: any) => {
      if (obj.profit) acc = acc + obj.profit;
      profitList[0].push(acc);
      return acc;
    }, 0);
    return profitList;
  };

  return (
    <div className='p-4 shadow-lg rounded-sm w-3/4 h-128 bg-slate-50 h-96'>
      <div className='flex'>
        <div>
          <div className='text-black text-lg'>DashBoard</div>
          <div className='mt-1 text-slate-400 text-xs'>overveiw of lastmonth</div>
          <div className='mt-6 text-black text-2xl font-medium'>${getSumOfEarning()}</div>
          <div className='mt-1 text-slate-400 text-xs'>目前總計收益</div>
          <div className='mt-6 text-black text-2xl font-medium'>{data?.length}</div>
          <div className='mt-1 mb-6 text-slate-400 text-xs'>總交易次數</div>
          <Button label='last month summary' type='primary' size='large' onClick={() => {}} />
        </div>

        <div className={styles.right}>
          {/* <div className={styles.right_header}>
            {periodList.map((item, idx) => (
              <div key={idx} className={idx === period ? styles.select : styles.default} onClick={() => setPeriod(idx)}>
                {item}
              </div>
            ))}

            <div className={styles.legend}>
              <div className={styles.current}>current</div>
              <div className={styles.online}>total</div>
            </div>
          </div> */}
          <div className={styles.right_content}>
            <LineChart responsive={true} xAxisLabel={getxAxisLabels()} values={getValues()} />
          </div>
        </div>
      </div>
      <div className='flex justify-between'>
        {template.map((item, idx) => (
          <div className='w-1/5 h-16 flex items-center' key={idx}>
            <div className='bg-red-400 w-8 h-8 rounded-full'>
              <FiActivity className='m-auto h-full text-white' />
            </div>
            {/* <ColorIcon icon={<FiActivity />} /> */}

            <div className='ml-2'>
              <div className='text-slate-400 text-xs'>{item.title}</div>
              <div className='text-black text-2l font-medium'>${getEachProductEarning(item.value)}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainInfo;
