import React, { Component } from 'react';
import axios from 'axios';
import SearchForm from './SearchForm'

class Weather extends Component {
  constructor(props) {
    super();
    this.state = {
      city: '',
      weatherData: null
    };
    this.fetchWeather = this.fetchWeather.bind(this);
  }

  fetchWeather(city) {
    console.log('Fetching: ', city);
    const weatherUrl = 'http://api.openweathermap.org/data/2.5/weather';
    const weatherParams = {
      q: city,
      units: 'metric',
      appid: '87f3530b034ce83f07479771285f8bdf'
    };

    axios.get(weatherUrl, {params: weatherParams}).then((res) => {
      this.setState({weatherData: res.data});
    }, () => {
      this.setState({weatherData: null})
    });
  }
  render() {
    return(
      <div>
      <SearchForm onSubmit={ this.fetchWeather } />
      <WeatherInfo data={ this.state.weatherData} />
      </div>
    )
  }
}

  const WeatherInfo = (props) => {
    if(props && props.data === null ) {
      return '';
    }else {
      return (
        <div className="info">
        <h2> Weather in {props.data.name} </h2>
        <h3> Temperature: {props.data.main.temp }&deg;C </h3>
        <p> {props.data.weather[0].main}: {props.data.weather[0].description}
        </p>
        </div>
      );
    }
  }
export default Weather;
