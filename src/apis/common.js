import {callPostApi} from './index';

export async function getCityNameById (id, body) {
    let data = await callPostApi({url: `http://localhost:8000/user_address/city_name/${id}`, body});
    return data;
}

export async function getStateNameById (id, body) {
    let data = await callPostApi({url: `http://localhost:8000/user_address/state_name/${id}`, body});
    return data;
}
