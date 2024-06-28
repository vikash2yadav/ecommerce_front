import {callPostApi, callGetApi} from './index';

export async function getProductList (body) {
    let data = await callPostApi({url: 'http://localhost:8000/product/get/list', body});
    return data;
}

export async function getVendorProductList (body) {
    let data = await callPostApi({url: 'http://localhost:8000/product/vendor/get/list', body});
    return data;
}

export async function getProductById (id, body) {
    let data = await callGetApi({url: `http://localhost:8000/product/get/${id}`, body});
    return data;
}

