import * as Yup from 'yup'

export const addProductInitialValue = {
    name: '',
    title: '',
    description: '',
    vendor_id: '',
    category_id: '',
}

export const addProductSchema = Yup.object({
    name: Yup.string().min(1, 'enter minimum 1 charactors').required('Required'),
    title: Yup.string().min(1, 'enter minimum 1 charactors').required('Required'),
    description: Yup.string().required('Required'),
    vendor_id: Yup.number().required('Required'),
    category_id: Yup.number().required('Required'),
});