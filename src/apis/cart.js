import {callApi} from './index';

export async function getCustomerCartItemsList (body) {
    return await callApi({method: "POST", url: 'http://localhost:8000/cart_item/my/get/list', body});
}
