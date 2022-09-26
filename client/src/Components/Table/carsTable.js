// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
// } from '@mui/material';
import {useSelector, useDispatch} from "react-redux";
import {selectCarsList, loadCars} from "../../Redux/cars";
import {useEffect} from 'react';
import { Table } from 'reactstrap';

const CarsTable = () => {
  const cars = useSelector(selectCarsList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCars());
  }, []);

  return (
    <div>
      <Table>
        <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
        </thead>
        <tbody>
        {
          cars.map((car) => (
            <tr key={1*new Date().getMilliseconds()}>
              <td>{car.Marka}</td>
            </tr>
          ))
        }
        </tbody>
      </Table>

      {/* <TableContainer component={Paper}>*/}
      {/*  <Table sx={{ minWidth: 650 }} aria-label="simple table">*/}
      {/*    <TableHead>*/}
      {/*      <TableRow>*/}
      {/*        <TableCell>Marka </TableCell>*/}
      {/*        <TableCell align="center">Tip</TableCell>*/}
      {/*        <TableCell align="center">Broj sasije</TableCell>*/}
      {/*        <TableCell align="center">Broj motora</TableCell>*/}
      {/*        <TableCell align="center">Snaga motora</TableCell>*/}
      {/*        <TableCell align="center">Vrsta goriva</TableCell>*/}
      {/*        <TableCell align="center">Godina proizvodnje</TableCell>*/}
      {/*        <TableCell align="center">Akcije</TableCell>*/}
      {/*      </TableRow>*/}
      {/*    </TableHead>*/}
      {/*    <TableBody>*/}
      {/*      /!* {renderedCars} *!/*/}
      {/*      {*/}
      {/*        cars.map((car) =>(*/}
      {/*                          <TableRow*/}
      {/*            key={car.Id}*/}
      {/*            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}*/}
      {/*          >*/}
      {/*            <TableCell component="th" scope="row">*/}
      {/*              {car.Marka}*/}
      {/*            </TableCell>*/}
      {/*            <TableCell align="center">{car.Marka}</TableCell>*/}
      {/*            <TableCell align="center">{car.Tip}</TableCell>*/}
      {/*            <TableCell align="center">{car.BrojSasije}</TableCell>*/}
      {/*            <TableCell align="center">{car.BrojMotora}</TableCell>*/}
      {/*            <TableCell align="center">{car.SnagaMotora}</TableCell>*/}
      {/*            <TableCell align="center">{car.GodinaProizvodnje}</TableCell>*/}
      {/*            <TableCell align="center">*/}
      {/*              <i class="bx bx-edit-alt"></i>*/}
      {/*              <i class="bx bx-trash"></i>*/}
      {/*              <i class='bx bx-check' ></i>*/}
      {/*            </TableCell>*/}
      {/*          </TableRow>))*/}
      {/*        }*/}
      {/*    </TableBody>*/}
      {/*  </Table>*/}
      {/*</TableContainer>*/}
    </div>
  );
};

export default CarsTable;
