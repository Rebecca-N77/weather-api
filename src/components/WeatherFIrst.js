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

export default class WeatherFirst extends Component {
  constructor(props){
    super(props)
   this.state={
     
  

   }
    
  }



  render() {
    let x = this.props.data.id
    let color ;
    let y ;
  if (!x){
    return <div className="Fcontainer">
      <h1></h1>
      <h2></h2>
      <img className = "imagefirst" alt=""></img>
    </div>
  }
    
    switch(true){
      case (x < 300):
        y = storm
        
        color = "#F3AA4E"
          break
      case (x >= 300 && x <= 500):
        y = drizzle
        color = "##E9E9E9"
        break
      case (x >= 500 && x <= 600):
        y = rain
        color = "#0060AB"
        break
      case ( x >= 600 && x <= 700):
        y = snow
        color = "#51779E"
        
        break
      case (x >= 700 && x <= 800):
        color = "#679e97"
        y = fog
        break
      case (x === 800):
        y = clear
        color = "#F1B225"
        break
      case ( x === 801):
        y= mcloudy
        color  = "#90CBFD"
        break
      case ( x >= 801 && x <= 805):
        y = pcloudy
        color  = "003163"
       break 
    }
    return <div style={{backgroundColor: this.props.color}} className="Fcontainer" >

        <img className= "imagefirst" src={y} alt=""
          ></img>
             <h1>Temperature {this.props.data.tempm} to  {this.props.data.tempx} </h1>
             <div style={{backgroundColor: this.props.color}} ><span>Pressure: {this.props.data.pressure}</span> <span>Humidity: {this.props.data.humidity}</span></div>
             
            
            </div>;
  }
}

