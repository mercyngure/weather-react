import React from "react";
import FormattedDate from './FormattedDate';

export default function WeatherInfo(props){
    return(
        <div className="weatherInfo">
             
        <h1> {props.data.city}</h1>
      <ul className="ml-2">
        <li>
        <FormattedDate date={props.data.date}/>
        </li>
        <li>{props.data.description}</li>
        </ul>
      <div className="row d-flex">
        <div className="col">
       <span className ="weather-temperature">🌧️ {Math.round(props.data.temperature)}</span> <span className="weather-unit">°C </span>
          </div>
          <div className="col">
            <ul>
              <li>Humidity:{props.data.humidity}%</li>
              <li>Wind:{props.data.wind} km/h</li>
              </ul>
              </div>
              </div>
        <footer>
        This project was coded by < a href="https://github.com/mercyngure">Mercy ngure</a> and is<a href="https://github.com/mercyngure/weather-react"> open-sourced on GitHub</a> and hosted on <a href="https://weather-project-react-bobo.netlify.app/">Netlify</a>
      </footer>
      </div>
    );
}
