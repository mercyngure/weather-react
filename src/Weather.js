import React, {useState} from "react";
import './weather.css';
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import {Bars } from 'react-loader-spinner';



export default function Weather(props){
const[weatherData,setWeatherData]=useState({ready:false});
const[city, setCity]=useState(props.defaultcity);

function handleResponse(response){
  console.log( response.data);
setWeatherData({
  ready:true,
  temperature:response.data.main.temp,
  humidity:response.data.main.humidity,
  description:response.data.weather[0].description,
  wind:response.data.wind.speed,
  date: new Date(response.data.dt*1000),
  icon:response.data.weather[0].icon,
  city:response.data.name
});
}
 function search(){
  const apikey="25059c638022708210dd5ffc98b770ff";
  let apiurl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
  axios.get(apiurl).then(handleResponse);
 }

 function handleSubmit(event){
  event.preventDefault();
  search();
 }
function handleCityChange(event){
 setCity(event.target.value);
}

if (weatherData.ready){

  return(
    <div className="container mt-5">
    <div className="Weather mt-s ml-5 ">
      <form onSubmit={handleSubmit}>
        <div className="row d-flex mt-3 ml-3">
         < div className="col-9">
        <input type="search" class="search-form"  placeholder="Enter a city" onChange={handleCityChange}/>
        </div>
        <div className="col-3">
       <button class="btn btn-primary w-200">search</button>
       </div>
       </div>
       </form>
       <WeatherInfo data={weatherData}/>
       </div>
       <footer>
          This project was coded by{" "}
          <a
            href="https://www.delac.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            MERCY NGURE
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/wecodeschool/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://suspicious-beaver-111c4d.netlify.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
       </div>
       )
       }
    else{
      search();
    
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