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

export async function addProductApi (body) {
    return await callApi({method: "POST", url: `http://localhost:8000/product/add`, body});
}

