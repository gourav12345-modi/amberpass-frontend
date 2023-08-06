import React from 'react'
import Chart from "react-apexcharts";

function AreaChart() {
  const chartState = {

    series: [{
      data: [{
        x: 0,
        y: 35
      }, {
        x: 4,
        y: 30
      },
      {
        x: 8,
        y: 33
      }, {
        x: 12,
        y: 30,
      }, {
        x: 20,
        y: 50
      }, {
        x: 25,
        y: 20
      }, {
        x: 30,
        y: 48,
      }, {
        x: 35,
        y: 65
      }, {
        x: 40,
        y: 60,
      }, {
        x: 43,
        y: 62
      }, {
        x: 46,
        y: 55,
      }, {
        x: 50,
        y: 50
      }, {
        x: 55,
        y: 61
      }, {
        x: 60,
        y: 42
      }, {
        x: 70,
        y: 42
      }, {
        x: 73,
        y: 67
      }, {
        x: 76,
        y: 62
      }, {
        x: 79,
        y: 65
      },
      {
        x: 84,
        y: 58
      }, {
        x: 87,
        y: 60
      }, {
        x: 92,
        y: 55
      }, {
        x: 95,
        y: 62
      }, {
        x: 97,
        y: 58
      }, {
        x: 100,
        y: 62
      }]
    }],
    options: {
      colors: ['#4c41de'],
      tooltip: {
        enabled: false
      },
      chart: {
        type: 'area',
        zoom: {
          enabled: false
        },
        toolbar: {
          show: false,
        },
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },

      grid: {
        show: false,
        padding: {
          left: 0,
          right: 0,
          down: 0,
         }
      },

      xaxis: {
        type: 'numeric',
        labels: {
          show: false
        }
      },
      yaxis: {
        opposite: true,
        show: false

      },
      legend: {
        horizontalAlign: 'left'
      }
    },


  };
  return (
    <Chart options={chartState.options} series={chartState.series} type="area" height={200}/>

  )
}

export default AreaChart


