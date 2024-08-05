import * as Yup from 'yup'

export const addProductInitialValue = {
    name: '',
    sku: '',
    vendor_id: '',
    category_id: '',
    strike_price: '',
    tag: '',
    price: '',
    stock: '',
    variants:[
        {
            name:'',
            sku: '',
            strike_price: '',
            price: '',
            tag: '',
            stock: '',
            attributes:[{
                attribute_id: '',
                attribute_value: ''
            }, {}, {}]
        }, {}, {}
    ]
}

export const addProductSchema = Yup.object({
    name: Yup.string().min(1, 'enter minimum 1 charactors').required('Required'),
    sku: Yup.string().min(1, 'enter minimum 1 charactors').required('Required'),
    vendor_id: Yup.number().required('Required'),
    category_id: Yup.number().required('Required'),
    strike_price: Yup.number().required('Required'),
    price: Yup.number().required('Required'),
    stock: Yup.number().required('Required'),
});

export const tags = [
    {  name: 'Regular', id: '1' },
    { name: 'Ecommerce`s choice', id: '2' },
    {  name: 'Sale', id: '3' },
    {  name: 'Limited time deal', id: '4' },
]