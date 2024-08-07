import * as Yup from 'yup';

export const adminChangePasswordInitialValue = {
    old_password: '',
    new_password: '',
    confirm_password: ''
}

export const adminProfileUpdateInitialValue = {
    first_name: '',
    last_name: '',
    email: '',
    birth_date: '',
    contact_no: ''
}

export const adminChangePasswordSchema = Yup.object().shape({
    old_password : Yup.string().required('Required *'),
    new_password: Yup.string().min(6, 'enter minimum 6 charactors').required('Required *'),
    confirm_password: Yup.string().oneOf([Yup.ref('new_password'), null], 'Passwords must match').required('Required *'),
})

export const adminProfileUpdateSchema = Yup.object().shape({
    first_name: Yup.string().min(3, 'should be upto 3 character' ).required('Required'),
    last_name: Yup.string().min(3, 'should be upto 3 character' ).required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    birth_date: Yup.date().required('Required'),
    gender: Yup.string().required('Required'),
    contact_no: Yup.number().required('Required'),
})

