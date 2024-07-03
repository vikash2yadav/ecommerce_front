import {callApi} from './index';

export async function signUp (body) {
    return await callApi({method: "POST", url: 'http://localhost:8000/user/sign_up' , body});
}

export async function signIn (body) {
    return await callApi({method: "POST", url: 'http://localhost:8000/user/sign_in' , body});
}

export async function forgotPassword (body) {
    return await callApi({method: "POST", url: 'http://localhost:8000/user/forgot_password' , body});
}

export async function otpVerification (body) {
    return await callApi({method: "POST", url: 'http://localhost:8000/user/otp_verification' , body});
}

export async function resetPassword (body) {
    return await callApi({method: "POST", url: `http://localhost:8000/user/reset_password` , body});
}

export async function getAddress (body) {
    return await callApi({method: "GET", url: `http://localhost:8000/user/get/address` , body});
}

export async function changeDefaultAddress (id, body) {
    return await callApi({method: "GET", url: `http://localhost:8000/user_address/change/default/${id}`, body });
}
