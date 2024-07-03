import * as Yup from 'yup';

export const addAddressInitialValues = {
    country_id: '',
    user_name: '',
    contact_no: '',
    street: '',
    area: '',
    pin_code: '',
    city_id: '',
    state_id: '',
    is_default: false,
    instruction: ''
}

export const addAddressSchema = Yup.object().shape({
    country_id: Yup.number().required('Required'),
    user_name: Yup.string().required('Required'),
    contact_no: Yup.number().required('Required'),
    street: Yup.string().required('Required'),
    pin_code: Yup.string().required('Required'),
    area: Yup.string().required('Required'),
    city_id: Yup.number().required('Required'),
    state_id: Yup.number().required('Required'),
    is_default : Yup.boolean()
});