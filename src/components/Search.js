import React from "react";

import clear from "../img/weather-icons/clear.svg";
import "./Search.css";
class Search extends React.Component {
  state = {
    input: ""
  };
  _handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.props.handleInput(this.state.input);
      
    }
  }
  render() {
    
    return (
      <div style={{backgroundColor: this.props.navcolor}} className="navbar">
        
        <input className = "search"
          type="text"
          id="input-name"
          placeholder="Type your search here"
          onChange={event =>  {
            
           this.setState({ input: event.target.value });

          }}
          onKeyDown={e => {

            if (e.key === "Enter") {

              this._handleKeyDown(e)
            }
          }}
        />
        <button
          onClick={event => {
            this.props.handleInput(this.state.input);
          }}
        >
          Find Weather
        </button>
      </div>
    );
  }
}
export default Search;
