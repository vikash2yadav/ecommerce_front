import * as Yup from 'yup';

export const contactInitialValues = {
    name: '',
    email: '',
    phone: '',
    message: '',
}

export const contactSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    phone: Yup.string().required('Required'),
    message: Yup.string().required('Required')
});