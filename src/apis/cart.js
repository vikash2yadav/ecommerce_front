import {callPostApi} from './index';

export async function getCustomerCartItemsList (body) {
    let data = await callPostApi({url: 'http://localhost:8000/cart_item/my/get/list', body});
    return data;
}
