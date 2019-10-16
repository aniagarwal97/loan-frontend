import axios from 'axios';
// import { API_BASE_URL } from '../config.js';

export function login() {
    return axios({
        method: 'GET',
        url: `https://reqres.in/api/users?page=2`,
        data: {},
    })
}
