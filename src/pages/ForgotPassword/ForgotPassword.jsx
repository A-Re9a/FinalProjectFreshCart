import React, { useState } from 'react'
import { Input } from "@heroui/react";
import { Button } from "@heroui/react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import RecetCode from '../../Components/RecetCode/RecetCode';


export default function ForgotPassword() {
    const [IsLoading, setIsLoading] = useState(false);
    const [errMsg, setErrMsg] = useState("");
    const [statusMsg, setstatusMsg] = useState("");

    const navigate = useNavigate();
    const initialValues = {
        email: "",
    };
    const onSubmit = () => {
        setErrMsg("")
        setstatusMsg("")
        setIsLoading(true)
        axios.post("https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords", values)
            .then((data) => {
                setstatusMsg(data.data.message)
            })
            .catch((err) => {
                setErrMsg(err.response.data.message)
            })
            .finally(() => {
                setIsLoading(false)
            })

    };
    const { handleSubmit, values, handleChange, errors, touched, handleBlur } = useFormik({
        initialValues,
        onSubmit,
        // validate,
        validationSchema: Yup.object({
            email: Yup.string().required("Email is required").matches(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/, "Invalid email address"),
        })
    });
    return (
        <>{statusMsg ? <RecetCode /> :
            <>
                <div className='my-10 '>
                    <div className='flex items-center justify-center my-5'>
                        <span class="rounded-full h-16 w-16 flex items-center justify-center text-white bg-green-500">Step 1</span>
                    </div>
                    <h1 className='text-2xl font-manrope font-bold text-center text-gray-600 border-b border-gray-400'>Forgot Password ? <span className='text-green-500'>Reset Password</span></h1>
                    <form onSubmit={handleSubmit}>
                        <div className="w-2/3 mx-auto grid grid-cols-2 gap-4">
                            <Input isInvalid={touched.email && errors.email} errorMessage={errors.name} onBlur={handleBlur} onChange={handleChange} value={values.email} name='email' variant='bordered' className='col-span-2' label="Enter Your Email" type="email" />
                            <Button isLoading={IsLoading} type='submit' className='col-span-2' color="success">Submit</Button>
                            {errMsg && <p className='text-red-500 '>{errMsg}</p>}
                            {statusMsg && <p className='text-green-500 '>{statusMsg}</p>}
                        </div>
                    </form>
                </div>
                <Link to={'/Login'}>
                    <p className='text-center'>Already have an account? <span className='text-green-500'>Login</span></p>
                </Link>
            </>
        }
        </>
    )
}
