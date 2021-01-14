import React, { useState, useEffect } from 'react';
import './App.css';
import './components/PaletteItem'
import axios from 'axios';
import Palettes from './components/Palettes';

function App() {
  const apiURL = "http://www.colourlovers.com/api/palettes/new?format=json"
  const [palettes, setPalettes]= useState([])

  useEffect (() => {
    const proxyurl = "https://cors-anywhere.herokuapp.com/"; // use Cors Proxy to avoid “No Access-Control-Allow-Origin header” problems
        fetch(proxyurl + apiURL)
        .then(res => res.json())
        .then(data => setPalettes(data));
  },[])

  const getCurrentTime = () =>{
    let today = new Date();
    let time = today.getHours() + ":" + today.getMinutes()
    return time;
  }
  

  return (
    <div id="pageDiv">

      <div id="headerDiv">
  <div id="update">Last Updated at {getCurrentTime()}</div>
        <div id="title">ColourLovers. <b>Live.</b></div>
      </div>
      
      <div id="paletteContainer">
        <Palettes palettes={palettes}></Palettes>
      </div>
    </div>
  );
}

export default App;
