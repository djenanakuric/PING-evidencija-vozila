import { Form, Row, Col, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { loadCars, selectCarsList } from '../../Redux/cars';
import { loadReports } from '../../Redux/reports';
import ReportsTable from '../Table/reportsTable';

const Report = () => {
  const cars = useSelector(selectCarsList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCars());
  }, [dispatch]);

  const [carId, setCarId] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const onSaveReportsClicked = (event) => {
    dispatch(loadReports({ carId, startDate, endDate }));
    event.preventDefault();
  };
  return (
    <div>
      <div>
        <h2>Izvještaj</h2>
      </div>
      <div>
        <Form onSubmit={(event) => onSaveReportsClicked(event)}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="StartDate" xs={3}>
              <Form.Label>Datum polaska</Form.Label>
              <Form.Control
                type="datetime-local"
                onChange={(e) => setStartDate(e.target.value)}
                required
                value={startDate}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="EndDate" xs={3}>
              <Form.Label>Datum dolaska</Form.Label>
              <Form.Control
                type="datetime-local"
                onChange={(e) => setEndDate(e.target.value)}
                required
                value={endDate}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="CarModel" xs={3}>
              <Form.Label>Vozilo</Form.Label>
              <Form.Select
                onChange={(e) => setCarId(e.target.value)}
                value={carId}
              >
                <option value={''}>Sva vozila</option>
                {cars.map((car) => (
                  <option key={car.Id} value={car.Id}>
                    {car.CarModel}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col} controlId="buttomSave" xs={3}>
              <Button variant="primary" style={{ margin: '10%' }} type="submit">
                Spremi
              </Button>
            </Form.Group>
          </Row>
        </Form>
      </div>
      <div>
        <ReportsTable />
      </div>
    </div>
  );
};

export default Report;
