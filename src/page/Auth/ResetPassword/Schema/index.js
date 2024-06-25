import * as Yup from 'yup';

export const resetPasswordInitialValues = {
    password: '',
    confirm_passwprd: ''
}

export const resetPasswordSchema = Yup.object().shape({
    password: Yup.string().min(6, 'should be upto 6 character' ).required('Required'),
    confirm_password: Yup.string().min(6, 'should be upto 6 character' ).required('Required')
});
