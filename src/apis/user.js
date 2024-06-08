import {callPostApi} from './index';

export async function signUp (body) {
    let data = await callPostApi({url: 'http://localhost:8000/user/sign_up' , body});
    return data ;
}

export async function signIn (body) {
    let data = await callPostApi({url: 'http://localhost:8000/user/sign_in' , body});
    return data ;
}

export async function forgotPassword (body) {
    let data = await callPostApi({url: 'http://localhost:8000/user/forgot_password' , body});
    return data ;
}

export async function otpVerification (body) {
    let data = await callPostApi({url: 'http://localhost:8000/user/otp_verification' , body});
    return data ;
}

export async function resetPassword (body) {
    let data = await callPostApi({url: 'http://localhost:8000/user/reset_password' , body});
    return data ;
}