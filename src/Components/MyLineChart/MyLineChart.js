import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const MyLineChart = () => {
    const [watches, setWatches] = useState([]);
    useEffect(() => {
      axios.get("data.json").then((data) => setWatches(data.data));
    }, []);
    
    return (
        <div>
            <h2>My Line Chart component</h2> 
        <LineChart width={600} height={400} data={watches}>
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