import {callPostApi} from './index';

export async function getVendorList (body) {
    let data = await callPostApi({url: 'http://localhost:8000/partner/vendor/get/list', body});
    return data;
}

export async function getDeliveryPartnerList (body) {
    let data = await callPostApi({url: 'http://localhost:8000/partner/delivery_partner/get/list', body});
    return data;
}

