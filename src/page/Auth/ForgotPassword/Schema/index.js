import * as Yup from 'yup';

export const forgotPasswordInitialValues = {
    email: ''
}

export const forgotPasswordSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required')
});


export const otpCheckInitialValues = {
    otp: ''
}

export const otpCheckSchema = Yup.object().shape({
    otp: Yup.number().required('Required')
});