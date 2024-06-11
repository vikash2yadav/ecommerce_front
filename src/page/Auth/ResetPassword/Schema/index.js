import * as Yup from 'yup';

export const resetPasswordInitialValues = {
    new_password: '',
    confirm_passwprd: ''
}

export const resetPasswordSchema = Yup.object().shape({
    new_password: Yup.string().min(6, 'should be upto 6 character' ).required('Required'),
    confirm_password: Yup.string().min(6, 'should be upto 6 character' ).required('Required')
});
