import React, { useState, useEffect } from 'react';
import './App.css';
import './components/PaletteItem'
import Palettes from './components/Palettes';

function App() {
  const apiURL = "http://www.colourlovers.com/api/palettes/new?format=json"
  const [palettes, setPalettes]= useState([])
  const [loadEveryPalette, setLoadEveryPlatte] = useState(false)

  useEffect (() => {
    const proxyurl = "https://cors-anywhere.herokuapp.com/"; // use Cors Proxy to avoid “No Access-Control-Allow-Origin header” problems
        fetch(proxyurl + apiURL)
        .then(res => res.json())
        .then(data => setPalettes(data));
  },[])

  window.addEventListener('scroll', function() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
       console.log("you're at the bottom of the page");
       setLoadEveryPlatte(true);
    }
 });


  const getCurrentTime = () =>{
    let today = new Date();
    let hours = today.getHours()
    hours < 10 ? hours = "0" + hours : hours = hours;

    let minutes = today.getMinutes();
    minutes < 10 ? minutes = "0" + minutes : minutes = minutes;

    let time =  hours + ":" + minutes + ":"
    return toStandardTime(time);
  }

  function toStandardTime(militaryTime) {
		militaryTime = militaryTime.split(':');
		return (militaryTime[0].charAt(0) == 1 && militaryTime[0].charAt(1) > 2) ? (militaryTime[0] - 12) + ':' + militaryTime[1] + ':' + militaryTime[2] + ' P.M.' : militaryTime.join(':') + ' A.M.'
	}
  

  return (
    <div id="pageDiv" >

      <div id="headerDiv" >
        <div id="update">Last Updated at {getCurrentTime()}</div>
        <div id="title">ColourLovers. <b>Live.</b></div>
      </div>
      
      <div id="paletteContainer">
        <Palettes palettes={loadEveryPalette === true ? palettes : palettes.slice(0,10)}></Palettes>
      </div>
    </div>
  );
}

export default App;
