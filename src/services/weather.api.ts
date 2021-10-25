import axios from "axios";
import { API_HOST, API_KEY } from "@src/config/env";

const options: any = {
    method: 'GET',
    url: 'https://weatherapi-com.p.rapidapi.com/current.json',
    params: {q: 'La Romana, DO'},
    headers: {
      'x-rapidapi-host': API_HOST,
      'x-rapidapi-key': API_KEY
    }
}

export const getWeather = async ()=>{
    return await axios.request(options)
}