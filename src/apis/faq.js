import {callPostApi} from './index';

export async function getProductFaqList (body) {
    let data = await callPostApi({url: 'http://localhost:8000/product_faq/get/list', body});
    return data;
}
