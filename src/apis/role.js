import {callApi} from './index';

export async function getRoleListApi (body) {
    return await callApi({method: "POST", url: 'http://localhost:8000/role/get/list', body});
}
