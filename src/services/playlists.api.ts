import axios from "axios";
import { API_IP } from "@src/config/env";

const options: any = {
    method: 'GET',
    url: `${API_IP}/api/playlists`,
}

export const getAllPlaylists = ()=>{
    console.log(options.url)
    return axios.request(options)
}