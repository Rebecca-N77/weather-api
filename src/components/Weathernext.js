import React, { Component } from "react";
import { render } from "react-dom";
import "./weather.css"
import storm from "../img/weather-icons/storm.svg" // less than 300
import drizzle from "../img/weather-icons/drizzle.svg" // between 300 and 499
import rain from "../img/weather-icons/rain.svg" // between 500 and 599
import snow from "../img/weather-icons/snow.svg" // between 600 and 699
import fog from "../img/weather-icons/fog.svg" // between 700 and 799
import clear from "../img/weather-icons/clear.svg" // equal 800
import pcloudy from "../img/weather-icons/partlycloudy.svg" // equal 801
import mcloudy from "../img/weather-icons/mostlycloudy.svg" //  between 801 and 805

export default class WeatherNext extends Component {
  constructor(props){
    super(props)
   this.state={
     


   }
    
  }


// if  data has been gotten from the parent ( the user searched successfuly) then it will list the weather by the hour
  render() {
   
   return <div style= {{backgroundColor:this.props.color }} className ="Flexcontainer">
{this.props.data && this.props.data.map((info , i)=> {

if (i > 0){
  let x = info.id
  let y;
  switch(true){
    case (x< 300):
      y = storm
     
        break
    case (x >= 300 && x <= 500):
      y = drizzle
      break
    case (x >= 500 && x <= 600):
      y = rain
      break
    case ( x >= 600 && x <= 700):
      y = snow
      break
    case (x >= 700 && x <= 800):
      y = fog
      break
    case (x === 800):
      y = clear
      break
    case ( x === 801):
      y= mcloudy
      break
    case ( x >= 801 && x <= 805):
      y = pcloudy
     break
      
     
      
    
  }
  return  <div style={{backgroundColor: this.props.color}} key={i}>
     <h1>{info.time} :00 </h1>
     <img className= "imagenext" src={y} alt=""  ></img>
     
     <h2>  {info.tempx} C</h2>  </div>
}
 
})}
     
   </div>
  
      
      
     
    }
  
  
   
  
}

