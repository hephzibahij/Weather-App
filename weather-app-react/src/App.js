import React, {useState} from 'react'
import axios from 'axios'

function App() {

  //const url = 'https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid=d6f7b1bc6f7991bd460520fac2bb219b'



  return (
    <div className="app">
     <div className="container">
      <div className="top">
        <div className="location">
          <p>Nigeria</p>
        </div>
        <div className="temp">
        </div>
      </div>
      <div className="bottom">
        <div className="feels">
          <p>60 degree F</p>
        </div>
        <div className="humidity">
          <p>30%</p>
        </div>
        <div className="wind">
          12 MPH
        </div>
      </div>
     </div>
    </div>
  );
}

export default App;
