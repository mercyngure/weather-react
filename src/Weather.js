import React from "react";
import './weather.css';

function Weather(){
  return(
    <div className="Weather">
      <form>
        <div className="row d-flex">
         < div className="col-9">
        <input type="search" class="search-form"  placeholder="Enter a city"/>
        </div>
        <div className="col-3">
       <button class="btn-btn primary">search</button>
       </div>
       </div>
       </form>
        
        <h1> New York</h1>
      <ul>
        <li>Friday 12:15</li>
        <li>Clear Sky</li>
        </ul>
      <div className="row d-flex">
        <div className="col">
        -2°C
          </div>
          <div className="col">
            <ul>
              <li>Humidity: 48%</li>
              <li>Wind: 5.14 km/h</li>
              </ul>
              </div>
              </div>
      </div>
  );

} 
export default Weather;