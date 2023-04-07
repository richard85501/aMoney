"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var chart_js_1 = require("chart.js");
var chartjs_plugin_gradient_1 = require("chartjs-plugin-gradient");
// import {
// CrosshairPlugin,
// Interpolate,
// } from 'chartjs-plugin-crosshair';
chart_js_1.Chart.register(chart_js_1.CategoryScale, chart_js_1.LinearScale, chart_js_1.PointElement, chart_js_1.LineElement, chart_js_1.Title, chart_js_1.Tooltip, chart_js_1.Legend, chart_js_1.Filler);
chart_js_1.Chart.register(chartjs_plugin_gradient_1.default);
var LineChart = function (props) {
    var data = props.data, responsive = props.responsive, //是否要符合外層寬高
    pointBorderWidth = props.pointBorderWidth, //點的邊框寬度 *int
    pointBorderColor = props.pointBorderColor, //點的邊框顏色 *string
    pointHoverBorderWidth = props.pointHoverBorderWidth, //點的邊框hover的寬度 *int
    borderColor = props.borderColor, //點的邊框顏色 *string
    hoverBorderColor = props.hoverBorderColor, //點的邊框hover的顏色 *string
    pointRadius = props.pointRadius, //點的大小 *int
    pointHoverRadius = props.pointHoverRadius, //點hover的大小 *int
    pointBackgroundColor = props.pointBackgroundColor, //點的顏色 *string
    pointHoverBackgroundColor = props.pointHoverBackgroundColor, //點hover的顏色 *string
    borderWidth = props.borderWidth, //線的寬度 *int
    backgroundColor = props.backgroundColor, //線之下的面積顏色 *string
    xAxesFontSize = props.xAxesFontSize, //x軸字體大小 *int
    xAxesGrid = props.xAxesGrid, //x軸隔線是否顯示 *boolean
    xAxesGridBorderDash = props.xAxesGridBorderDash, //x軸格線,虛線格式 *int of array
    yAxesGrid = props.yAxesGrid, //y軸隔線是否顯示 *boolean
    yAxesGridBorderDash = props.yAxesGridBorderDash, //y軸格線,虛線格式 *int of array
    yAxesMax = props.yAxesMax, //y軸最大值 *int
    yAxesStepSize = props.yAxesStepSize, //y軸每一個值相隔的距離 *int
    yAxesFontSize = props.yAxesFontSize;
    var label = [55, 61, 54, 88, 99, 44, 22, 33, 11];
    var keys = [
        [55, 61, 54, 88, 99, 44, 22, 33, 11],
        [11, 22, 46, 32, 74, 12, 56, 49, 66],
    ];
    var datasets = [];
    keys.forEach(function (item, idx) {
        datasets.push({
            label: 'line chart',
            data: item,
            fill: true,
            //point border
            pointBorderWidth: pointBorderWidth ? pointBorderWidth : 0,
            pointBorderColor: pointBorderColor ? pointBorderColor : 'black',
            pointHoverBorderWidth: pointHoverBorderWidth ? pointHoverBorderWidth : 0,
            borderColor: borderColor ? borderColor : 'black',
            hoverBorderColor: hoverBorderColor ? hoverBorderColor : 'black',
            //point
            pointRadius: pointRadius ? pointRadius : 0,
            pointHoverRadius: pointHoverRadius ? pointHoverRadius : 0,
            pointBackgroundColor: pointBackgroundColor ? pointBackgroundColor : '#BEBEBE',
            pointHoverBackgroundColor: pointHoverBackgroundColor ? pointHoverBackgroundColor : '#BEBEBE',
            borderWidth: borderWidth ? borderWidth : 2,
            tension: 0.3,
            backgroundColor: backgroundColor && backgroundColor,
            //要安裝 npm i chartjs-plugin-gradient
            // plugins: {gradient}
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
        });
    });
    var chartData = {
        labels: label,
        datasets: datasets,
    };
    var options = {
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
            gradient: chartjs_plugin_gradient_1.default,
            legend: {
                display: false,
                position: 'top',
                align: 'end',
                labels: {
                    font: {
                        size: 8,
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
                    label: label,
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
    return (react_1.default.createElement(react_1.default.Fragment, null)
    // <Line data={chartData} options={options} />
    );
};
exports.default = LineChart;
