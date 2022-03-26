function WeatherCard(props) {
    return(
        <div>
            
            <ul>
                {props.weathers.map((weather) => {
                    return <li>{weather}</li>
                })}
            </ul>
    
{/* searchbar, input form with button*/}
        </div>
    )
}

export default WeatherCard