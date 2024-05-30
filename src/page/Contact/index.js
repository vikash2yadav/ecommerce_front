import React from 'react'
import { Button, Input } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { TfiWorld } from "react-icons/tfi";
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const Contact = (props) => {
    return (
        <>
            <Header />
            <div className='p-4'>
                <div className='flex flex-col justify-center items-center mb-6'>
                    <h1 className='mt-10 text-2xl text-center font-bold hover:underline hover:text-gray-400 mb-3'>Contact US</h1>
                    <p className='text-center'>We are proving online services and products and you can sell your products here.</p>
                </div>
                <hr className='text-gray-200 mb-10' />


                <div className='mt-5' style={styles.formContainer}>
                    <form style={styles.form}>
                        <p className='text-xs font-semibold text-red-600 mb-1'>We will find you.</p>
                        <div style={styles.inputGroup}>
                            <Input type="text"
                                placeholder='Name'
                                style={styles.input}
                                className='mx-0' />
                            <Input type="email"
                                placeholder='Email'
                                style={styles.input}
                                className='mx-0' />
                            <Input type="tel"
                                placeholder='Phone'
                                style={styles.input}
                                className='mx-0' />
                            <TextArea className=''
                                style={{ ...styles.input, height: "100px" }}
                                placeholder='Message' />
                        </div>
                        <div style={{ textAlign: 'center' }}>

                            <Button
                                className="bg-red-600 hover:bg-white hover:text-gray-700 w-full border border-solid border-1 border-red-600 px-4 py-2 font-serif text-white rounded-lg" >
                                Send </Button>
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
        marginBottom: '8px',
        width: '100%',
    },
    button: {
        width: "100%",
    }
}

export default Contact