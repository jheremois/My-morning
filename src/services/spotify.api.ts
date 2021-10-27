import { playlists } from "@src/config/env";
import axios from "axios";

export const getPlaylist = ()=>{
    return playlists
}

const options: any = {
    method: 'GET',
    url: 'http://192.168.1.27:3000/api/playlists',
    //url: 'http://192.168.1.27:3000/api/playlists',
}

export const getAllPlaylists = ()=>{
    console.log(options.url)
    return axios.request(options)
}