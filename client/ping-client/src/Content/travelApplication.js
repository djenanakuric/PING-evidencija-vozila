import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function createData(start_date, start_time, end_date, end_time, start_position, end_position, name_of_driver, num_pass, acc) {
    return { start_date, start_time, end_date, end_time, start_position, end_position, name_of_driver, num_pass, acc };
  }

const rows = [
createData('12.04.2022', '12:00', '12.04.2022', '18:00', 'Sarajevo', 'Mostar', 'Ivica Ivic', '2', 'evidentiran')
]
const travelApplication = () => {
    return(
        <div>
            <h1>Informacije o putnim nalozima</h1>
            <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Datum polaska: </TableCell>
              <TableCell align="center">Vrijeme polaska:</TableCell>
              <TableCell align="center">Datum dolaska:</TableCell>
              <TableCell align="center">Vrijeme dolaska:</TableCell>
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
                <TableCell align="center">{row.start_time}</TableCell>
                <TableCell align="center">{row.end_date}</TableCell>
                <TableCell align="center">{row.end_time}</TableCell>
                <TableCell align="center">{row.start_position}</TableCell>
                <TableCell align="center">{row.end_position}</TableCell>
                <TableCell align="center">{row.name_of_driver}</TableCell>
                <TableCell align="center">{row.num_pass}</TableCell>
                <TableCell align="center">{row.acc}</TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
        </div>
    )
}

export default travelApplication;