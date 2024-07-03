import {callApi} from './index';

export async function getVendorList (body) {
    return await callApi({method: 'POST', url: 'http://localhost:8000/partner/vendor/get/list', body});
}

export async function getDeliveryPartnerList (body) {
    return await callApi({method: 'POST', url: 'http://localhost:8000/partner/delivery_partner/get/list', body});
}

export async function addPartnerApi (body) {
    return await callApi({method: 'POST', url: 'http://localhost:8000/partner/delivery_partner/add', body});
}

export async function addVendorApi (body) {
    return await callApi({method: 'POST', url: 'http://localhost:8000/partner/vendor/add', body});
}