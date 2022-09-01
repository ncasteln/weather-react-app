const Search = (props) => {
  const { setLocation, getWeather } = props;

  return (
    <form className="Search" >
      <h1>O Sole mio</h1>
      <h2>Simple weather React App</h2>
      <hr />
      <div>
        <input
          type="text"
          placeholder="Set your location"
          onChange={(e) => setLocation(e.target.value)} />
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
    </form>
  )
}

export default Search;