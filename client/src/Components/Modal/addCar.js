import Modal from 'react-modal';
import { Form, Button, Col, Row, InputGroup } from 'react-bootstrap';
import { addCar, updateCar } from '../../Redux/cars';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const AddCarModal = ({ isOpen, setIsOpen, data }) => {
  const closeModal = () => {
    setIsOpen(false);
  };

  const dispatch = useDispatch();
  const [carModel, setCarModel] = useState(data !== null ? data.CarModel : '');
  const [carType, setCarType] = useState(data !== null ? data.CarType : '');
  const [carNumber, setCarNumber] = useState(
    data !== null ? data.CarNumber : ''
  );
  const [motorNumber, setMotorNumber] = useState(
    data !== null ? data.MotorNumber : ''
  );
  const [motorPower, setMotorPower] = useState(
    data !== null ? data.MotorPower : ''
  );
  const [motorPowerUnit, setMotorPowerUnit] = useState(
    data !== null ? data.MotorPowerUnit : ''
  );
  const [flue, setFlue] = useState(data !== null ? data.Flue : '');
  const [yearManufactured, setYearManufactured] = useState(
    data !== null ? data.YearManufactured : 1911
  );

  const onSaveCarClicked = (event) => {
    const body = {
      CarModel: carModel,
      CarType: carType,
      CarNumber: carNumber,
      MotorNumber: motorNumber,
      MotorPower: motorPower,
      MotorPowerUnit: motorPowerUnit,
      Flue: flue,
      YearManufactured: yearManufactured,
    };

    if(data.id !== null) dispatch(updateCar({id: data.Id, body}));
    else dispatch(addCar(body));

    event.preventDefault();
  };

  return (
    <div>
      <Modal isOpen={isOpen} onRequestClose={closeModal} appElement={document.getElementById('root')}>
        <div>
          <h4>
            {data !== null && data.Id !== null
              ? 'Izmjeni vozilo'
              : 'Dodaj vozilo'}
          </h4>
        </div>
        <div>
          <Form onSubmit={(e) => onSaveCarClicked()}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="CarModel" xs={4}>
                <Form.Label>Marka vozila</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Unesite marku vozila"
                  onChange={(e) => setCarModel(e.target.value)}
                  required
                  value={carModel}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="CarType" xs={4}>
                <Form.Label>Tip</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Unesite tip vozila"
                  onChange={(e) => setCarType(e.target.value)}
                  required
                  value={carType}
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="CarNumber" xs={4}>
                <Form.Label>Broj šasije</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Unesite broj šasije"
                  onChange={(e) => setCarNumber(e.target.value)}
                  required
                  value={carNumber}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="MotorNumber" xs={4}>
                <Form.Label>Broj motora</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Unesite broj motora"
                  onChange={(e) => setMotorNumber(e.target.value)}
                  required
                  value={motorNumber}
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="MotorPower" xs={2}>
                <Form.Label>Snaga motora</Form.Label>
                <InputGroup>
                  <Form.Control
                    type="number"
                    placeholder="Unesite snagu motora"
                    onChange={(e) => setMotorPower(e.target.value)}
                    required
                    value={motorPower}
                  />
                  <Form.Select
                    onChange={(e) => setMotorPowerUnit(e.target.value)}
                  >
                    <option value="kW">kW</option>
                    <option value="KS">KS</option>
                  </Form.Select>
                </InputGroup>
              </Form.Group>

              <Form.Group as={Col} controlId="Flued" xs={3}>
                <Form.Label>Vrsta goriva</Form.Label>
                <Form.Select onChange={(e) => setFlue(e.target.value)}>
                  <option>Odaberite vrstu goriva</option>
                  <option value="Dizel">Dizel</option>
                  <option value="Benzin">Benzin</option>
                  <option value="Plin">Plin</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="YearManufactured" xs={3}>
                <Form.Label>Godina proizvodnje</Form.Label>
                <Form.Control
                  type="number"
                  min="1900"
                  max="2022"
                  placeholder="Unesite godinu proizvodnje"
                  onChange={(e) => setYearManufactured(e.target.value)}
                  required
                  value={yearManufactured}
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

export default AddCarModal;
