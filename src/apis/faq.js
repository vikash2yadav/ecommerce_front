import {callApi} from './index';

export async function getProductFaqList (body) {
    return await callApi({method: "POST", url: 'http://localhost:8000/product_faq/get/list', body});
}
