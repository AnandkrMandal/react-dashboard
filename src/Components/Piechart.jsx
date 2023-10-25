import React from 'react'
import { Chart } from "react-google-charts";




export default function Piechart() {

  
    // Pie Chart Sample Data
 const Piedata = [
    ["Sales", "over Platform"],
    ["Shop", 2345],
    ["Online", 6574],
    ["Retail", 1587],
    ["Franchise", 2031],
  ];
  
 const PieChartOptions = {
    // title: "Sales Over Platform",
    pieHole: 0.4,
    is3D: false,
  };

  return (
    <Chart
            chartType="PieChart"
            width="100%"
            height="100%"
            data={Piedata}
            options={PieChartOptions}
        />
  )
}
