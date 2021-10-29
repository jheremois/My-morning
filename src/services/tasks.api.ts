import axios from "axios";
import { API_IP } from "@src/config/env";

export const getPenddingTasks = ()=>{
    return axios.request({
        method: 'GET',
        url: `${API_IP}/api/tasks/pendding`,
    })
}

export const getDoneTasks = ()=>{
    return axios.request({
        method: 'GET',
        url: `${API_IP}/api/tasks/done`,
    })
}

export const putDoneTasks = (id: any)=>{
    return axios.request({
        method: 'PUT',
        url: `${API_IP}/api/task/${id}}`,
    })
}

export const deleteTasks = (id: any)=>{
    return axios.request({
        method: 'DELETE',
        url: `${API_IP}/api/task/${id}}`,
    })
}