import {callApi} from './index';

export async function getAllSpecificationCategoryListApi (body) {
    return await callApi({method: "POST", url: 'http://localhost:8000/specification_category/get/list', body});
}
