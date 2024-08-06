import * as Yup from 'yup'

export const addOrderInitialValue = {
    user_id: '',
    orderd_date: '',
    items:[
        {
            
        }
    ]
}

export const addOrderSchema = Yup.object({
    name: Yup.string().min(1, 'enter minimum 1 charactors').required('Required'),
    sku: Yup.string().min(1, 'enter minimum 1 charactors').required('Required'),
    vendor_id: Yup.number().required('Required'),
    category_id: Yup.number().required('Required'),
    strike_price: Yup.number().required('Required'),
    price: Yup.number().required('Required'),
    stock: Yup.number().required('Required'),
});