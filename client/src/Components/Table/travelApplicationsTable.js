import Form from 'react-bootstrap/Form';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateTravelApplication } from '../../Redux/travelApplications';

import { Table } from 'reactstrap';

import {
  selectTravelApplicationList,
  loadTravelApplications,
} from '../../Redux/travelApplications';

const TravelApplicationsTable = () => {
  const travelApplications = useSelector(selectTravelApplicationList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTravelApplications());
  }, [dispatch]);

  const ChangeStatus = ({ status, id }) => {
    dispatch(updateTravelApplication({ id, data: { Status: status } }));
  };
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th align="center">Datum i vrijeme polaska</th>
            <th align="center">Datum i vrijeme dolaska</th>
            <th align="center">Polazak</th>
            <th align="center">Dolazak</th>
            <th align="center">Ime i prezime vozača</th>
            <th align="center">Broj putnika</th>
            <th align="center">Status</th>
          </tr>
        </thead>
        <tbody>
          {travelApplications.map((tApp) => (
            <tr key={tApp.Id}>
              <td align="center">{new Date(tApp.StartDate).toLocaleString()}</td>
              <td align="center">{new Date(tApp.EndDate).toLocaleString()}</td>
              <td align="center">{tApp.StartPoint}</td>
              <td align="center">{tApp.EndPoint}</td>
              <td align="center">{tApp.Driver}</td>
              <td align="center">{tApp.NumberOfPassengers}</td>
              <td align="center">
                <Form.Select
                  disabled = {(tApp.Status === 'Odbijen' || tApp.Status === 'Završen' || tApp.Status === 'Automatski završen') }
                  onChange={(e) =>
                    ChangeStatus({ status: e.target.value, id: tApp.Id })
                  }
                  value={tApp.Status}
                >
                  <option value="Automatski završen" disabled>Automatski završen</option>
                  <option value="Evidentiran">Evidentiran</option>
                  <option value="Potvđen">Potvđen</option>
                  <option value="Odbijen">Odbijen</option>
                  <option value="Završen">Završen</option>
                </Form.Select>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TravelApplicationsTable;
