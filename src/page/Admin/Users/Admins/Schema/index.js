import * as Yup from 'yup';

export const addAdminInitialValue = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    birth_date: '',
    gender: '',
    contact_no: '',
    language_id: ''
}

export const addAdminSchema = Yup.object().shape({
    first_name: Yup.string().min(3, 'should be upto 3 character' ).required('Required'),
    last_name: Yup.string().min(3, 'should be upto 3 character' ).required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(6, 'should be upto 6 character' ).required('Required'),
    birth_date: Yup.date().required('Required'),
    gender: Yup.string().required('Required'),
    contact_no: Yup.string().required('Required'),
    language_id: Yup.number().required('Required'),
})

export const updateAdminSchema = Yup.object().shape({
    first_name: Yup.string().min(3, 'should be upto 3 character' ).required('Required'),
    last_name: Yup.string().min(3, 'should be upto 3 character' ).required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    birth_date: Yup.date().required('Required'),
    gender: Yup.string().required('Required'),
    contact_no: Yup.string().required('Required'),
    // language_id: Yup.number().required('Required'),
})


export const genders = [
    {  name: 'Male', id: 'male' },
    { name: 'Female', id: 'female' },
    {  name: 'Others', id: 'others' },
];
