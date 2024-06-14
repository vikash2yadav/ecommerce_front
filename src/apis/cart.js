import {callPostApi} from './index';

export async function getCustomerCartProductList (body) {
    let data = await callPostApi({url: 'http://localhost:8000/cart/my/get/list', body});
    return data;
}
