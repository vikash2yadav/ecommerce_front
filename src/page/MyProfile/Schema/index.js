import * as Yup from 'yup';

export const myProfileInitialValues = {
  
}

export const myProfileSchema = Yup.object().shape({
    first_name: Yup.string().min(3, 'should be more than 3 character').max(255, 'less then 255 character').required('Required'),
    last_name: Yup.string().min(3, 'should be more than 3 character').max(255, 'less then 255 character').required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    country_code: Yup.string().required('Required'),
    contact_no: Yup.string().required('Required'),
    birth_date: Yup.date().required('Required'),
    gender: Yup.string().required('Required'),
    language_id: Yup.number().required('Required'),
});