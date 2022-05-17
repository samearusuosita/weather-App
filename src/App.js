import React from 'react';
import './App.css';
import Weather from './app_component/weather.component';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons/css/weather-icons.css';
import Form from "./app_component/Form.component";





const API_key = "cd6900aaf31f01a134a0f6d3f5d81e45";

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      city: undefined,
      country: undefined,
      icon: undefined,
      main: undefined,
      celsius: undefined,
      temp_max: undefined,
      temp_min: undefined,
      description: "",
      error: false
    };

    
    this.weathericon ={
      Thumderstorm:"wi-thunderstorm",
      Drizzle: "wi-sleet",
      Rain: "wi-storm-showers",
      Snow: "wi-snow",
      Atmospher: "wi-fog",
      Clear: "wi-day-sunny",
      Clouds: "wi-day-fog"
    }
  }
  
calCelsius(temp){
  let cell = Math.floor(temp - 273.15);
  return cell;

}

get_weathericon(icons, rangeId){
switch(true){
  case rangeId >= 200 && rangeId <= 232:
    this.setState({icon: this.weathericon.Thumderstorm})
    break;
    case rangeId >= 300 && rangeId <= 321:
    this.setState({icon: this.weathericon.Drizzle})
    break;
    case rangeId >= 500 && rangeId <= 531:
    this.setState({icon: this.weathericon.Rain})
    break;
    case rangeId >= 600 && rangeId <= 622:
    this.setState({icon: this.weathericon.Snow})
    break;
    case rangeId >= 701 && rangeId <= 781:
    this.setState({icon: this.weathericon.Atmospher})
    break;
    case rangeId === 800:
    this.setState({icon: this.weathericon.Clear})
    break;
    case rangeId >= 801 && rangeId <= 804:
    this.setState({icon: this.weathericon.Clouds})
    break;
    default:
      this.setState({icon:this.weathericon.Clouds})
}
}

  getWeather = async(e) =>{
e.preventDefault();

const city = e.target.elements.city.value;
const country = e.target.elements.country.value;

if(city && country){
  const appIds = '&appid='

  // https://api.openweathermap.org/data/2.5/weather?q={city name},{country code}&appid={API key}

    const API_data = 'https://api.openweathermap.org/data/2.5/weather?q=' + city+ ',' + country + appIds  + API_key
    const api_call = await fetch(API_data)
    const response = await api_call.json();

    console.log(response);
    
    // const cityname = response.name
    // const countryname = response.sys.country

    this.setState({
      city: response.city,
      country: response.sys.country,
      celsius: this.calCelsius(response.main.temp),
      temp_max: this.calCelsius(response.main.temp_max),
      temp_min: this.calCelsius(response.main.temp_min),
      description: response.weather[0].description,
      error: false
      });

      this.get_weathericon(this.weathericon, response.weather[0].id)
}else{
  this.setState({error:true})
}
  }


  render() {
    return (
      <div className="App">
        <Form loadweather={this.getWeather} error={this.state.error}/>
    <Weather 
    city={this.state.city} 
    country={this.state.country} 
    temp_celsius={this.state.celsius}
    temp_max={this.state.temp_max}
    temp_min ={this.state.temp_min}
    description={this.state.description}
    weathericon={this.state.icon}/>
  
  
    </div>
    );
  }
}

export default App;
