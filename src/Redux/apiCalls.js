import axios from 'axios';
import { API_BASE_URL } from '../Utils/Config';

export function login(data) {
    return axios({
        method: 'POST',
        url: `${API_BASE_URL}/login`,
        data: { ...data },
    })
}

export function registrationApi(data) {
    return axios({
        method: 'POST',
        url: `${API_BASE_URL}/registration`,
        data: { ...data },
    })
}

export function fetchDocumentApi(token) {
    return axios({
        method: 'GET',
        url: `${API_BASE_URL}/upload`,
        data: {},
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
    })
}

export function uploadDocumentApi(token, data) {
    return axios({
        method: 'POST',
        url: `${API_BASE_URL}/upload`,
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        data
    })
}