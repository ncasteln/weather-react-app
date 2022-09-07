const WeatherTable = (props) => {
  const { weather } = props;

  return (
    <ul className="WeatherTable">
      <li>
        <img src={`./icons/${weather.weather[0].icon}.png`} alt={weather.weather[0].description} />
      </li>
      <ul>
        <li><strong>{weather.name}</strong></li>
        <li>{weather.weather[0].description}</li>
        <li>Temperature: {`${(Math.round((weather.main.temp - 273.15) * 100) / 100).toFixed(1)} C°`}</li>
        <li>Pressure: {weather.main.pressure} hPa</li>
        <li>Wind speed: {weather.wind.speed * 3.6} km/h</li>
      </ul>
    </ul>
  )
}

export default WeatherTable;