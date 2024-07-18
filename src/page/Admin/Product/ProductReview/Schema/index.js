import * as Yup from 'yup'

export const addProductReviewInitialValue = {
    user_id: '',
    product_id: '',
    rating: '',
    comment: ''
}

export const addProductReviewSchema = Yup.object({
    user_id: Yup.number().required('Required'),
    product_id: Yup.number().required('Required'),
    rating: Yup.number().required('Required'),
    comment: Yup.string().required('Required'),
})