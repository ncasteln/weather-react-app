import { useState } from 'react';
import Search from './components/Search';
import WeatherTable from './components/WeatherTable';
import './App.css';
// import { getActiveElement } from '@testing-library/user-event/dist/utils';

const App = () => {
  const [weather, setWeather] = useState();
  const [location, setLocation] = useState();

  const url = process.env.REACT_APP_URL;
  const key = process.env.REACT_APP_KEY;

  const getWeather = async (e) => {
    e.preventDefault();
    let response;
    try {
      if (e.target.value === 'Search') {
        response = await fetch(`${url}q=${location}&appid=${key}`);
      } else {
        const position = await getPosition();
        response = await fetch(`${url}lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${key}`);
      }
      if (!response.ok) {
        alert('Write a valid location')
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
        setLocation={setLocation} />
      {weather 
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