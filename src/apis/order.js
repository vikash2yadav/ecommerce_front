import {callApi} from './index';

export async function getOrderList (body) {
    return await callApi({method: "POST", url: 'http://localhost:8000/order/get/list', body});
}

export async function getOrderItemList (body) {
    return await callApi({method: "POST", url: 'http://localhost:8000/order_item/get/list', body});
}

export async function deleteOrderApi (id, body) {
    return await callApi({method: "DELETE", url: `http://localhost:8000/order/delete/${id}`, body});
}

export async function orderStatusChangeApi (body) {
    return await callApi({method: "PUT", url: `http://localhost:8000/order/status_change`, body});
}

export async function getShippedAddressById (id, body) {
    return await callApi({method: "GET", url: `http://localhost:8000/shipped_address/get/${id}`, body});
}

export async function getOrderItemsById (id, body) {
    return await callApi({method: "GET", url: `http://localhost:8000/order_item/get_list/${id}`, body});
}

export async function getAllMyOrderList (body) {
    return await callApi({method: "POST", url: 'http://localhost:8000/order/my/get/list', body});
}


