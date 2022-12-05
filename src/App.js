import { useState } from 'react';
import Search from './components/Search';
import WeatherTable from './components/WeatherTable';
import './App.css';

const App = () => {
  const [weather, setWeather] = useState();
  const [location, setLocation] = useState();
  const [key, setKey] = useState();

  const getWeather = async (e) => {
    e.preventDefault();
    let response;
    try {
      if (e.target.value === 'Search') {
        response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}`);
      } else {
        const position = await getPosition();
        response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${key}`);
      }
      if (!response.ok) {
        alert('Compile all the field or check about mistakes')
        throw new Error(`Response was not ok - ${response.status}`)
      }
      const data = await response.json();
      console.log(data);
      setWeather(data);
    }
    catch(error) {
      console.error(`Fetched failed - error ${error}`)
    }
  }

  const getPosition = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    })
  }

  return (
    <div className='App'>
      <Search 
        getWeather={getWeather}
        getPosition={getPosition}
        setLocation={setLocation}
        setKey={setKey} />
      {
        weather 
          ? <WeatherTable weather={weather} />
          : null
      }
      <footer>
        Developed by <a href="https://nicocastelnuovo.github.io/personal-portfolio/" target="_blank">NicoCastel</a>
      </footer>
    </div>
  )
}

export default App;