import {callApi} from './index';

export async function addInquiryByCustomer (body) {
    return await callApi({method: "POST", url: 'http://localhost:8000/inquiry/my/add', body});
}