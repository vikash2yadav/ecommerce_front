import {callPostApi} from './index';

export async function getAllCountryList (body) {
    let data = await callPostApi({url: 'http://localhost:8000/common/country/get/list', body});
    return data;
}

export async function getAllCityList (body) {
    let data = await callPostApi({url: 'http://localhost:8000/common/city/get/list', body});
    return data;
}

export async function getAllStateList (body) {
    let data = await callPostApi({url: 'http://localhost:8000/common/state/get/list', body});
    return data;
}