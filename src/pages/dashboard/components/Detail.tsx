import React from 'react';
import Button from '../../../utility/Button';
import TextField from '../../../utility/TextField';

type DetailProps = {
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

const Detail = ({ data }: DetailProps) => {
  return (
    <div className='p-4 ml-5 shadow-lg rounded-sm w-2/3 bg-slate-50 flex h-96 flex-col '>
      Detail Status
      <div className='text-slate-400 text-xs mt-1'>OverView of Lastest Month</div>
      <div className='flex mt-5 justify-between'>
        <Button label='Add' type='primary' size='small' onClick={() => {}} />
        <div className=''>
          <TextField onChange={() => {}} />
        </div>
      </div>
      <div className='w-full h-10 mt-4 bg-blue-900 rounded-lg flex'>
        <div className='pl-5 text-slate-100 text-xs my-auto w-1/6'>CODE</div>
        <div className='pl-5 text-slate-100 text-xs my-auto w-1/6'>NAME</div>
        <div className='pl-5 text-slate-100 text-xs my-auto w-1/6'>TYPE</div>
        <div className='pl-5 text-slate-100 text-xs my-auto w-1/6'>BUY</div>
        <div className='pl-5 text-slate-100 text-xs my-auto w-1/6'>SOLD</div>
        <div className='pl-5 text-slate-100 text-xs my-auto w-1/6'>STATUS</div>
      </div>
      <div className='overflow-auto'>
        {data?.map((item: any, idx: number) => (
          <div className='w-full h-fit mt-4 rounded-lg flex' key={idx}>
            <div className='pl-5 text-slate-900 text-xs my-auto w-1/6'>{item.code}</div>
            <div className='pl-5 text-slate-900 text-xs my-auto w-1/6'>{item.name}</div>
            <div className='pl-5 text-slate-900 text-xs my-auto w-1/6'>{item.type}</div>
            <div className='pl-5 text-slate-900 text-xs my-auto w-1/6'>{item.buy}</div>
            <div className='pl-5 text-slate-900 text-xs my-auto w-1/6'>{item.sold}</div>
            <div className='pl-5 text-slate-900 text-xs my-auto w-1/6'>
              <Button
                label={item.isProfitable ? '上漲' : '下跌'}
                type='primary'
                size='small'
                backgroundColor={item.isProfitable ? '' : '#67d11c'}
                onClick={() => {}}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Detail;
