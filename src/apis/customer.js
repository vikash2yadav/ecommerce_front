import {callPostApi} from './index';

export async function getCustomerList (body) {
    let data = await callPostApi({url: 'http://localhost:8000/user/get/list', body});
    return data;
}
