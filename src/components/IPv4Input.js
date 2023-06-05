import React, { Fragment } from 'react';
import { VerificadorV4} from '../functions';
import { Showdata } from './ShowData';

export class IPv4Input extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
      this.isInValid = true //Permite iniciar con el boton buscar deshabilitado
      //this.dataSet = {}
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
      if (VerificadorV4(this.state.value)){ //Si se detecta una direccion valida se activa el boton
        this.isInValid = false
      }
      else {
        this.isInValid = true
      }
    }
  
    handleSubmit(event) {
      if(VerificadorV4(this.state.value)){
       // let data = getData(this.state.value)   conexion con api
        //this.dataSet = getData(this.state.value)
        event.preventDefault();
      }
      else{
        alert('La dirección IPv4 ingresada es inválida, intente nuevamente');
        event.preventDefault()
      }

    }
  
    render() {
      return (
        <Fragment>
          <form onSubmit={this.handleSubmit}>
          <label>
            Ingrese una dirección IPv4: 
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" disabled={this.isInValid} value="Buscar" />
        </form>
        {this.isInValid ? "Dirección IP no válida" : <Showdata IP={this.state.value}></Showdata>}
        </Fragment>
      );
    }
  }