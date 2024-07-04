import * as Yup from 'yup';

export const adminChangePasswordInitialValue = {
    old_password: '',
    new_password: '',
    confirm_password: ''
}

export const adminChangePasswordSchema = Yup.object().shape({
    old_password : Yup.string().required('Required'),
    new_password: Yup.string().min(6, 'enter minimum 6 charactors').required('Required'),
    confirm_password: Yup.string().oneOf([Yup.ref('new_password'), null], 'Passwords must match').required('Required'),
})
