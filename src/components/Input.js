import React from 'react';
const Input = (props) => {
    return (
        <div>
             <form>
                <h1>Weather App</h1>
                <input type="text" placeholder="zipcode" onChange = {props.onChange}/>
                <input type="button" value="Submit" onClick = {props.onClick}/> 
                
                </form>
             
        </div>
    );
};
export default Input;


