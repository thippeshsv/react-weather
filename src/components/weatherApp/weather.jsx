import React,{useState} from "react";
import './weather.css'
// import 'bootstrap/dist/css/bootstrap.min.css';

import search_icon from "../assets/search.png"
import weather_image from '../assets/cloud.png'
import rain from '../assets/rain.png'
import clear from '../assets/clear.png'
import drizzle from '../assets/drizzle.png'
import snow from '../assets/snow.png'
import humidity from '../assets/humidity.png'
import wind from '../assets/wind.png'
import mist from '../assets/fog.png'
import clear_night from '../assets/moon_night.png'
import moon_night from '../assets/night.png'
import scatter from '../assets/lightning.png'
import night_rain from '../assets/night_rain.png'

function Weather() {
    const [city, setCity] = useState('');
    let [wicon, setWicon]  = useState(weather_image)
    let api_key = '72f58871ce459a3116f9a0bcd04cf5e1'

   
    let  Search= async() =>{
     
        if(city === ''){
            return 0
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=Metric&appid=${api_key}`
    
        let response =await fetch(url)

        let data = await response.json()
        let humidity = document.getElementsByClassName('humidity-percentage')
        let wind = document.getElementsByClassName('wind-speed')
        let temperature = document.getElementsByClassName('weather-temp')
        let location = document.getElementsByClassName('weather-location')
        let status = document.getElementsByClassName('status')

        humidity[0].innerHTML = data.main.humidity + '%';
        wind[0].innerHTML = data.wind.speed + 'km/h';
        temperature[0].innerHTML = data.main.temp + '&degc';
        location[0].innerHTML = data.name;
        status[0].innerHTML = data.weather[0].main;


switch(data.weather[0].icon){
    case '01d':
        return setWicon(clear)
        break;
   case '01n':
         return setWicon(clear_night)
         break;
     case '02d':
            return setWicon(weather_image)
            break;
     case '02n':
        return setWicon(moon_night)
          break;
     case '03d':
         return setWicon(drizzle)
              break;

    case '03n':
                return setWicon(scatter)
                  break;
    case '04d':
        return setWicon(drizzle)
                break;
        
    case '04n':
         return setWicon(scatter)
                  break;

    case '09d':
             return setWicon(rain)
             break;
     case '09n':
             return setWicon(night_rain)
             break;
     case '10d':
             return setWicon(rain)
             break;
     case '10n':
             return setWicon(night_rain)
             break;
    case '13d':
             return setWicon(snow)
             break;
     case '13n':
             return setWicon(snow)
             break;
     case '50d':
             return setWicon(mist)
             break;
     case '50n':
             return setWicon(mist)
             break;
        default :
        setWicon(clear)
}


// if(data.weather[0].icon === '01d' || data.weather[0].icon === '01n')

// {
//     setWicon(clear)
// }
// else if (data.weather[0].icon === '02d' || data.weather[0].icon === '02n')
// {
// setWicon(weather_image)
// }
// else if (data.weather[0].icon === '03d' || data.weather[0].icon === '03n')
// {
// setWicon(drizzle)
// }
// else if (data.weather[0].icon === '04d' || data.weather[0].icon === '04n')
// {
// setWicon(drizzle)
// }
// else if (data.weather[0].icon === '09d' || data.weather[0].icon === '09n')
// {
// setWicon(rain)
// }
// else if (data.weather[0].icon === '10d' || data.weather[0].icon === '10n')
// {
// setWicon(rain)
// }
// else if (data.weather[0].icon === '13d' || data.weather[0].icon === '13n')
// {
// setWicon(snow)
// }
// else if (data.weather[0].icon === '50d' || data.weather[0].icon === '50n')
// {
// setWicon(mist)
// }

// else{
//     setWicon(clear)
// }
        
    }


    return(
        <div className="container-fluid shadow  weather-container" >
          <div className="card p-4">
            
                <div className="topbar d-flex justify-content-center align-items-center">
                    <input
                        type="text"
                        className="form-control input"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="Enter city name"
                    />
                    <div className="search-icon" onClick={Search}>
                        <img src={search_icon} alt="" />
                    </div>
                </div>
                <div className="weather-image text-center">
                    <img src={wicon} alt="" />
                </div>
                <div className="status" style={{color :'white', marginTop: '10px',fontSize: '18px',}}>
                    status
                </div>
                <div className="d-flex justify-content-center weather-temp" >24&deg;C</div>
                <div className="weather-location d-flex justify-content-center" >Location</div>
                <div className="data-container d-flex justify-content-center">
                    <div className="element">
                        <img src={humidity} alt="" className="icon" />
                        <div className="data">
                            <div className="humidity-percentage">64%</div>
                            <div className="text">Humidity</div>
                        </div>
                    </div>

                    <div className="element">
                        <img src={wind} alt="" className="icon" />
                        <div className="data">
                            <div className="wind-speed">18 km/hr</div>
                            <div className="text">Wind speed</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   
);
}


export default Weather