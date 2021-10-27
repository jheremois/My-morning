import axios from "axios";

const options: any = {
    method: 'GET',
    url: 'http://192.168.1.27:3000/api/playlists',
}

export const getAllPlaylists = ()=>{
    console.log(options.url)
    return axios.request(options)
}