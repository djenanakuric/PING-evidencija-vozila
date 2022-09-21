import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function createData(name_car, start_date, start_time, end_date, end_time) {
    return { name_car, start_date, start_time, end_date, end_time };
  }

const rows = [
createData('Citroen C3','12.04.2022', '12:00', '12.04.2022', '18:00')
]


const report = () => {
    return(
        <div>
            <h1>Izvjestaj</h1>
            <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Naziv vozila: </TableCell>
              <TableCell align="center">Datum polaska:</TableCell>
              <TableCell align="center">Vrijeme polaska:</TableCell>
              <TableCell align="center">Datum dolaska:</TableCell>
              <TableCell align="center">Vrijeme dolaska:</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name_car}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name_car}
                </TableCell>
                <TableCell align="center">{row.start_date}</TableCell>
                <TableCell align="center">{row.start_time}</TableCell>
                <TableCell align="center">{row.end_date}</TableCell>
                <TableCell align="center">{row.end_time}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
        </div>
    )
}

export default report;