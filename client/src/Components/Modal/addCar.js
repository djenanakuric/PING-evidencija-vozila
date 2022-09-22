import Modal from 'react-modal';
import { Form, Button, Col, Row, InputGroup } from 'react-bootstrap';

const AddCarModal = ({ isOpen, setIsOpen }) => {
  const closeModal = () => {
    setIsOpen(false);
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
              <Form.Group as={Col} controlId="formGridCarModel" xs={4}>
                <Form.Label>Marka vozila</Form.Label>
                <Form.Control type="text" placeholder="Unesite marku vozila" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCarType" xs={4}>
                <Form.Label>Tip</Form.Label>
                <Form.Control type="text" placeholder="Unesite tip vozila" />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCarNumber" xs={4}>
                <Form.Label>Broj šasije</Form.Label>
                <Form.Control type="text" placeholder="Unesite broj šasije" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridMotorNumber" xs={4}>
                <Form.Label>Broj motora</Form.Label>
                <Form.Control type="text" placeholder="Unesite broj motora" />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridMotorPower" xs={2}>
                <Form.Label>Snaga motora</Form.Label>
                <InputGroup>
                  <Form.Control
                    type="number"
                    placeholder="Unesite snagu motora"
                  />
                  <Form.Select>
                    <option value="kW">kW</option>
                    <option value="KS">KS</option>
                  </Form.Select>
                </InputGroup>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridFlued" xs={3}>
                <Form.Label>Vrsta goriva</Form.Label>
                <Form.Select>
                  <option>Odaberite vrstu goriva</option>
                  <option value="Dizel">Dizel</option>
                  <option value="Benzin">Benzin</option>
                  <option value="Plin">Plin</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridYearManufacture" xs={3}>
                <Form.Label>Godina proizvodnje</Form.Label>
                <Form.Control
                  type="number"
                  min="1900"
                  max="2022"
                  placeholder="Unesite godinu proizvodnje"
                />
              </Form.Group>
            </Row>

            <Row>
              <Form.Group as={Col} controlId="formGridYearManufacture" xs={3}>
                <Button variant="primary">Spremi</Button>
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
