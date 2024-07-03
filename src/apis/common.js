import {callApi} from './index';

export async function getCityNameById (id, body) {
    return await callApi({method: "POST" ,url: `http://localhost:8000/user_address/city_name/${id}`, body});
}

export async function getStateNameById (id, body) {
    return await callApi({method: "POST", url: `http://localhost:8000/user_address/state_name/${id}`, body});
}
