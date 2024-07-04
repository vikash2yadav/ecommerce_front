
import {callApi} from './index';

export async function getProductReviewList (body) {
    return await callApi({method: "POST", url: 'http://localhost:8000/product_review/get/list', body});
}

export async function addProductReviewApi (body) {
    return await callApi({method: "POST", url: 'http://localhost:8000/product_review/add', body});
}
