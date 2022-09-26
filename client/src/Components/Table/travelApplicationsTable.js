import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import { Form } from 'react-bootstrap';

const TravelApplicationsTable = () => {
  function createData(
    start_date,
    end_date,
    start_position,
    end_position,
    name_of_driver,
    num_pass,
    acc
  ) {
    return {
      start_date,
      end_date,
      start_position,
      end_position,
      name_of_driver,
      num_pass,
      acc,
    };
  }

  const rows = [
    createData(
      '12.04.2022 - 12:00',
      '12.04.2022 - 18:00',
      'Sarajevo',
      'Mostar',
      'Ivica Ivic',
      '2',
      'evidentiran'
    ),
  ];
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Datum i rijeme polaska:</TableCell>
              <TableCell align="center">Datum i vrijeme dolaska:</TableCell>
              <TableCell align="center">Polazak:</TableCell>
              <TableCell align="center">Dolazak:</TableCell>
              <TableCell align="center">Ime i prezime vozaca:</TableCell>
              <TableCell align="center">Broj putnika:</TableCell>
              <TableCell align="center">Akcija:</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.start_date}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.start_date}
                </TableCell>
                <TableCell align="center">{row.end_date}</TableCell>
                <TableCell align="center">{row.start_position}</TableCell>
                <TableCell align="center">{row.end_position}</TableCell>
                <TableCell align="center">{row.name_of_driver}</TableCell>
                <TableCell align="center">{row.num_pass}</TableCell>
                <TableCell align="center">
                  <Form.Select>
                    <option value="kW">Evidentirno</option>
                    <option value="KS">Potvrđeno</option>
                    <option value="KS">Završeno</option>
                    <option value="KS">Odbijeno</option>
                  </Form.Select>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TravelApplicationsTable;
