import React, {useState, useEffect} from 'react';
import { fetchData } from '../functions';

export const Showdata = ({IP}) => {
    const [hayData, setHaydata] = useState(false)
    const [data, setData] = useState(null)
    useEffect(() => {
        function fetch(){
            fetchData(IP).then(res => {
                setHaydata(true)
                setData(res)
            })
        }
        fetch()
    }, [])

    return hayData ? (<ul>
      {Object.keys(data).map((key)=>{
        return <li key={key}>{key} : {data[key]}</li>
        })}
      </ul>) : "Buscando datos"
}

//console.log(`${key}: ${data[key]}`)