import React from 'react';
import './index.css';
import 'boxicons/css/boxicons.min.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import CarInfo from './Components/Car';
import TravelApplication from './Components/TravelApplication';
import Report from './Components/Report';
import AppLayout from './Components/Layout';


function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<AppLayout />}>
                  <Route index element={<CarInfo />} />
                  <Route path='/vozilo' element={<CarInfo />} />
                  <Route path='/putni-nalog' element={<TravelApplication />} />
                  <Route path='/izvjestaj' element={<Report />} />
              </Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
