import Modal from 'react-modal';
import { Form, Button, Col, Row, InputGroup } from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

import { ADD_CARS } from '../../Redux/CarsSlice';

const AddCarModal = ({ isOpen, setIsOpen }) => {
  const closeModal = () => {
    setIsOpen(false);
  };

  const dispatch = useDispatch();
  const auta = useSelector((state) => state.cars);
  const [carModel, setCarModel] = useState('');
  const [carType, setCarType] = useState('');
  const [carNumber, setCarNumber] = useState('');
  const [motorNumber, setMotorNumber] = useState('');
  const [motorPower, setMotorPower] = useState('');
  const [flued, setFlued] = useState('');
  const [yearManufacture, setYearManufacture] = useState('');

  const onCarModelChange = (e) => setCarModel(e.targer.value);
  const onCarTypeChange = (e) => setCarType(e.targer.value);
  const onCarNumberChange = (e) => setCarNumber(e.targer.value);
  const onMotorNumberChange = (e) => setMotorNumber(e.targer.value);
  const onMotorPowerChange = (e) => setMotorPower(e.targer.value);
  const onFluedChange = (e) => setFlued(e.targer.value);
  const onYearManufactureChange = (e) => setYearManufacture(e.targer.value);

  const onSaveCarClicked = () => {
    if (
      carModel &&
      carType &&
      carNumber &&
      motorNumber &&
      motorPower &&
      flued &&
      yearManufacture
    ) {
      dispatch(
        ADD_CARS({
          carModel,
          carType,
          carNumber,
          motorNumber,
          motorPower,
          flued,
          yearManufacture,
        })
      );

      setCarModel('');
      setCarType('');
      setCarNumber('');
      setMotorNumber('');
      setMotorPower('');
      setFlued('');
      setYearManufacture('');
    }
    console.log(auta);
  };
  return (
    <div>
      <Modal isOpen={isOpen} onRequestClose={closeModal}>
        <div>
          <h4>Dodaj vozilo</h4>
        </div>
        <div>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="CarModel" xs={4}>
                <Form.Label>Marka vozila</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Unesite marku vozila"
                  onChange={onCarModelChange}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="CarType" xs={4}>
                <Form.Label>Tip</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Unesite tip vozila"
                  onChange={onCarTypeChange}
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="CarNumber" xs={4}>
                <Form.Label>Broj šasije</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Unesite broj šasije"
                  onChange={onCarNumberChange}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="MotorNumber" xs={4}>
                <Form.Label>Broj motora</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Unesite broj motora"
                  onChange={onMotorNumberChange}
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
                    onChange={onMotorPowerChange}
                  />
                  <Form.Select>
                    <option value="kW">kW</option>
                    <option value="KS">KS</option>
                  </Form.Select>
                </InputGroup>
              </Form.Group>

              <Form.Group as={Col} controlId="Flued" xs={3}>
                <Form.Label>Vrsta goriva</Form.Label>
                <Form.Select  onChange={onFluedChange}>
                  <option>Odaberite vrstu goriva</option>
                  <option value="Dizel">Dizel</option>
                  <option value="Benzin">Benzin</option>
                  <option value="Plin">Plin</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="YearManufacture" xs={3}>
                <Form.Label>Godina proizvodnje</Form.Label>
                <Form.Control
                  type="number"
                  min="1900"
                  max="2022"
                  placeholder="Unesite godinu proizvodnje"
                  onChange={onYearManufactureChange}
                />
              </Form.Group>
            </Row>

            <Row>
              <Form.Group as={Col} controlId="SaveAndClose" xs={3}>
                <Button variant="primary" onClick={onSaveCarClicked}>
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
