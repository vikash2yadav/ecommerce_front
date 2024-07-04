import * as Yup from 'yup';

export const changePasswordInitialValues = {
    old_password: '',
    new_password: '',
    confirm_password: '',
}

    export const changePasswordSchema = Yup.object().shape({
        old_password: Yup.string().required('Enter current password'),
        new_password: Yup.string().min(6, 'should be more than 6 character').max(12, 'less then 12 character').required('Required'),
        confirm_password: Yup.string().oneOf([Yup.ref('new_password'), null], 'Passwords must match').required('Required'),
    });