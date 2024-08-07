import {callApi} from './index';

export async function getAllAttributeListApi (body) {
    return await callApi({method: "POST", url: 'http://localhost:8000/attribute/get/list', body});
}
