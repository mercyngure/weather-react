import React from "react";
import './weather.css';

function Weather(){
  return(
    <div className="container mt-5">
    <div className="Weather mt-s ml-5 ">
      <form>
        <div className="row d-flex mt-3 ml-3">
         < div className="col-9">
        <input type="search" class="search-form"  placeholder="Enter a city"/>
        </div>
        <div className="col-3">
       <button class="btn btn-primary">search</button>
       </div>
       </div>
       </form>
        
        <h1> New York</h1>
      <ul className="ml-2">
        <li>Friday 12:15</li>
        <li>Clear Sky</li>
        </ul>
      <div className="row d-flex">
        <div className="col">
       <span className ="weather-temperature">🌧️ 2</span> <span className="weather-unit">°C </span>
          </div>
          <div className="col">
            <ul>
              <li>Humidity: 48%</li>
              <li>Wind: 5.14 km/h</li>
              </ul>
              </div>
              </div>
      </div>
      <footer>
        This project was coded by < a href="https://github.com/mercyngure">Mercy ngure</a> and is<a href="https://github.com/mercyngure/weather-react"> open-sourced on GitHub</a> and hosted on <a href="htttps-mercy ngure">Netlify</a>
      </footer>
      </div>
  );
     
     

} 
export default Weather;