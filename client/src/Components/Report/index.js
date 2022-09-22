import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Input } from '@mui/material';
import { Form, Button, Col, Row } from 'react-bootstrap';

function createData(name_car, start_date, start_time, end_date, end_time) {
  return { name_car, start_date, start_time, end_date, end_time };
}

const rows = [
  createData('Citroen C3', '12.04.2022', '12:00', '12.04.2022', '18:00'),
];

const report = () => {
  return (
    <div>
      <div>
        <h2>Izvjestaj</h2>
      </div>
      <div>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="StartDate" xs={3}>
              <Form.Label>Datum polaska</Form.Label>
              <Form.Control type="datetime-local" />
            </Form.Group>

            <Form.Group as={Col} controlId="EndDate" xs={3}>
              <Form.Label>Datum dolaska</Form.Label>
              <Form.Control type="datetime-local" />
            </Form.Group>

            <Form.Group as={Col} controlId="CarModel" xs={3}>
              <Form.Label>Vozilo</Form.Label>
              <Form.Select>
                <option>Odaberite vozilo</option>
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridYearManufacture" xs={3}>
              <Button variant="primary" style={{margin: "10%"}}>Spremi</Button>
            </Form.Group>
          </Row>
        </Form>
      </div>

      {/* <form>
        <div className="form-group">
          <div className="form-item">
            <label htmlFor="startDate">Polazak:</label>
            <input type="datetime-local" className="starDate" id="startDate" />
          </div>
        </div>
        <div class="form-group">
          <div className="form-item">
            <label htmlFor="endDate">Dolazak:</label>
            <input type="datetime-local" className="endDate" id="endDate" />
          </div>
        </div>
        <div class="form-group">
          <div className="form-item">
            <label htmlFor="endDate">Datum i vrijeme dolaska:</label>
            <select name="action-type" id="evident">
              <option value="evidentiran">Evidentiran</option>
              <option value="potvrdjen">Potvrđen</option>
              <option value="zavrsen">Završen</option>
              <option value="odbijen">Odbijen</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <div className="form-item">
            <input type="submit" value="Submit" />
          </div>
        </div>
      </form> */}

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
  );
};

export default report;
