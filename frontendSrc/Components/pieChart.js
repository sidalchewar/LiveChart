import React from "react";
import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";
    const labels = ["Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh"];
    const data = {
      labels: labels,
      datasets: [
        {
          label: "Population",
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "darkblue",
          data: [380581, 49577103, 1383727, 31205576, 104099452, 1055450, 25545198],
        },
      ],
    };
const PieChart = () => {
  return (
    <div>
    <h1 className="text-center">States's Population in Pie Chart</h1>
  <Pie data={data} className="border border-dark"/>
  </div>
  );
};
export default PieChart;