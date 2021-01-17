import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Weather from "./Weather";

class MenuHome extends Component {
    constructor(props){
        super(props);
        this.state = {
            city: "",
            language: ""
        }
        this.enviar = this.enviar.bind(this);
    }
    enviar = (event) => {
        event.preventDefault();
        let city = event.target.elements.city.value;
        let language = event.target.elements.lang.value;
        
        this.setState({city: city,language:language});
    }
    render = () => {
        let redirect;
        if(this.state.city != "" && this.state.language != ""){
            redirect = <Redirect to={{
                pathname:"/tiempo",
                state:this.state
            }}/>
        }
        return(
            <form onSubmit={this.enviar} method="POST">
                <label htmlFor="city-name">Nombre de la ciudad</label>
                <input type="text" name="city" id="city-name" required />
                <label htmlFor="lang">Idioma</label>
                <select id="lang">
                    <option value="es">Español</option>
                    <option value="ca">Catalán</option>
                    <option value="fr">Francés</option>
                    <option value="en">Inglés</option>
                </select>
                <input type="submit" value="Consultar"/>
                {redirect}
            </form>
        )
        
    }
}
export default MenuHome;