import React, { useEffect, useState } from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const MyLineChart = () => {
    /* 
    const [myChartData, setMyChart] = useState();
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setMyChart(data))
    },[])
    console.log(myChartData);
 */
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 2241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 9292,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 61,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 6700,
            "revenue": 61000
        }
    ];
      
    return (
        <div>
            <h2>My Line Chart component</h2> 
        <LineChart width={600} height={400} data={data}>
            <Line type="monotone" dataKey="investment" stroke="#8884d8" />
            <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
             <XAxis dataKey="month" />
             <Tooltip/>
             <YAxis />
        </LineChart>
        </div>
    );
};

export default MyLineChart;