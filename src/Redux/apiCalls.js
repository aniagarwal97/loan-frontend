import axios from 'axios';
import { API_BASE_URL } from '../Utils/Config';

export function login(data) {
    return axios({
        method: 'POST',
        url: `${API_BASE_URL}/login`,
        data: {...data},
    })
}

export function registrationApi(data){
    return axios({
        method: 'POST',
        url: `${API_BASE_URL}/registration`,
        data: {...data},
    })
}