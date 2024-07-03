import {callApi} from './index';

export async function getOrderList (body) {
    return await callApi({method: "POST", url: 'http://localhost:8000/order/get/list', body});
}

export async function getOrderItemList (body) {
    return await callApi({method: "POST", url: 'http://localhost:8000/order_item/get/list', body});
}

export async function getAllMyOrderList (body) {
    return await callApi({method: "POST", url: 'http://localhost:8000/order/my/get/list', body});
}


