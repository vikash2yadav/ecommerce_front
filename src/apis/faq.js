import {callApi} from './index';

export async function getProductFaqList (body) {
    return await callApi({method: "POST", url: 'http://localhost:8000/product_faq/get/list', body});
}

export async function getProductFaqById (id, body) {
    return await callApi({method: "GET", url: `http://localhost:8000/product_faq/get/${id}`, body});
}

export async function deleteProductFaqApi (id, body) {
    return await callApi({method: "DELETE", url: `http://localhost:8000/product_faq/delete/${id}`, body});
}

export async function addProductFaqApi (body) {
    return await callApi({method: "POST", url: 'http://localhost:8000/product_faq/add', body});
}

export async function updateProductFaqApi (body) {
    return await callApi({method: "PUT", url: 'http://localhost:8000/product_faq/update', body});
}

export async function productFaqStatusChangeApi (body) {
    return await callApi({method: "PUT", url: 'http://localhost:8000/product_faq/status_change', body});
}