import axios from 'axios';


export const API = axios.create({
    baseURL: process.env.REACT_APP_BACK_URL,
    timeout: 5000, 
    credentials: 'include',
})