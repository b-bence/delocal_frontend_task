import React, { useState, useEffect } from 'react';
import './App.css';
import './components/PaletteItem'
import axios from 'axios';
import PaletteDetails from './components/PaletteItem';
import Palettes from './components/Palettes';

function App() {
  const apiURL = "http://www.colourlovers.com/api/palettes/new?format=json"
  const [palettes, setPalettes]= useState([])

  useEffect (() => {
    const proxyurl = "https://cors-anywhere.herokuapp.com/"; // use Cors Proxy to avoid “No Access-Control-Allow-Origin header” problems
    const url = apiURL;
    axios.get(proxyurl + url)
    .then(res => setPalettes(res.data))
  },[])

  return (
    <div>
      <Palettes palettes={palettes}></Palettes>
    </div>
  );
}

export default App;
