import {callPostApi} from './index';

export async function getOrderList (body) {
    let data = await callPostApi({url: 'http://localhost:8000/order/get/list', body});
    return data;
}

export async function getOrderItemList (body) {
    let data = await callPostApi({url: 'http://localhost:8000/order_item/get/list', body});
    return data;
}
