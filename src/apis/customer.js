import {callPostApi, callPutApi, callGetApi, callDeleteApi} from './index';

export async function getCustomerList (body) {
    let data = await callPostApi({url: 'http://localhost:8000/user/get/list', body});
    return data;
}

export async function updateMyProfile (body) {
    let data = await callPutApi({url: 'http://localhost:8000/user/update/self/profile', body});
    return data;
}

export async function getCustomerAddressList (body) {
    let data = await callPostApi({url: 'http://localhost:8000/user_address/my/get/list', body});
    return data;
}

export async function addMyNewAddress (body) {
    let data = await callPostApi({url: 'http://localhost:8000/user_address/my/add_new', body});
    return data;
}

export async function getMyDefaultAddress (body) {
    let data = await callGetApi({url: 'http://localhost:8000/user_address/my/default', body});
    return data;
}

export async function deleteMyAddress (id, body) {
    let data = await callDeleteApi({url: `http://localhost:8000/user_address/my/delete/${id}`, body});
    return data;
}

export async function updateMyAddress (body) {
    let data = await callPutApi({url: `http://localhost:8000/user_address/my/update`, body});
    return data;
}

export async function signOut (body) {
    let data = await callPostApi({url: 'http://localhost:8000/user/sign_out' , body});
    return data ;
}

export async function changePassword (body) {
    let data = await callPutApi({url: 'http://localhost:8000/user/change_password' , body});
    return data ;
}