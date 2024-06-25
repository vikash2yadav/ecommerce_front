import React, {useContext} from 'react'
import { Input } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useFormik } from 'formik'
import { CommonsContext } from '../../context/CommonContext'
import { contactInitialValues, contactSchema } from './Schema';
import { addInquiryByCustomer } from '../../apis/inquiry'

const Contact = (props) => {
    const { setSnackbarAlertOpen, setSnackbarContent } = useContext(CommonsContext);

    const formik = useFormik({
        initialValues: contactInitialValues,
        validationSchema: contactSchema,
        onSubmit: async (values) => {
            let data = await addInquiryByCustomer(values);
            if (data.status === 200) {
                formik.resetForm();
                setSnackbarAlertOpen(true);
                setSnackbarContent({
                    type: 'success',
                    message: data?.data?.message
                })
            } else {
                setSnackbarAlertOpen(true);
                setSnackbarContent({
                    type: 'error',
                    message: data?.data?.message
                })
            }
        }
    })

    return (
        <>
            <Header />
            <div className='p-4 mb-10'>
                <div className='flex flex-col justify-center items-center mb-10'>
                    <h1 className='mt-10 text-2xl text-center font-bold hover:underline hover:text-gray-400 mb-3'>Contact US</h1>
                    <p className='text-center'>We are proving online services and products and you can sell your products here.</p>
                </div>
                <hr className='text-gray-200 mb-10' />


                <div className='mt-5' style={styles.formContainer}>
                    <form style={styles.form} onSubmit={formik.handleSubmit}>
                        <p className='text-xs font-semibold mb-1'>We will find you.</p>
                        <div style={styles.inputGroup}>

                            <div className='mb-2'>
                                <Input type="text"
                                    name="name"
                                    onChange={formik.handleChange}
                                    value={formik.values.name}
                                    placeholder='Your Name'
                                    style={styles.input}
                                    className='mx-0' />
                                {formik.errors.name && formik.touched.name ? (
                                    <div className='text-red-600 text-xs'>{formik.errors.name}</div>
                                ) : null}
                            </div>

                            <div className='mb-2'>
                                <Input type="email"
                                    name="email"
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                    placeholder='Your Email'
                                    style={styles.input}
                                    className='mx-0' />
                                {formik.errors.email && formik.touched.email ? (
                                    <div className='text-red-600 text-xs'>{formik.errors.email}</div>
                                ) : null}
                            </div>

                            <div className='mb-2'>
                                <Input type="tel"
                                    name="phone"
                                    onChange={formik.handleChange}
                                    value={formik.values.phone}
                                    placeholder='Phone'
                                    style={styles.input}
                                    className='mx-0' />
                                {formik.errors.phone && formik.touched.phone ? (
                                    <div className='text-red-600 text-xs'>{formik.errors.phone}</div>
                                ) : null}
                            </div>

                            <div className='mb-2'>
                                <TextArea
                                    name="message"
                                    onChange={formik.handleChange}
                                    value={formik.values.message}
                                    className=''
                                    style={{ ...styles.input, height: "100px" }}
                                    placeholder='Message' />
                                {formik.errors.message && formik.touched.message ? (
                                    <div className='text-red-600 text-xs'>{formik.errors.message}</div>
                                ) : null}
                            </div>
                        </div>

                        <div style={{ textAlign: 'center' }}>

                            <button type="submit"
                                className="text-sm bg-yellow-400 hover:bg-yellow-500 shadow-xl w-full h-8 rounded mb-1.5" >
                                Send Message</button>
                        </div>
                    </form>

                </div>
            </div>
            <Footer />
        </>
    )
}

const styles = {
    formContainer: {
        display: 'flex',
        justifyContent: 'center',
    },
    form: {
        width: '100%',
        maxWidth: '500px',
    },
    inputGroup: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '3px',
    },
    input: {
        color: 'black',
        padding: "10px",
        backgroundColor: '#f4f1f1',
        border: '0.5px solid gray',
        borderRadius: "5px",
        width: '100%',
    },
    button: {
        width: "100%",
    }
}

export default Contact