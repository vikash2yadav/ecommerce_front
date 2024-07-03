import {callApi} from './index';

export async function getCategoryList (body) {
    return await callApi({method: "POST",url: 'http://localhost:8000/category/get/list', body});
}

export async function addCategory (body) {
    return await callApi({method: "POST", url: 'http://localhost:8000/category/add', body});
}