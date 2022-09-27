import Modal from 'react-modal';
import { Form, Button, Col, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {checkIfTravelApplicationExist} from '../../Redux/Api'
import {
  addTravelApplication,
} from '../../Redux/travelApplications';
import { loadCars, selectCarsList } from '../../Redux/cars';

const AddTravelApplicationModal = ({
  isOpen,
  setIsOpen,
  selectedCarId = '',
}) => {
  const closeModal = () => {
    setIsOpen(false);
    setCarId('');
    setEndDate('');
    setStartDate('');
    setStartDate('');
    setEndDate('')
    setDriver('')
    setNumberOfPassengers(0);
    setIsExist(false);
  };
  const cars = useSelector(selectCarsList);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCars());
  }, [dispatch]);

 const [carId, setCarId] = useState(selectedCarId);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [startPoint, setStartPoint] = useState('');
  const [endPoint, setEndPoint] = useState('');
  const [driver, setDriver] = useState('');
  const [numberOfPassengers, setNumberOfPassengers] = useState(0);
  const [isExist, setIsExist] = useState(false)


  useEffect(() => {
    const fetchData = async () => {
      if(carId !== '' && startDate !== '' && endDate !== '') {
        const response = await checkIfTravelApplicationExist(startDate, endDate, carId)
        setIsExist(response.data.isExists)
      }
    }
    fetchData().catch(console.error);

  },[carId, startDate, endDate])

  const onSaveTravelApplicationClicked = () => {
    const body = {
      CarId: carId,
      StartDate: startDate,
      EndDate: endDate,
      StartPoint: startPoint,
      EndPoint: endPoint,
      Driver: driver,
      NumberOfPassengers: numberOfPassengers,
      Status: 'Evidentiran',
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
          <Form onSubmit={() => onSaveTravelApplicationClicked()}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="CarModel" xs={8}>
                <Form.Label>Vozilo</Form.Label>
                <Form.Select onChange={(e) => setCarId(e.target.value)}
                  required
                  value={carId}>
                  <option>Odaberite vozilo</option>
                  {cars.map((car) => (
                    <option key={car.Id} value={car.Id}>
                      {`${car.CarModel} ${car.CarType}`}
                    </option>
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
                <Form.Control
                  type="text"
                  placeholder="Unesite destinaciju"
                  onChange={(e) => setEndPoint(e.target.value)}
                  required
                  value={endPoint}
                />
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
            {isExist && <div className="alert alert-danger" role="alert">
              Vozilo je već rezervisano
            </div>}
            <Row>
              <Form.Group as={Col} controlId="SaveAndClose" xs={3}>
                <Button variant="primary" type="submit" disabled={isExist}>
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
