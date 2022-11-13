import axios from 'axios';

export const smarteamsApi = axios.create({
    baseURL: 'http://localhost:4000/'
})