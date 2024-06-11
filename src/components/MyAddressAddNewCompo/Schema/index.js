import * as Yup from 'yup';

export const addAddressInitialValues = {
    country: '',
    first_name: '',
    last_name: '',
    contact_no: '',
    address: '',
    city: '',
    state: ''
}

export const addAddressSchema = Yup.object().shape({
    country: Yup.number().required('Required'),
    first_name: Yup.string().required('Required'),
    last_name: Yup.string().required('Required'),
    contact_no: Yup.number().required('Required'),
    address: Yup.string().required('Required'),
    city: Yup.number().required('Required'),
    state: Yup.number().required('Required'),
});