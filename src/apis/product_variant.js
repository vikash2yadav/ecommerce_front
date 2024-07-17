
import {callApi} from './index';

export async function getProductVariantList (body) {
    return await callApi({method: "POST", url: 'http://localhost:8000/product_variant/get/list', body});
}

export async function getProductVariantListById (id, body) {
    return await callApi({method: "GET", url: `http://localhost:8000/product_variant/get_list/${id}`, body});
}
