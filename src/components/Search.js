const Search = (props) => {
  const { setLocation, setKey, getWeather } = props;

  return (
    <form className="Search">
      <h1>O Sole mio</h1>
      <h2>Simple weather React App</h2>
      <hr />
      <div>
        <input
          type="text"
          placeholder="Set your location"
          onChange={(e) => setLocation(e.target.value)} />
        <input 
          type='text'
          placeholder="Api key"
          onChange={(e) => setKey(e.target.value)} />
        <button className="search"
          value={'Search'} onClick={getWeather}>
          Search
        </button>
        <button className="position" 
          onClick={getWeather}>
          <img className="position-icon"
            src="./icons/location-dot-solid.svg"
            alt="position icon" />
        </button>
      </div>
      <p>
        If you have not an Api key, you can register and get one on 
        <a href="https://openweathermap.org/" target='_blank'> https://openweathermap.org/</a>
      </p>
    </form>
  )
}

export default Search;