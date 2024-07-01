import {callPostApi} from './index';

export async function getCategoryList (body) {
    let data = await callPostApi({url: 'http://localhost:8000/category/get/list', body});
    return data;
}

export async function addCategory (body) {
    let data = await callPostApi({url: 'http://localhost:8000/category/add', body});
    return data;
}