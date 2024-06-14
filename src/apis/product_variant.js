
import {callPostApi} from './index';

export async function getProductVariantList (body) {
    let data = await callPostApi({url: 'http://localhost:8000/product_variant/get/list', body});
    return data;
}
