import {callPostApi} from './index';

export async function getLanguageList (body) {
    let data = await callPostApi({url: 'http://localhost:8000/language/get/list' , body});
    return data ;
}
