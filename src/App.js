import { useState } from 'react';
import './App.css';
import Input from './components/Input';
import { fetchData } from './services/constants'
import WeatherCard from './components/WeatherCard';


function App() {

// weatherData is where we store the response data from api call
// value is where we keep track of what is being inserted in our input field
    // 1st way
    // const [weatherData, setWeatherData]= useState({/   
    //   weather: {},
    //   value: ''
    // })

  // const answers = fetchData();

  // console.log(fetchData(results))
  
  const [weatherData, setWeatherData]= useState({})
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value)
  }
  
    // const handleSubmit = async  (event) => {
    //   // event.preventDefault()
    //   const forecast = fetchData(value)
    //   console.log(forecast)
    //   setWeatherData(forecast)
      
    // }

    const handleButton = async (event) => {
      event.preventDefault()
      const forecast = await fetchData(value)
      setWeatherData(forecast)
      console.log(forecast)
    }


    return (
          <div className="App">
            <Input onChange = {(e) => handleChange(e)} onClick = {(e) => handleButton(e)}/>
            <WeatherCard forecast = {weatherData} />
          </div>
        );
      }

      export default App;


//temp={weatherData.temp} feels_like= {weatherData.feels_like} humidity={weatherData.humidity} pressure={weatherData.pressure}

