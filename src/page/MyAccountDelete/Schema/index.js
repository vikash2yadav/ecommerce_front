import * as Yup from 'yup';

export const removeAccountInitialValues = {
    email: '',
}

export const removeAccountSchema = Yup.object().shape({
    // email: Yup.string().isEmail().required('Required'),
 });