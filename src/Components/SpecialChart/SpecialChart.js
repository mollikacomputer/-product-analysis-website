import axios from "axios";
import React, { useEffect, useState } from "react";
import { Bar, BarChart, Tooltip, XAxis } from "recharts";
import "./SpecialChart.css";
const SpecialChart = () => {
  const [watches, setWatches] = useState([]);
  useEffect(() => {
    axios.get("data.json").then((data) => setWatches(data.data));
  }, []);
  return (
    <div>
      <h2> Bar Chart </h2>
      <BarChart width={400} height={350} data={watches}>
        <Bar dataKey="sell" fill="#8884d8" />
        <XAxis dataKey="month" />
        <Bar dataKey="investment" fill="#8884d8" />
        <Tooltip/>
      </BarChart>
    </div>
  );
};

export default SpecialChart;
