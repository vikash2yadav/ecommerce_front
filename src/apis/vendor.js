import {callApi} from './index';

export async function getVendorOrderList (body) {
    return await callApi({method: "POST", url: 'http://localhost:8000/order/vendor/get/list', body});
}
