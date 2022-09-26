import {useState} from 'react';
import ModalTravelApplication from '../Modal/addTravelApplication';
import Button from 'react-bootstrap/Button';
import TravelApplicationsTable from '../Table/travelApplicationsTable';

const TravelApplication = () => {
  const [isOpen, setIsOpen] = useState(false);
    return(
      <div>
        <div>
          <h1>Informacije o putnim nalozima</h1>
        </div>
        <div>
          <Button onClick={() => {setIsOpen(true)}}>Dodaj putni nalog</Button>
          <ModalTravelApplication isOpen={isOpen} setIsOpen={setIsOpen}/>
        </div>
        <div>
          <TravelApplicationsTable />
        </div>
      </div>
    )
}

export default TravelApplication;