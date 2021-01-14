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

  return (
    <div id="paletteContainer">
      <Palettes palettes={palettes}></Palettes>
    </div>
  );
}

export default App;
