import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  // Interaction,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import gradient from 'chartjs-plugin-gradient';
// import {
// CrosshairPlugin,
// Interpolate,
// } from 'chartjs-plugin-crosshair';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

// ChartJS.register(gradient);
// ChartJS.defaults.showLine = true;

interface LineChartProps {
  data?: string;
  responsive?: boolean; //是否要符合外層寬高
  pointBorderWidth?: string; //點的邊框寬度 *int
  pointBorderColor?: string; //點的邊框顏色 *string
  pointHoverBorderWidth?: string; //點的邊框hover的寬度 *int
  borderColor?: string; //點的邊框顏色 *string
  hoverBorderColor?: string; //點的邊框hover的顏色 *string
  pointRadius?: string; //點的大小 *int
  pointHoverRadius?: string; //點hover的大小 *int
  pointBackgroundColor?: string; //點的顏色 *string
  pointHoverBackgroundColor?: string; //點hover的顏色 *string
  borderWidth?: string; //線的寬度 *int
  backgroundColor?: string; //線之下的面積顏色 *string
  xAxesFontSize?: string; //x軸字體大小 *int
  xAxesGrid?: string; //x軸隔線是否顯示 *boolean
  xAxesGridBorderDash?: string; //x軸格線,虛線格式 *int of array
  yAxesGrid?: string; //y軸隔線是否顯示 *boolean
  yAxesGridBorderDash?: string; //y軸格線,虛線格式 *int of array
  yAxesMax?: string; //y軸最大值 *int
  yAxesStepSize?: string; //y軸每一個值相隔的距離 *int
  yAxesFontSize?: string; //y軸字體大小 *int
  xAxisLabel?: Array<number>;
  values?: number[][];
}

const LineChart = (props: LineChartProps) => {
  const {
    data,
    responsive, //是否要符合外層寬高
    pointBorderWidth, //點的邊框寬度 *int
    pointBorderColor, //點的邊框顏色 *string
    pointHoverBorderWidth, //點的邊框hover的寬度 *int
    borderColor, //點的邊框顏色 *string
    hoverBorderColor, //點的邊框hover的顏色 *string
    pointRadius, //點的大小 *int
    pointHoverRadius, //點hover的大小 *int
    pointBackgroundColor, //點的顏色 *string
    pointHoverBackgroundColor, //點hover的顏色 *string
    borderWidth, //線的寬度 *int
    backgroundColor, //線之下的面積顏色 *string
    xAxesFontSize, //x軸字體大小 *int
    xAxesGrid, //x軸隔線是否顯示 *boolean
    xAxesGridBorderDash, //x軸格線,虛線格式 *int of array
    yAxesGrid, //y軸隔線是否顯示 *boolean
    yAxesGridBorderDash, //y軸格線,虛線格式 *int of array
    yAxesMax, //y軸最大值 *int
    yAxesStepSize, //y軸每一個值相隔的距離 *int
    yAxesFontSize, //y軸字體大小 *int
    xAxisLabel, //x軸
    values, //輸入的值
  } = props;

  // let xAxisLabel = [55, 61, 54, 88, 99, 44, 22, 33, 11];
  // let values = [
  //   [55, 61, 54, 88, 99, 44, 22, 33, 11],
  //   // [11, 22, 46, 32, 74, 12, 56, 49, 66],
  // ];
  let color = ['#f22756', '#f09114'];
  let bgcolor = ['#f227564a', '#f091144a'];

  let datasets: any = [];
  values?.forEach((item, idx) => {
    datasets.push({
      label: 'line chart',
      data: item,
      fill: true,
      //point border
      pointBorderWidth: pointBorderWidth ? pointBorderWidth : 0,
      pointBorderColor: pointBorderColor ? pointBorderColor : 'black',
      pointHoverBorderWidth: pointHoverBorderWidth ? pointHoverBorderWidth : 0,
      borderColor: borderColor ? borderColor : color[idx],
      hoverBorderColor: hoverBorderColor ? hoverBorderColor : 'black',
      //point
      pointRadius: pointRadius ? pointRadius : 0,
      pointHoverRadius: pointHoverRadius ? pointHoverRadius : 0,
      pointBackgroundColor: pointBackgroundColor ? pointBackgroundColor : '#BEBEBE',
      pointHoverBackgroundColor: pointHoverBackgroundColor ? pointHoverBackgroundColor : '#BEBEBE',

      borderWidth: borderWidth ? borderWidth : 2,
      tension: 0.3,
      backgroundColor: backgroundColor ? backgroundColor : bgcolor[idx],
      //要安裝 npm i chartjs-plugin-gradient
      plugins: {
        gradient: !backgroundColor
          ? {
              backgroundColor: {
                axis: 'y',
                colors: {
                  0: 'rgba(250, 250, 250, 0)',
                  100: 'rgba(110, 106, 106, 1)',
                },
              },
            }
          : null,
      },
    });
  });

  const chartData = {
    labels: xAxisLabel,
    datasets: datasets,
  };

  const options = {
    maintainAspectRatio: false,
    responsive: responsive !== null ? responsive : false,
    scales: {
      // yAxes: {
      //   max: yAxesMax ? yAxesMax : 100,
      //   min: 0,
      //   ticks: {
      //     beginAtZero: true,
      //     stepSize: yAxesStepSize ? yAxesStepSize : 25,
      //     font: {
      //       size: yAxesFontSize ? yAxesFontSize : 6,
      //     },
      //     callback: function (value) {
      //       return value;
      //     },
      //   },
      //   grid: {
      //     display: yAxesGrid ? yAxesGrid : false,
      //     borderDash: yAxesGridBorderDash ? yAxesGridBorderDash : [4, 4],
      //   },
      // },
      // xAxes: {
      //   ticks: {
      //     font: {
      //       size: xAxesFontSize ? xAxesFontSize : 8,
      //     },
      //     callback: function (val, index) {
      //       return label;
      //     },
      //   },
      //   grid: {
      //     display: xAxesGrid ? xAxesGrid : false,
      //     borderDash: xAxesGridBorderDash ? xAxesGridBorderDash : [4, 4],
      //   },
      // },
    },
    plugins: {
      legend: {
        display: false,
        position: 'top',
        align: 'end',
        labels: {
          font: {
            size: 8, //圖案大小
            family: null,
            weight: null,
            lineHeight: null,
          },
          usePointStyle: true,
        },
      },
      tooltip: {
        displayColors: false,
        callbacks: {
          // title: titleTooltip,
          // labelTextColor: labelTextColor,
          label: xAxisLabel,
          // footer: footer,
          // afterFooter: afterFooter
        },
        bodyFont: { size: 8 },
        backgroundColor: '#000',
        yAlign: 'bottom',
        padding: 8,

        titleFont: { size: 8 },
        titleColor: 'white',

        footFont: { size: 14 },
        footerColor: 'black',
        footerFont: { weight: '400' },
        footerSpacing: 10,
        caretSize: 0,
      },
    },
    tooltips: { bodyFontSize: 20 },
  };

  return <Line data={chartData} options={options} />;
};

export default LineChart;
