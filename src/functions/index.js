import axios from "axios"
export function VerificadorV4(IP_Dir){ //Funcion para asegurarnos de que el valor ingresado es una direccion IPv4 valida
    let octetos_s = IP_Dir.split('.')
    if (octetos_s.length != 4){ //Ponernos en el caso de que se introduzcan mas o menos octetos
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

export function getData(IP_Dir){
    let url = "https://ipinfo.io/"+IP_Dir+"/geo"
    let data = axios.get(url).data
    return data
}