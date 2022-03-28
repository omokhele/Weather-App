// import './WeatherCard.css';
function WeatherCard ({forecast})  {
   
    return (
        <div>
            <p>{forecast.weather[0].main}</p>
            <p><span>name: {forecast.name}</span></p>
            <p>temp:{forecast.main.temp}</p>
            <p>feels_like: {forecast.main.feels_like}</p>
            <p>humidity: {forecast.main.humidity}</p>
            <p>pressure: {forecast.main.pressure}</p>
        </div>
    );
};

export default WeatherCard;













