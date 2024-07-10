import {callApi} from './index';

export async function getCategoryList (body) {
    return await callApi({method: "POST",url: 'http://localhost:8000/category/get/list', body});
}

export async function getCategoryById (id, body) {
    return await callApi({method: "GET", url: `http://localhost:8000/category/get/${id}`, body});
}

export async function addCategory (body) {
    return await callApi({method: "POST", url: 'http://localhost:8000/category/add', body});
}

export async function updateCategory (body) {
    return await callApi({method: "PUT", url: 'http://localhost:8000/category/update', body});
}

export async function deleteCategory (id, body) {
    return await callApi({method: "DELETE", url: `http://localhost:8000/category/delete/${id}`, body});
}

export async function categoryStatusChange (body) {
    return await callApi({method: "PUT", url: `http://localhost:8000/category/status_change`, body});
}