const WeatherTable = (props) => {
  const { weather } = props;

  return (
    <ul className="WeatherTable">
      <li>
        <img src={`./icons/${weather.weather[0].icon}.png`} alt={weather.weather[0].description} />
      </li>
      <ul>
        <li>{weather.name}</li>
        <li>{weather.weather[0].description}</li>
        <li>{weather.main.temp}</li>
        <li>{weather.main.pressure}</li>
        <li>{weather.wind.speed}</li>
      </ul>
    </ul>
  )
}

export default WeatherTable;