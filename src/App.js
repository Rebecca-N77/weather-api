import React, { Component } from "react";
import Search from "./components/Search";
import icon from "./img/weather-icons/clear.svg"
import WeatherFirst from "./components/WeatherFIrst";
import WeatherNext from "./components/Weathernext"
import fakeWeatherData from "./fakeWeatherData.json";

import "./App.css";
//*http://api.openweathermap.org/data/2.5/forecast?q=London&cnt=8&units=metric&appid=f9f48aafa7cf62ac9dd58e05bbc814e8//
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      data: [],
      fdata: {},

    };
  }
  
  handleInputChange = value => {
    let city =value
    let hours = []
    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=8&units=metric&appid=f9f48aafa7cf62ac9dd58e05bbc814e8`)
    .then(res => res.json())
    .then(
      (result) => {
        try {
          let Adata = result.list
        
        
        console.log(Adata)
        //weather first data manipulation
        let Fdata = {
          tempm : Adata[0].main.temp_min ,
          tempx: Adata[0].main.temp_max ,
          humidity: Adata[0].main.humidity ,
          pressure: Adata[0].main.pressure ,
          id: Adata[0].weather[0].id
        }
        let x = Fdata.id;
        let color;
        let navcolor;
        switch(true){
          case (x < 300):
            navcolor = "#10171F"
            color = "#F3AA4E"
              break
          case (x >= 300 && x <= 500):
            navcolor = "#A8E9CA"
            color = "##00203C"
            break
          case (x >= 500 && x <= 600):
            navcolor = "#97BCCE"
            color = "#0060AB"
            break
          case ( x >= 600 && x <= 700):
           navcolor = "#A4A3CE"
            color = "#717689"
            
            break
          case (x >= 700 && x <= 800):
            navcolor = "#67ebdb"
            color = "#679e97"
          
            break
          case (x === 800):
            navcolor = "#FFFFFF"
            color = "#F1B225"
            break
          case ( x === 801):
            navcolor = "67ebdb"
            color  = "#90CBFD"
            break
          case ( x >= 801 && x <= 805):
            navcolor = "#F7BF37"
            color  = "#003163"
           break 
        }
        this.setState({
          navcolor: navcolor,
          color: color

        })
        //weather next data manipulation
       Adata.map(x => {
        let d = new Date(x.dt_txt)
      
        let data = {
          tempm : x.main.temp_min ,
          tempx: x.main.temp_max ,
          humidity: x.main.humidity ,
          pressure: x.main.pressure ,
          id: x.weather[0].id,
          time: d.getUTCHours()
        }
        hours.push(data)
       })
       // setting the manipulated data to the state over her
        this.setState({
          isLoaded: true,
          dataFirst: result.list[0],
          dataFinal: result.list,
          fdata: Fdata,
          mdata: hours
        });
        } catch (error) {
          alert(result.message)
        }
        
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
       alert(error.message)
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
  };


  render() {
    return (
      <div style={{backgroundColor: this.state.color}} className="app">
        
        <Search  navcolor={this.state.navcolor} handleInput={this.handleInputChange} />
        
        <div className="maincontainer" style={{backgroundColor: this.state.color}}>
        <WeatherFirst color={this.state.color} data = {this.state.fdata}/>
       

        <WeatherNext color={this.state.color}  data = {this.state.mdata} />
        
        
          
        </div>
        
        
      </div>
    );
  }
}

export default App;
