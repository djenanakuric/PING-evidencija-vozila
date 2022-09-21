import './style.css';


 const ModalTravelApplication = (show = {show}) =>  {
    return (
        <div className={`modal ${show.show ? 'show' : ''}` }>
            <div className='modal-content'>
            <form action="/puni-nalog">
            <div className="form-group">
            <div className='form-item'>
                <label htmlFor="startDate">Datum i vrijeme polaska:</label>
                <input type='datetime-local' className="starDate" id="startDate"/>
            </div>  
            </div>
            <div class="form-group">
            <div className='form-item'>
                <label htmlFor="endDate">Datum i vrijeme dolaska:</label>
                <input type='datetime-local' className="endDate" id="endDate"/>  
            </div>     
            </div>

            <div className="form-group">
                <div className = 'form-item'>
                <label for="startPlace">Mjesto polaska:</label>
                <input type="text" className="start-place" id="startPlace"/>
                </div>
                
                <div className='form-item'>
                <label for="endPlace">Mjesto dolaska:</label>
                <input type="text" className="end-place" id="endPlace"/>
                </div>   
            </div>
            
            <div className="form-group">
            <div className = 'form-item'>
            <label for="driverName">Ime i prezime vozaca:</label>
            <input type="text" className="driver-name" id="driverName"/>
            </div>
            <div className = 'form-item'>
            <label for="passNum">Broj putnika</label>
            <input type="text" className="pass-num" id="passNum"/>
            </div>
            
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

 export default ModalTravelApplication;