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


export function fetchInactiveUsersAPI(token) {
    return axios({
        method: 'GET',
        url: `${API_BASE_URL}/users`,
        data: {},
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
    })
}

export function approveUserApi(token, data) {
    return axios({
        method: 'POST',
        url: `${API_BASE_URL}/approve-users`,
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        data
    })
}


export function rejectUserApi(token, data) {
    return axios({
        method: 'POST',
        url: `${API_BASE_URL}/reject-users`,
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        data
    })
}

export function fetchAllDocumentsApi(token) {
    return axios({
        method: 'GET',
        url: `${API_BASE_URL}/upload-analysis`,
        data: {},
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
    })
}

export function uploadAnalysisReport(token, data){
    return axios({
        method: 'POST',
        url: `${API_BASE_URL}/upload-analysis`,
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        data
    })
}

export function fetchDashboardData(token, params) {
    return axios({
        method: 'GET',
        url: `${API_BASE_URL}/dashboard`,
        data: {},
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        params: params
    })
}

export function fetchProfileData(token, params) {
    return axios({
        method: 'GET',
        url: `${API_BASE_URL}/profile`,
        data: {},
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        params: params
    })
}

