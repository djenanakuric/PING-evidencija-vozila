import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

const CarsTable = () => {
  function createData(
    car_name,
    type_of_car,
    num_sasija,
    motor_num,
    power_of_motor,
    type_fuel,
    year_manuf
  ) {
    return {
      car_name,
      type_of_car,
      num_sasija,
      motor_num,
      power_of_motor,
      type_fuel,
      year_manuf,
    };
  }

  const rows = [
    createData('Citroen', 'C5', '123456', 'a52s', '15 kW', 'dizel', '2012'),
  ];
  return (
    <div>
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
              <TableCell align="center">Akcije</TableCell>
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
                  <i class="bx bx-edit-alt"></i>
                  <i class="bx bx-trash"></i>
                  <i class='bx bx-check' ></i>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CarsTable;
