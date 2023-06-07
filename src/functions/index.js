import axios from "axios"
export function VerificadorV4(IP_Dir){ //Funcion para asegurarnos de que el valor ingresado es una direccion IPv4 valida
    let octetos_s = IP_Dir.split('.')
    if (octetos_s.length !== 4){ //Ponernos en el caso de que se introduzcan mas o menos octetos
        return false
    }
    for (let oct of octetos_s){ //Hacernos cargo de si el usuario ingresa octetos vacios
        if (oct === ''){
            oct = NaN
        }
    }
    let octetos = octetos_s.map(oct => Number(oct)) //Extraemos los octetos y los convertimos a numero 
    for (let oct of octetos){
        if (oct < 0 || oct > 255 || isNaN(oct)){ //Verificamos que los octetos se encuentren dentro del rango
            return false
        }
    }
    return true
}

//Promesa
export function getData(IP_Dir){
    return new Promise((resolve, reject) => {
        /*let url = "https://ipinfo.io/"+IP_Dir+"/geo"
        let data = axios.get(url).data
        resolve(data)*/
        let data = { //Dummie npara trabajar
            "ip": "161.185.160.93",
            "city": "Ne wYork City",
            "region": "New York",
            "country": "US",
            "loc": "40.7143,-74.0060",
            "org": "AS22252 The City of New York",
            "postal": "10004",
            "timezone": "America/New_York",
            "readme": "https://ipinfo.io/missingauth"
        }
        setTimeout(() => {resolve(data)}, 1500)
    })
}

//Funcion asincrona para mostrarla en otro componente
export async function fetchData(IP_Dir){
    let datosFetched = await getData(IP_Dir)
    //console.log(datosFetched)
    return datosFetched
}