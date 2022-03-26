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

  const [value, setValue] = useState('');
  const [weatherData, setWeatherData]= useState({fetchData})
  
  // Create functions that handle event changes
  //Also for submit changes

  
  return (
    <div className="App">
      <Input />
      <WeatherCard weathers = {weatherData}/>
       
    </div>
  );
}

export default App;
