
import {callPostApi} from './index';

export async function getProductReviewList (body) {
    let data = await callPostApi({url: 'http://localhost:8000/product_review/get/list', body});
    return data;
}
