import Modal from 'react-modal';
import { Form, Button, Col, Row } from 'react-bootstrap';

const AddTravelApplicationModal = ({ isOpen, setIsOpen }) => {
  const closeModal = () => {
    setIsOpen(false);
  };
  const today = new Date();
  today.setSeconds(0,0);
  return (
    <div>
      <Modal isOpen={isOpen} onRequestClose={closeModal}>
        <div>
          <h4>Dodaj putni nalog</h4>
        </div>
        <div>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="CarModel" xs={8}>
                <Form.Label>Vozilo</Form.Label>
                <Form.Select>
                  <option>Odaberite vozilo</option>
                </Form.Select>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCarNumber" xs={4}>
                <Form.Label>Datum polaska</Form.Label>
                <Form.Control type="datetime-local"/>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridMotorNumber" xs={4}>
                <Form.Label>Datum dolaska</Form.Label>
                <Form.Control type="datetime-local"/>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="Start" xs={4}>
                <Form.Label>Polazak</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Unesite mjesto polaska"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="Finish" xs={4}>
                <Form.Label>Destinacija</Form.Label>
                <Form.Control type="text" placeholder="Unesite destinaciju" />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridMotorPower" xs={5}>
                <Form.Label>Ime i prezime</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Unesite ime i prezime vozaca"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridFlued" xs={3}>
                <Form.Label>Broj putnika</Form.Label>
                <Form.Control
                  type="number"
                  min="0"
                  placeholder="Unesite broj putnika"
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

export default AddTravelApplicationModal;
