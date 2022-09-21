import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './style.css';
import ModalCarInfo from './Modal/modalCarInfo';
import React, {useState} from "react";

function createData(car_name, type_of_car, num_sasija, motor_num, power_of_motor, type_fuel, year_manuf) {
        return { car_name, type_of_car, num_sasija, motor_num, power_of_motor, type_fuel, year_manuf };
      }
    
const rows = [
    createData('Citroen', 'C5', '123456', 'a52s', '15 kW', 'dizel', '2012')
]


const CarInfo = () => {
const [show, setShow] = useState(false);
    return(
        <div>
            <h2>Popis vozila: </h2>
            <button className='add' onClick={() => setShow(true)}>
                <img className='add-button' src='./images/plus.svg' />
            </button>
            <ModalCarInfo onClose={ () => setShow(false)} show = {show}/>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Marka </TableCell>
              <TableCell align="center">Tip</TableCell>
              <TableCell align="center">Broj sasije</TableCell>
              <TableCell align="center">Broj motora</TableCell>
              <TableCell align="center">Snaga motora</TableCell>
              <TableCell align="center">Vrsta goriva</TableCell>
              <TableCell align="center">Godina proizvodnje</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.car_name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.car_name}
                </TableCell>
                <TableCell align="center">{row.type_of_car}</TableCell>
                <TableCell align="center">{row.num_sasija}</TableCell>
                <TableCell align="center">{row.motor_num}</TableCell>
                <TableCell align="center">{row.power_of_motor}</TableCell>
                <TableCell align="center">{row.type_fuel}</TableCell>
                <TableCell align="center">{row.year_manuf}</TableCell>
                <TableCell align="center">
                    <button>Izmijeni</button>
                    <button>Obrisi</button>
                    <button>Rezervisi</button>
                </TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
        </div>
        

        
    )
}

export default CarInfo;