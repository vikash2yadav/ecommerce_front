import {callApi} from './index';

export async function getCustomerList (body) {
    let data = await callApi({method: "POST", url: 'http://localhost:8000/user/get/list', body});
    return data;
}

export async function updateMyProfile (body) {
    let data = await callApi({method: "PUT", url: 'http://localhost:8000/user/update/self/profile', body});
    return data;
}

export async function getCustomerAddressList (body) {
    let data = await callApi({method: "POST", url: 'http://localhost:8000/user_address/my/get/list', body});
    return data;
}

export async function addMyNewAddress (body) {
    let data = await callApi({method: "POST", url: 'http://localhost:8000/user_address/my/add_new', body});
    return data;
}

export async function getMyDefaultAddress (body) {
    let data = await callApi({method: "GET", url: 'http://localhost:8000/user_address/my/default', body});
    return data;
}

export async function deleteMyAddress (id, body) {
    let data = await callApi({method: "DELETE", url: `http://localhost:8000/user_address/my/delete/${id}`, body});
    return data;
}

export async function updateMyAddress (body) {
    let data = await callApi({method: "PUT", url: `http://localhost:8000/user_address/my/update`, body});
    return data;
}

export async function signOut (body) {
    let data = await callApi({method: "POST", url: 'http://localhost:8000/user/sign_out' , body});
    return data ;
}

export async function changePassword (body) {
    let data = await callApi({method: "PUT", url: 'http://localhost:8000/user/change_password' , body});
    return data ;
}

export async function getMyProfile (body) {
    let data = await callApi({method: "GET", url: 'http://localhost:8000/user/get/my_profile' , body});
    return data ;
}

export async function deleteMyAccount (body) {
    let data = await callApi({method: "DELETE", url: 'http://localhost:8000/user/delete/account' , body});
    return data ;
}

export async function addCustomerApi (body) {
    return await callApi({method: "POST", url: 'http://localhost:8000/user/add' , body});
}

export async function updateCustomerApi (body) {
    return await callApi({method: "PUT", url: 'http://localhost:8000/user/update' , body});
}

export async function deleteCustomerApi (id, body) {
    return await callApi({method: "DELETE", url: `http://localhost:8000/user/delete/${id}` , body});
}

export async function categoryStatusChangeApi (body) {
    return await callApi({method: "PUT", url: 'http://localhost:8000/user/status_change' , body});
}

export async function getCustomerByIdApi (id, body) {
    return await callApi({method: "GET", url: `http://localhost:8000/user/get/${id}` , body});
}