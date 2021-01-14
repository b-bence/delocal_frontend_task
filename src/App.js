import React, { useState, useEffect } from 'react';
import './App.css';
import './components/PaletteDetails'
import axios from 'axios';
import PaletteDetails from './components/PaletteDetails';

function App() {
  const apiURL = "http://www.colourlovers.com/api/palettes/new?format=json"
  const [palettes, setPalettes]= useState([])

  useEffect (() => {
    const proxyurl = "https://cors-anywhere.herokuapp.com/"; // use Cors Proxy to avoid “No Access-Control-Allow-Origin header” problems
    const url = apiURL;
    axios.get(proxyurl + url)
    .then(res => console.log(res))
  },[])

  return (
    <div>
      <PaletteDetails></PaletteDetails>
    </div>
  );
}

export default App;
