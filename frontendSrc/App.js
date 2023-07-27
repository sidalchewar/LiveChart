// src/App.js
import React, { useEffect, useState } from 'react';
import socket1 from 'socket.io-client';
import ChartDisplay from "./Components/chartDisplay";
import LineChart from './Components/lineChart';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import PieChart from './Components/pieChart';
const App = () => {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   // Connect to the socket.io server
  //   const socket = socket1('http://localhost:3001');

  //   // Set up a listener for real-time updates
  //   socket.on('dataUpdate', (updatedData) => {
  //     setData((prevData) => [...prevData, updatedData]);
  //   });

  //   // Clean up the socket connection on component unmount
  //   return () => {
  //     socket.disconnect();
  //   };
  // }, []);


  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/bar' element={<ChartDisplay/>}></Route>
          <Route path='/line' element={<LineChart/>}></Route>
          <Route path='/pie' element={<PieChart/>}></Route>

        </Route>
      </Routes>
    </Router>
   
  );
};

export default App;


