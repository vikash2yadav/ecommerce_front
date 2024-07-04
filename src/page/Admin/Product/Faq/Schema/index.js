import * as Yup from 'yup'

export const addProductFaqInitialValue = {
    product_id: '',
    product_variant_id: '',
    question: '',
    answer: ''
}

export const addProductFaqSchema = Yup.object({
    product_id: Yup.number().required('Required'),
    product_variant_id: Yup.number().required('Required'),
    question: Yup.string().min(6, 'enter question with minimum 6 charactors').required('Required'),
    answer: Yup.string().min(1, 'enter answer with minimum 1 charactors').required('Required'),
})