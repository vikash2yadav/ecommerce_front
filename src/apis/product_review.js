
import {callApi} from './index';

export async function getProductReviewList (body) {
    return await callApi({method: "POST", url: 'http://localhost:8000/product_review/get/list', body});
}

export async function addProductReviewApi (body) {
    return await callApi({method: "POST", url: 'http://localhost:8000/product_review/add', body});
}

export async function getProductReviewById (id, body) {
    return await callApi({method: "GET", url: `http://localhost:8000/product_review/get/${id}`, body});
}

export async function deleteProductReviewApi (id, body) {
    return await callApi({method: "DELETE", url: `http://localhost:8000/product_review/delete/${id}`, body});
}

export async function productReviewStatusChangeApi (body) {
    return await callApi({method: "PUT", url: `http://localhost:8000/product_review/status_change`, body});
}

export async function updateProductReviewApi (body) {
    return await callApi({method: "PUT", url: `http://localhost:8000/product_review/update`, body});
}