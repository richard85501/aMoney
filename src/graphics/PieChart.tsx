import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie, Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

type PieChartProps = {
  responsive: boolean;
  pieChartData?: any;
};

const PieChart = (props: PieChartProps) => {
  const { responsive, pieChartData } = props;

  const options = {
    cutout: 55,
    maintainAspectRatio: false,
    responsive: responsive !== null ? responsive : false,
    plugins: {
      legend: {
        display: false,
        position: 'top',
        align: 'end',
        labels: {
          font: {
            size: 12,
            family: null,
            weight: null,
            lineHeight: null,
          },
          usePointStyle: true,
        },
      },
      tooltip: {
        displayColors: false,
        bodyFont: { size: 12 },
        backgroundColor: '#000',
        yAlign: 'bottom',
        padding: 8,

        titleFont: { size: 12 },
        titleColor: 'white',

        footFont: { size: 14 },
        footerColor: 'black',
        footerFont: { weight: '400' },
        footerSpacing: 10,
        caretSize: 0,
      },
    },
  };

  return <Doughnut data={pieChartData} options={options} />;
};

export default PieChart;
