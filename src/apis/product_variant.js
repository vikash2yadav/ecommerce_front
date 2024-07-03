
import {callApi} from './index';

export async function getProductVariantList (body) {
    return await callApi({method: "POST", url: 'http://localhost:8000/product_variant/get/list', body});
}
