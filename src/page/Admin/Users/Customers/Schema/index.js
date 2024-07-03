import * as Yup from 'yup';

export const addCustomerInitialValue = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    birth_date: '',
    contact_no: '',
    gender: '',
    // role_id: '',
    language_id: ''
}

export const addCustomerSchema = Yup.object().shape({
    first_name: Yup.string().min(3, 'should be upto 3 character' ).required('Required'),
    last_name: Yup.string().min(3, 'should be upto 3 character' ).required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(6, 'should be upto 6 character' ).required('Required'),
    birth_date: Yup.date().required('Required'),
    gender: Yup.number().required('Required'),
    // role_id: Yup.number().required('Required'),
    language_id: Yup.number().required('Required'),
    contact_no: Yup.string().required('Required')
})


export const genders = [
    { id: 1, name: 'Men', value: 'men' },
    { id: 2, name: 'Women', value: 'women' },
    { id: 3, name: 'Others', value: 'others' },
];
