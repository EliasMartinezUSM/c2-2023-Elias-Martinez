import React, {useState, useEffect} from 'react';
import { fetchData } from '../functions';

export const Showdata = ({IP}) => {
    const [data, setData] = useState(null)
    useEffect(() => {
        function fetch(){
            fetchData(IP).then(res => setData(res))
        }
        fetch()
    }, [])
    //Extraer datos desde la ip con funcion asincrona
    /*let dataSet = {} 
    fetchData(IP).then(res => {dataSet = res})
    console.log(dataSet)*/
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
    return data ? "Hay data": "Buscando datos"
}