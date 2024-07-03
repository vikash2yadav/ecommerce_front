import {callApi} from './index';

export async function getAdminList (body) {
    return await callApi({method: "POST", url: 'http://localhost:8000/admin/get/list', body});
}

export async function addAdminApi (body) {
    return await callApi({method: "POST", url: 'http://localhost:8000/admin/add', body});
}

export async function changeAdminPassword (body) {
    return await callApi({method: "GET", url: 'http://localhost:8000/admin/change_password', body});
}

