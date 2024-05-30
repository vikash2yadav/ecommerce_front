import * as Yup from 'yup';

export const registerInitialValues = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
}

export const registerSchema = Yup.object().shape({
    first_name: Yup.string().min(3, 'should be more than 3 character').max(255, 'less then 255 character').required('Required'),
    last_name: Yup.string().min(3, 'should be more than 3 character').max(255, 'less then 255 character').required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(6, 'should be upto 6 character' ).required('Required')
});