import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import "../assets/css/weather.css";

class Weather extends Component{
    constructor(props){
        super(props);
        this.state = {
            city: this.props.location.state.city,
            lang: this.props.location.state.language,
            coord:[],
            weather: []
        };
        this.getLatLong = this.getLatLong.bind(this);
        this.getWeather = this.getWeather.bind(this);
    }
    componentDidMount() {
        this.getLatLong();
    }
    getWeather = () => {
        const APIKEY2 = '55257f1606c8983cdaf2a9253f8f5086';
        const url = 'http://api.openweathermap.org/data/2.5/onecall';
        let requestWeather = url+"?lat="+this.state.coord.lat+"&lon="+this.state.coord.lon+"&units=metric"+
        "&exclude=hourly,minutely&lang="+this.state.lang+"&appid="+APIKEY2;
        fetch(requestWeather)
            .then(data => data.json())
            .then(data =>{
                this.setState({
                    weather: data.daily
                })
            })
        .catch(err => console.log(err))
    }
    getLatLong = () => {
        const APIKEY = '55257f1606c8983cdaf2a9253f8f5086';
        const urlLatLong =  "http://api.openweathermap.org/data/2.5/weather";
        let url = urlLatLong + "?q="+this.state.city+"&appid="+APIKEY;
        fetch(url)
            .then(data => data.json())
            .then(datajson => {
                this.setState({
                    coord:datajson.coord
                })
            })
            .then(() => this.getWeather())
            .catch(err => console.log(err));
    }
    render = () =>{
        let htmlFormat = this.state.weather.map(el => <div className="prediction" key={el.id}>
            <img src={"http://openweathermap.org/img/wn/"+el.weather[0].icon+"@2x.png"}></img>
            <p className="description" key={el.id+"description"}>{el.weather[0].description}</p>
            <div className="temp">
                <p className="max">Temperatura Máxima: {el.temp.max}ºC</p>
                <p className="min">Temperatura Mínima: {el.temp.min}ºC</p>
            </div>
            <p className="lluvia">Probabilidad de lluvia: {el.pop * 100}%</p>
            <p className="humedad">Humedad: {el.humidity}%</p>
        </div>)
        return(
        <div className="weather">
            {htmlFormat}
        </div>
        )
    }
}

export default withRouter(Weather);