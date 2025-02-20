import React, { useContext, useState } from 'react'
import { Input } from "@heroui/react";
import { Button } from "@heroui/react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function ResetPassword() {
    const [IsLoading, setIsLoading] = useState(false);
    const [errMsg, setErrMsg] = useState('');
    const navigate = useNavigate();
    const initialValues = {
        email: "",
        newPassword: "",
    };
    const onSubmit = () => {
        setErrMsg("")
        setIsLoading(true)
        axios.put("https://ecommerce.routemisr.com/api/v1/auth/resetPassword", values)
            .then((res) => {
                console.log(res);
                navigate("/Login")
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
        validationSchema: Yup.object({
            email: Yup.string().required("Email is required").matches(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/, "Invalid email address"),
            newPassword: Yup.string().required("Password is required").min(6, "Password must be at least 6 characters"),
        })

    });
    return (
        <>
            <div className='my-10'>
                <div className='flex items-center justify-center my-5'>
                    <span class="rounded-full h-16 w-16 flex items-center justify-center text-white bg-green-500">Step 3</span>
                </div>
                <h1 className='text-center text-2xl font-bold text-gray-600 border-b border-gray-400'>Reset Password</h1>
                <form onSubmit={handleSubmit}>
                    <div className="w-2/3 mx-auto grid grid-cols-2 gap-4">
                        <Input isInvalid={touched.email && errors.email} errorMessage={errors.email} onBlur={handleBlur} onChange={handleChange} value={values.email} name='email' variant='bordered' className='col-span-2' label="Email" type="email" />
                        <Input isInvalid={touched.newPassword && errors.newPassword} errorMessage={errors.newPassword} onBlur={handleBlur} onChange={handleChange} value={values.newPassword} name='newPassword' variant='bordered' className='col-span-2' label="New Password" type="newPassword" />
                        <Button isLoading={IsLoading} type='submit' className='col-span-2' color="success">Login</Button>
                        {errMsg && <p className=' text-red-600'>{errMsg}</p>}
                    </div>
                </form>
                <Link to={'/Register'}>
                    <p className='text-center mt-10'>Don't have an account? <span className='text-green-600'>Sign up</span></p>
                </Link>
            </div>
        </>
    )
}