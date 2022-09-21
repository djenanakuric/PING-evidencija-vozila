import './style.css';
import React from "react";
import {BrowserRouter as Router, Link, Routes, Route} from "react-router-dom";
import CarInfo from '../Content/carInfo';
import TravelApplication from '../Content/travelApplication';
import Report from '../Content/report';



const navBar = () => {
    return(
        <Router>
           <div className="vertical-nav" id="sidebar">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <Link to="/vozilo" className="nav-link text-dark font-italic">
                            Vozilo
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/putni-nalog" className="nav-link text-dark font-italic">
                            Putni nalog
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/izvjestaj" className="nav-link text-dark font-italic">
                            Izvjestaj
                        </Link>
                    </li>
                </ul>  
            </div> 
            <Routes>
                    <Route exact path="/vozilo" element={<CarInfo/>} />
                    <Route exact path="/putni-nalog" element={<TravelApplication/>} />
                    <Route exact path="/izvjestaj" element={<Report/>} /> 
            </Routes>
        </Router>
             
    )
};

export default navBar;