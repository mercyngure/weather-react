import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';

export default function WeatherIcon(props){
    if(props.code==="0id"){
    return(
    <ReactAnimatedWeather
    icon='CLEAR_DAY'
    color='Black'
    size='64'
    animate='true'
    />

    );}
    else{
     return(
    <ReactAnimatedWeather
    icon='CLEAR_NIGHT'
    color='Red'
    size='64'
    animate='true'
    />
     );
    }
}