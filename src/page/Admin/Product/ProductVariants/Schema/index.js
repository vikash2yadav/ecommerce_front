import * as Yup from 'yup';

export const addProductVariantInitialValue = {
    variants: [{
        name: '',
        sku: '',
        strike_price: 0,
        price: 0,
        tag: '',
        stock: 0,
        keywords: '',
        attributes: [{
            attribute_id: '',
            attribute_value: ''
        }],
        highlights: [ { content: '' } ],
        specifications: [{
            specification_category_id: '',
            title: '',
            value: ''
        }]
    }]
};

export const updateProductVariantInitialValue = {
    name: '',
    sku: '',
    strike_price: 0,
    price: 0,
    tag: '',
    stock: 0,
    keywords: '',
    attributes: [{
        attribute_id: '',
        attribute_value: ''
    }],
    highlights: [{ content: '' }],
    specifications: [{
        specification_category_id: '',
        title: '',
        value: ''
    }]
};


export const addProductVariantSchema = Yup.object().shape({
    variants: Yup.array().of(
        Yup.object().shape({
            name: Yup.string().required('Product Name is required'),
            sku: Yup.string().required('SKU is required'),
            strike_price: Yup.number().min(0, 'Strike Price must be greater than or equal to 0').required('Strike Price is required'),
            price: Yup.number().min(0, 'Price must be greater than or equal to 0').required('Price is required'),
            tag: Yup.string().required('Tag is required'),
            stock: Yup.number().min(0, 'Stock must be greater than or equal to 0').required('Stock is required'),
            keywords: Yup.string().required('Keywords are required'),
            attributes: Yup.array().of(
                Yup.object().shape({
                    attribute_id: Yup.string().required('Attribute ID is required'),
                    attribute_value: Yup.string().required('Attribute Value is required')
                })
            ),
            highlights: Yup.array().of(
                Yup.object().shape({
                    content: Yup.string().required('Highlight is required'),
                })
            ),
            specifications: Yup.array().of(
                Yup.object().shape({
                    specification_category_id: Yup.string().required('Specification category is required'),
                    title: Yup.string().required('Title is required'),
                    value: Yup.string().required('Value is required'),
                })
            ),
        })
    )
});

export const tags = [
    { value: 'tag1', label: 'Tag 1' },
    { value: 'tag2', label: 'Tag 2' },
    // Add more tags as required
];
