import {callPostApi} from './index';

export async function getVendorOrderList (body) {
    let data = await callPostApi({url: 'http://localhost:8000/order/vendor/get/list', body});
    return data;
}
