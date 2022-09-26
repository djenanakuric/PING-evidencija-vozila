import Modal from 'react-modal';
import { Form, Button, Col, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTravelApplication } from '../../Redux/travelApplications';
import { loadCars, selectCarsList } from '../../Redux/cars';

const AddTravelApplicationModal = ({ isOpen, setIsOpen }) => {
  const closeModal = () => {
    setIsOpen(false);
  };
  const cars = useSelector(selectCarsList);

  const today = new Date();
  today.setSeconds(0, 0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCars())
  }, [dispatch]); 

  const [carId, setCarId] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [startPoint, setStartPoint] = useState('');
  const [endPoint, setEndPoint] = useState('');
  const [driver, setDriver] = useState('');
  const [numberOfPassengers, setNumberOfPassengers] = useState('');
  const [status, setStatus] = useState('evidentiran');

  const onSaveTravelApplicationClicked = (event) => {
    const body = {
      CarId: carId,
      StartDate: startDate,
      EndDate: endDate,
      StartPoint: startDate,
      EndPoint: endPoint,
      Driver: driver,
      NumberOfPassengers: numberOfPassengers,
      Status: status,
    };
    
    dispatch(addTravelApplication(body));
  };

  

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        appElement={document.getElementById('root')}
      >
        <div>
          <h4>Dodaj putni nalog</h4>
        </div>
        <div>
          <Form onSubmit={(e) => onSaveTravelApplicationClicked()}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="CarModel" xs={8}>
                <Form.Label>Vozilo</Form.Label>
                <Form.Select onChange={(e) => setCarId(e.target.value)}
                  required
                  value={carId}>
                  <option>Odaberite vozilo</option>
                  {cars.map((car) => (
                    <option key={car.Id} value={car.Id}>{car.CarModel}</option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="StartDate" xs={4}>
                <Form.Label>Datum polaska</Form.Label>
                <Form.Control
                  type="datetime-local"
                  onChange={(e) => setStartDate(e.target.value)}
                  required
                  value={startDate}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="EndDate" xs={4}>
                <Form.Label>Datum dolaska</Form.Label>
                <Form.Control type="datetime-local" onChange={(e) => setEndDate(e.target.value)}
                  required
                  value={endDate}/>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="Start" xs={4}>
                <Form.Label>Polazak</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Unesite mjesto polaska"
                  onChange={(e) => setStartPoint(e.target.value)}
                  required
                  value={startPoint}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="Finish" xs={4}>
                <Form.Label>Destinacija</Form.Label>
                <Form.Control type="text" placeholder="Unesite destinaciju" onChange={(e) => setEndPoint(e.target.value)}
                  required
                  value={endPoint}/>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="DriverName" xs={5}>
                <Form.Label>Ime i prezime</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Unesite ime i prezime vozaca"
                  onChange={(e) => setDriver(e.target.value)}
                  required
                  value={driver}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="NumOfPass" xs={3}>
                <Form.Label>Broj putnika</Form.Label>
                <Form.Control
                  type="number"
                  min="0"
                  placeholder="Unesite broj putnika"
                  onChange={(e) => setNumberOfPassengers(e.target.value)}
                  required
                  value={numberOfPassengers}
                />
              </Form.Group>
            </Row>

            <Row>
              <Form.Group as={Col} controlId="SaveAndClose" xs={3}>
                <Button variant="primary" type="submit">
                  Spremi
                </Button>
                <Button variant="danger" onClick={closeModal}>
                  Zatvori
                </Button>
              </Form.Group>
            </Row>
          </Form>
        </div>
      </Modal>
    </div>
  );
};

export default AddTravelApplicationModal;
