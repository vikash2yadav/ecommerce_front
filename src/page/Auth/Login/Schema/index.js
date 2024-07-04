import * as Yup from 'yup';

export const loginInitialValues = {
    email: '',
    password: '',
}

export const loginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(6, 'should be upto 6 character' ).required('Required')
});