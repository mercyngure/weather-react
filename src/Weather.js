import React, {useState} from "react";
import './weather.css';
import FormattedDate from './FormattedDate';
import axios from "axios";
import {Bars } from 'react-loader-spinner';


export default function Weather(props){
const[weatherData,setWeatherData]=useState({ready:false});

function handleResponse(response){
  console.log( response.data);
setWeatherData({
  ready:true,
  temperature:response.data.main.temp,
  humidity:response.data.main.humidity,
  description:response.data.weather[0].description,
  wind:response.data.wind.speed,
  date: new Date(response.data.dt*1000),
  city:response.data.name
});
}
if (weatherData.ready){

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
        
        <h1> {weatherData.city}</h1>
      <ul className="ml-2">
        <li>
        <FormattedDate date={weatherData.date}/>
        </li>
        <li>{weatherData.description}</li>
        </ul>
      <div className="row d-flex">
        <div className="col">
       <span className ="weather-temperature">🌧️ {Math.round(weatherData.temperature)}</span> <span className="weather-unit">°C </span>
          </div>
          <div className="col">
            <ul>
              <li>Humidity:{weatherData.humidity}%</li>
              <li>Wind:{weatherData.wind} km/h</li>
              </ul>
              </div>
              </div>
      </div>
        <footer>
        This project was coded by < a href="https://github.com/mercyngure">Mercy ngure</a> and is<a href="https://github.com/mercyngure/weather-react"> open-sourced on GitHub</a> and hosted on <a href="https://weather-project-react-bobo.netlify.app/">Netlify</a>
      </footer>
      </div>
  ) } 
    else {const apikey="25059c638022708210dd5ffc98b770ff";
       let apiurl=`https://api.openweathermap.org/data/2.5/weather?q=${props.defaultcity}&appid=${apikey}`;
       axios.get(apiurl).then(handleResponse);
       return <Bars
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        />;
            
       }
      }