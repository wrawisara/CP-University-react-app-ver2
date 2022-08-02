import React from 'react'
import Chart from 'react-apexcharts'
import './dailyusers.scss'
const CustomerReview = () => {
    const data = {
        series: [
          {
            name: "dailys user",
            data: [10, 50, 30, 90, 40, 120, 100],
          },
        ],
        options: {
          chart: {
            type: "area",
            height: "auto",
          },
    
          fill: {
            colors: ["#fff"],
            type: "gradient",
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            curve: "smooth",
            colors: ["#ff929f"],
          },
          tooltip: {
            x: {
              format: "dd/MM/yy HH:mm",
            },
          },
          grid: {
            show: false,
          },
          xaxis: {
            type: "datetime",
            categories: [
              "2022-06-19T00:00:00.000Z",
              "2022-06-18T00:00:00.000Z",
              "2022-06-16T00:00:00.000Z",
              "2022-06-15T00:00:00.000Z",
              "2022-06-14T00:00:00.000Z",
              "2022-06-13T00:00:00.000Z",
              "2022-06-12T00:00:00.000Z",
            ],
          },
          yaxis: {
            show: false
          },
          toolbar:{
            show: false
          }
        },
      };
  return (
    <div className="customerreview">
        <Chart options={data.options} series={data.series} type="area" />
 
    </div>
  )
}

export default CustomerReview