import * as Yup from 'yup'

export const addProductInitialValue = {
    name: '',
    title: '',
    description: '',
    vendor_id: '',
    category_id: '',
    Vendor_id: ''
}

export const addProductSchema = Yup.object({
    name: Yup.string().min(3, 'enter minimum 3 charactors').required('Required'),
    title: Yup.string().min(6, 'enter minimum 6 charactors').required('Required'),
    description: Yup.string().required('Required'),
    vendor_id: Yup.number().required('Required'),
    category_id: Yup.number().required('Required'),
    Vendor_id: Yup.number().required('Required')
});