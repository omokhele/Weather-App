import axios from 'axios';
const zip = '07103'
const key = '7ea1c97553f025f8b3cf79d1a72cd101'



export const fetchData = async() => {
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&units=imperial&appid=${key}`);
       const results = response.data
        console.log(results)
        }catch(error) {
        console.log(error)

    }
    }

    
    