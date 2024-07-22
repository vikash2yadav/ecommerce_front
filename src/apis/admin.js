import {callApi} from './index';

export async function getAdminList (body) {
    return await callApi({method: "POST", url: 'http://localhost:8000/admin/get/list', body});
}

export async function addAdminApi (body) {
    return await callApi({method: "POST", url: 'http://localhost:8000/admin/add', body});
}

export async function updateAdminApi (body) {
    return await callApi({method: "PUT", url: 'http://localhost:8000/admin/update', body});
}

export async function changeAdminPassword (body) {
    return await callApi({method: "PUT", url: 'http://localhost:8000/admin/change_password', body});
}

export async function deleteAdminApi (id, body) {
    return await callApi({method: "DELETE", url: `http://localhost:8000/admin/delete/${id}`, body});
}

export async function adminStatusChange (body) {
    return await callApi({method: "PUT", url: `http://localhost:8000/admin/status_change`, body});
}

export async function getAdminById (id, body) {
    return await callApi({method: "GET", url: `http://localhost:8000/admin/get/${id}`, body});
}

export async function getProfile (body) {
    return await callApi({method: "GET", url: `http://localhost:8000/admin/self/profile`, body});
}

export async function updateSelfProfile (body) {
    return await callApi({method: "PUT", url: `http://localhost:8000/admin/update/self/profile`, body});
}