import {callApi} from './index';

// ---------------- vendor apis ----------------------

export async function getVendorList (body) {
    return await callApi({method: 'POST', url: 'http://localhost:8000/partner/vendor/get/list', body});
}

export async function getVendorByIdApi (id, body) {
    return await callApi({method: 'GET', url: `http://localhost:8000/partner/vendor/get/${id}`, body});
}

export async function vendorStatusChangeApi (body) {
    return await callApi({method: 'PUT', url: `http://localhost:8000/partner/vendor/status_change`, body});
}

export async function deleteVendorApi (id, body) {
    return await callApi({method: 'DELETE', url: `http://localhost:8000/partner/vendor/delete/${id}`, body});
}


//   ----------------- delivery partners --------------------

export async function getDeliveryPartnerList (body) {
    return await callApi({method: 'POST', url: 'http://localhost:8000/partner/delivery_partner/get/list', body});
}

export async function getDeliveryPartnerByIdApi (id, body) {
    return await callApi({method: 'GET', url: `http://localhost:8000/partner/delivery_partner/get/${id}`, body});
}

export async function addPartnerApi (body) {
    return await callApi({method: 'POST', url: 'http://localhost:8000/partner/delivery_partner/add', body});
}

export async function addVendorApi (body) {
    return await callApi({method: 'POST', url: 'http://localhost:8000/partner/vendor/add', body});
}