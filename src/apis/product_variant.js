
import {callApi} from './index';

export async function addProductVariantApi (body) {
    return await callApi({method: "POST", url: 'http://localhost:8000/product_variant/add', body});
}

export async function updateProductVariantApi (body) {
    return await callApi({method: "PUT", url: 'http://localhost:8000/product_variant/update', body});
}

export async function handleDeleteVariantApi (id, body) {
    return await callApi({method: "DELETE", url: `http://localhost:8000/product_variant/delete/${id}`, body});
}

export async function getProductVariantList (body) {
    return await callApi({method: "POST", url: 'http://localhost:8000/product_variant/get/list', body});
}

export async function getParentProductDataApi (id, body) {
    return await callApi({method: "GET", url: `http://localhost:8000/product_variant/parent/get/${id}`, body});
}

export async function getProductVariantById (id, body) {
    return await callApi({method: "GET", url: `http://localhost:8000/product_variant/get/${id}`, body});
}

export async function getProductVariantListById (id, body) {
    return await callApi({method: "GET", url: `http://localhost:8000/product_variant/get_list/${id}`, body});
}

export async function getProductHighLightList (id, body) {
    return await callApi({method: "POST", url: `http://localhost:8000/highlight/get/list/${id}`, body});
}


export async function getProductSpecificationList (id, body) {
    return await callApi({method: "POST", url: `http://localhost:8000/product_specification/get/list/${id}`, body});
}

export async function addHighLight (body) {
    return await callApi({method: "POST", url: `http://localhost:8000/highlight/add`, body});
}

export async function updateHighLight (id, body) {
    return await callApi({method: "PUT", url: `http://localhost:8000/highlight/update/${id}`, body});
}