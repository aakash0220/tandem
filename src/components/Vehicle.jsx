import React, { useState, useEffect } from 'react';
import data from '../data.json'; //or fetch from api
import Map from './Map';
import { processGPSData } from '../utils/getStoppages';
    
const Vehicle = () => {
    const [stoppages, setStoppages] = useState([]);

    const handleKey = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleClick();
        }
    };

    const handleClick = (e) => {
        let threshold = parseInt(document.querySelector('#thres-input').value)
        console.log(typeof threshold, threshold)
        if (!Number.isNaN(threshold)) setStoppages(processGPSData(data, threshold));
        else alert('Invalid input: type number only!!')
    }
    return (
        <div className="container mb-4 px-5 " style={{height:'700px'}}>
            <div className="row h-100 border rounded-3 ">
                <div className="col-12">
                    <div className="row border-bottom" style={{height:'5%'}}>
                        <p className='my-auto'>Leaflet</p>
                    </div>
                    <div className="row border-bottom" style={{height:'80%'}}>
                        <Map data={data} stoppages={stoppages}/>
                    </div>
                    <div className="row" style={{height:'15%'}}>
                        <div className='my-auto'>
                            <div className="input-group mb-3">
                                <input onKeyDown={handleKey} id='thres-input' type="number" className="form-control" placeholder='Enter stoppage threshold in minutes' aria-label="Recipient's username" aria-describedby="button-addon2"></input>
                                <button onClick={handleClick} className="btn btn-outline-info" type="button" id="button-addon2">submit</button>
                            </div>
                            <span className="bg-info text-white px-3 py-2 rounded-3">Total no. of stoppage found : <span className=' fw-bold '>{stoppages.length}</span></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Vehicle