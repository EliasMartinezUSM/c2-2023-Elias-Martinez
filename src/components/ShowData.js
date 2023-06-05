import React from 'react';
import { fetchData } from '../functions';

export const Showdata = ({IP}) => {
    //Extraer datos desde la ip con funcion asincrona
    let dataSet = {} 
    fetchData(IP).then(res => {dataSet = res})
    console.log(dataSet)
    /*Object.entries(dataSet).forEach((entry) => {
        const [key, value] = entry
        console.log(`${key}: ${value}`)
        })*/
    /*return (<ul>
        {Object.entries(dataSet).forEach((entry) => {
        const [key, value] = entry
        return (<li key={key}>{`${key}: ${value}`}</li>)
        })}
    </ul>
    )*/
    return (
        <ul>
            <li> Listado a </li>
    </ul>
    )
}