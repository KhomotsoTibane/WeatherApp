import React, { useContext} from 'react'
import {AppContext} from "../App"


function Weather() {
    const {data} = useContext(AppContext)
    
    
    return(
    <div className="container">
        <div className="top">
            <div className="location">
                <p>{data.name}</p>
            </div>
            <div className="temp">
                {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
            </div>
            <div className="description">
                {data.weather ? <p>{data.weather[0].description}</p> : null}
            </div>
        </div>
        
        {/* only display is the city is valid */}
        {data.name !== undefined &&
        <div className="bottom">
            <div className="feels">
            {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°C</p> : null}
            <p>Feels Like</p>
            </div>
            <div className="humidity">
            {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
            <p>Humidity</p>
            </div>
            <div className="wind">
            {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} km/h</p> : null}
            <p>Wind Speed</p>
            </div>
        </div>
        }
    </div>
    )
}

export default Weather