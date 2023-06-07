import React, { useState, Fragment } from 'react';
import { VerificadorV4 } from '../functions';
import { Showdata } from './ShowData';

const IPv4Input = () => {
  const [value, setValue] = useState('');
  const [isInvalid, setIsInvalid] = useState(true);
  const [hasClicked, setHasClicked] = useState(false);
  
  const displayData = () => {
    if(hasClicked){
      return <Showdata IP={value}></Showdata>
    }
    else{
      return "Dirección IP válida"
    }
  }

  const handleChange = (event) => {
    setValue(event.target.value);
    setHasClicked(false);

    if (VerificadorV4(event.target.value)) {
      setIsInvalid(false);
    } else {
      setIsInvalid(true);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setHasClicked(true);

    if (!(VerificadorV4(value))) {
        alert('La dirección IPv4 ingresada es inválida, intente nuevamente');
    }
  }

  return (
    <Fragment>
        <form onSubmit={handleSubmit}>
        <label>
          Ingrese una dirección IPv4:
          <input type="text" value={value} onChange={handleChange} />
        </label>
        <input type="submit" disabled={isInvalid} value="Buscar" />
        </form>
        {isInvalid ? "Dirección IP no válida" : displayData()}
    </Fragment>  
  )
}

export default IPv4Input
