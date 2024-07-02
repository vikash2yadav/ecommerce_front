import {callPostApi} from './index';

export async function getAdminList (body) {
    let data = await callPostApi({url: 'http://localhost:8000/admin/get/list', body});
    return data;
}

export async function addAdminApi (body) {
    let data = await callPostApi({url: 'http://localhost:8000/admin/add', body});
    return data;
}
