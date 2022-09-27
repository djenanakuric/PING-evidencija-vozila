import { useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import {selectReportsList} from '../../Redux/reports'

const ReportsTable = () => {
 const reports = useSelector(selectReportsList);
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th align="center">Naziv vozila</th>
            <th align="center">Datum i vrijeme polaska</th>
            <th align="center">Datum i vrijeme povratka</th>
            <th align="center">Status</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report) => (
            <tr key={reports.indexOf(report)}>
              <td align="center">{report.Car}</td>
              <td align="center">{new Date(report.StartDate).toLocaleString()}</td>
              <td align="center">{new Date(report.EndDate).toLocaleString()}</td>
              <td align="center">{report.Status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ReportsTable;