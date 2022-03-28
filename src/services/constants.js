import axios from 'axios';

// const zip = '07103'
// const key = '7ea1c97553f025f8b3cf79d1a72cd101'



// export const fetchData = async(zipCode) => {
//     try {
//         const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&units=imperial&appid=${key}`);
//         const results = response.data.main
//         console.log(results)
//         return results;
//         }catch(error) {
//         console.log(error)

//     }
//     }

//     fetchData(zip);

    

    export const fetchData = async(zipCode) => {

    const zip = '07103'
    const key = '7ea1c97553f025f8b3cf79d1a72cd101'
        
        try{
            
            // if(!zipCode){
            // let response  = await axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&units=imperial&appid=${key}`);
            // let result = response.data
            // console.log(result)
            // return result   
            // }
            // else{
             let response  = await axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&units=imperial&appid=${key}`); 
               let result = response.data
               return result   
            // }
            
           
            
    
        }
        catch (error) {
            console.log(error)
        }  
       
    
    }