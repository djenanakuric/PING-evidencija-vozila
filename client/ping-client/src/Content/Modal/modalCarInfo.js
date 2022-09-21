 import './style.css';

 const modalCarInfo = (show = {show}) =>  {
    return (
        <div className={`modal ${show.show ? 'show' : ''}` }>
            <div className='modal-content'>
            <form action="/vozilo">
            <div className="form-group">
            <div className='form-item'>
                <label for="nameOfCar">Marku vozila:</label>
                <input type="nameOfCar" className="car-name" id="car-name"/>
            </div>

            <div className='form-item'>
                <label for="typeOfCar">Tip:</label>
                <input type="typeOfCar" className="car-type" id="car-type"/>
            </div>   
            </div>

            <div class="form-group">
            <div className='form-item'>
              <label for="numOfSas">Broj šasije:</label>
                <input type="numOfSas" className="car-sas" id="car-sas"/>  
            </div>
            <div className='form-item'>
               <label for="numOfMotor">Broj motora:</label>
                <input type="numOfMot" className="car-num" id="car-num"/> 
            </div>       
            </div>

            <div className="form-group">
                <div className = 'form-item'>
                <label for="fuel">Vrsta goriva:</label>
                <select name="action-type" id="fuel">
                        <option value="disel">Dizel</option>
                        <option value="benzin">Benzin</option>
                        <option value="plin">Plin</option>
                </select>
                </div>
                
                <div className='form-item'>
                <label for="poweOfMotor">Snaga motora:</label>
                <input type="poweOfMotor" className="car-power" id="car-power"/>
                <select name="action-type" id="power">
                        <option value="kw">kW</option>
                        <option value="ks">ks</option>
                    </select>
                </div>
                    
            </div>
            
            <div className="form-group">
            <label for="yearOfCar">Godina proizvodnje:</label>
            <input type="yearOfCar" className="car-year" id="car-year"/>
            </div>
            </form>  
        <div className='btn-acc'>
          <button onClick={show.onClose} type="submit" class="btn btn-default">Spremiti</button>
            <button onClick={show.onClose} type="close" class="btn btn-default">Zatvori</button>  
        </div>
            
            </div>
          
        </div>
        
    )
 }

 export default modalCarInfo;