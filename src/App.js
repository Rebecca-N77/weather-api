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
      data: []
      
    };
  }

  handleInputChange = value => {
    let city =value
    
    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=8&units=metric&appid=f9f48aafa7cf62ac9dd58e05bbc814e8`)
    .then(res => res.json())
    .then(
      (result) => {
        



        console.log(result)
        this.setState({
          isLoaded: true,
          dataFirst: result.list[0],
          dataFinal: result.list

        });
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        console.log(error)
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
  };


  render() {
    return (
      <div className="app">
        
        <Search handleInput={this.handleInputChange} />
        
        <img src={icon}></img>
        <WeatherFirst />
        <WeatherNext color="black" name={this.state.name} />
      </div>
    );
  }
}

export default App;
