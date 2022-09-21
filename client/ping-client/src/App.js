import React from 'react';
import './index.css';
import {BrowserRouter as Router, Link, Routes, Route} from "react-router-dom";
import CarInfo from './Content/carInfo';
import TravelApplication from './Content/travelApplication';
import Report from './Content/report';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/vozilo" element={<CarInfo/>} />
        <Route exact path="/putni-nalog" element={<TravelApplication/>} />
        <Route exact path="/izvjestaj" element={<Report/>} /> 
      </Routes>  
    </Router>
  )
}

export default App;
