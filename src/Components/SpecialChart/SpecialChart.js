import axios from "axios";
import React, { useEffect, useState } from "react";
import { Bar, BarChart } from "recharts";
import "./SpecialChart.css";
const SpecialChart = () => {
  const [watches, setWatches] = useState([]);
  useEffect(() => {
    axios.get("data.json").then((data) => setWatches(data.data));
  }, []);
  return (
    <div>
      <BarChart width={200} height={400} data={watches}>
        <h2> Bar Chart Data</h2>
        <Bar dataKey="sell" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default SpecialChart;
