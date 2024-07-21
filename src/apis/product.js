import {callApi} from './index';

export async function getProductList (body) {
    return await callApi({method: "POST", url: 'http://localhost:8000/product/get/list', body});
}

export async function getVendorProductList (body) {
    return await callApi({method: "POST", url: 'http://localhost:8000/product/vendor/get/list', body});
}

export async function getProductById (id, body) {
    return await callApi({method: "GET", url: `http://localhost:8000/product/get/${id}`, body});
}

export async function deleteProductApi (id, body) {
    return await callApi({method: "DELETE", url: `http://localhost:8000/product/delete/${id}`, body});
}

export async function addProductApi (body) {
    return await callApi({method: "POST", url: `http://localhost:8000/product/add`, body});
}

export async function updateProductApi (body) {
    return await callApi({method: "PUT", url: `http://localhost:8000/product/update`, body});
}

export async function productStatusChangeApi (body) {
    return await callApi({method: "PUT", url: `http://localhost:8000/product/status_change`, body});
}

