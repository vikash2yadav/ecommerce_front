import {callPostApi} from './index';

export async function getRoleListApi (body) {
    return await callPostApi({url: 'http://localhost:8000/role/get/list', body});
    
}
