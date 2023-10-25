import React from 'react'
import { Chart } from "react-google-charts";



export default function Barchart() {
    //  bar Chart Sample Data
     const Bardata = [
        ["Year", "Sales", "Expenses", "Profit"],
        ["2014", 8000, 4400, 3000],
        ["2015", 7170, 3560, 4010],
        ["2016", 5600, 4220, 2400],
        ["2017", 9030, 5040, 3990],
        ["2018", 8530, 3540, 4990],
        ["2019", 6530, 6040, 3490],
        ["2020", 8430, 4540, 2890],
        ["2021", 9430, 6540, 4890],
        ["2022", 7430, 3540, 3890],
        ["2023", 9430, 5540, 3890],
    ];

     const BarChartOptions = {
        chart: {
            // title: "Company Performance",
            // subtitle: "Sales, Expenses, and Profit: 2014-2023",
            is3D: true,
        },
    };
    return (
        <Chart
            chartType="Bar"
            width="100%"
            height="100%"
            data={Bardata}
            options={BarChartOptions}
        />
    )
}
