import * as Yup from 'yup';

export const addCategoryInitialValue = {
    name: '',
    description: ''
}

export const addCategorySchema = Yup.object().shape({
    name: Yup.string().min(3, 'should be upto 3 character' ).required('Required'),
    description: Yup.string().min(3, 'should be upto 3 character' ).required('Required')
})