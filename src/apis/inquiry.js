import {callPostApi, callPutApi, callGetApi, callDeleteApi} from './index';

export async function addInquiryByCustomer (body) {
    let data = await callPostApi({url: 'http://localhost:8000/inquiry/my/add', body});
    return data;
}