import {callApi} from './index';

export async function getAllCountryList (body) {
    return await callApi({method: "POST", url: 'http://localhost:8000/common/country/get/list', body});
}

export async function getAllCityList (body) {
    return await callApi({method: "POST", url: 'http://localhost:8000/common/city/get/list', body});
}

export async function getAllStateList (body) {
    return await callApi({method: "POST", url: 'http://localhost:8000/common/state/get/list', body});
}