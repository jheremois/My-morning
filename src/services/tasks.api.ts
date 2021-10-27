import axios from "axios";

const options: any = {
    method: 'GET',
    url: 'http://192.168.1.27:3000/api/tasks/pendding',
}

export const getPenddingTasks = ()=>{
    console.log(options.url)
    return axios.request(options)
}

const optionstwo: any = {
    method: 'GET',
    url: 'http://192.168.1.27:3000/api/tasks/done',
}

export const getDoneTasks = ()=>{
    console.log(optionstwo.url)
    return axios.request(optionstwo)
}