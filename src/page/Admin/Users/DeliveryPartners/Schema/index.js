import * as Yup from 'yup';

export const addPartnerInitialValue = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    birth_date: '',
    contact_no: '',
    alternative_contact_no: '',
    gender: '',
    language_id: ''
}

export const addPartnerSchema = Yup.object().shape({
    first_name: Yup.string().min(3, 'should be upto 3 character' ).required('Required'),
    last_name: Yup.string().min(3, 'should be upto 3 character' ).required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(6, 'should be upto 6 character' ).required('Required'),
    birth_date: Yup.date().required('Required'),
    alternative_contact_no: Yup.string().required('Required'),
    gender: Yup.string().required('Required'),
    language_id: Yup.number().required('Required'),
    contact_no: Yup.string().required('Required')
})

export const updatePartnerSchema = Yup.object().shape({
    first_name: Yup.string().min(3, 'should be upto 3 character' ).required('Required'),
    last_name: Yup.string().min(3, 'should be upto 3 character' ).required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(6, 'should be upto 6 character' ).required('Required'),
    birth_date: Yup.date().required('Required'),
    gender: Yup.string().required('Required'),
    language_id: Yup.number().required('Required'),
    contact_no: Yup.string().required('Required')
})


export const genders = [
    { name: 'Male', id: 'male' },
    { name: 'Female', id: 'female' },
    { name: 'Others', id: 'others' },
];
