import {callApi} from './index';

export async function getLanguageList (body) {
    return await callApi({method: "POST", url: 'http://localhost:8000/language/get/list' , body});
}
