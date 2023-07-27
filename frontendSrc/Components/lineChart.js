import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const LineChart = () => {
    const labels = ["Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh"];
    const data = {
      labels: labels,
      datasets: [
        {
          label: "Population",
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgb(255, 99, 132)",
          data: [380581, 49577103, 1383727, 31205576, 104099452, 1055450, 25545198],
        },
      ],
    };

  return (
   <>
    <h1 className="text-center">States's Population in Line Chart</h1>
  <Line data={data} />
 </>
  );
};

export default LineChart;