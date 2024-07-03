import * as Yup from 'yup'

export const addProductInitialValue = {

}

export const addProductSchema = Yup.object({
    name: Yup.string().min(3, 'enter minimum 3 charactors').required('Required'),
})