// // src/components/ChartDisplay.js
// import React, { useEffect, useState } from 'react';
// import { Line } from 'react-chartjs-2';
// import axios from 'axios';

// const ChartDisplay = () => {
//   const [chartData, setChartData] = useState({
//     labels: [],
//     datasets: [
//       {
//         label: 'Population',
//         data: [],
//         borderColor: 'rgba(75, 192, 192, 1)',
//         backgroundColor: 'rgba(75, 192, 192, 0.2)',
//         fill: true,
//       },
//     ],
//   });

//   useEffect(() => {
//     // Fetch initial data from the backend API
//     axios.get('/api/data')
//       .then((response) => {
//         const data = response.data;
//         const labels = data.map((item) => item.stateName);
//         const population = data.map((item) => item.population);

//         setChartData((prevChartData) => ({
//           ...prevChartData,
//           labels,
//           datasets: [
//             {
//               ...prevChartData.datasets[0],
//               data: population,
//             },
//           ],
//         }));
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   return (
//     <div>
//       <h2>Age Chart</h2>
//       <Line data={chartData} />
//     </div>
//   );
// };

// export default ChartDisplay;
import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const BarChart = () => {
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
        <div  >
        <h1 className="text-center">States's Population in Bar Chart</h1>
      <Bar data={data} />
      </div>

  );
};

export default BarChart;