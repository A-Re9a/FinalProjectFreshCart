import React, { useState } from 'react'
import { Input } from "@heroui/react";
import { Button } from "@heroui/react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Bounce, toast } from "react-toastify";

export default function UpdatePassword() {
    const [IsLoading, setIsLoading] = useState(false);
    const [errMsg, setErrMsg] = useState('');
    const [updat, setupdat] = useState('');
    const navigate = useNavigate();
    const initialValues = {
        currentPassword: "",
        password: "",
        rePassword: "",
    };

    const onSubmit = () => {
        setErrMsg("")
        setIsLoading(true)
        axios.put("https://ecommerce.routemisr.com/api/v1/users/changeMyPassword",values,{headers:{token:localStorage.getItem('token')}})
            .then((res) => {
                console.log(res);
                navigate("/");
                setupdat(res.data.message);
                if(res.data.message == "success"){
                            toast.success("Your Password updated successfully", {
                                position: "top-right",
                                autoClose: 3000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "light",
                                transition: Bounce,
                                });
                        }
            })
            .catch((err) => {
                setErrMsg(err.response.data.message)
                console.log(err);
            })
            .finally(() => {
                setIsLoading(false)
            })
    };

    
    const { handleSubmit, values, handleChange, errors, touched, handleBlur } = useFormik({
        initialValues,
        onSubmit,
        validationSchema: Yup.object({
            currentPassword: Yup.string().required("Password is required").min(6, "Password must be at least 6 characters"),
            password: Yup.string().required("Password is required").min(6, "Password must be at least 6 characters"),
            rePassword: Yup.string().required("rePassword is required").oneOf([Yup.ref("password")], "Password does not match"),
        })

    });
    return (
        <>
            <div className='my-10'>
                <h1 className='text-2xl text-center text-gray-600 border-b border-gray-400'>Update Profile <span className='text-success'>{localStorage.getItem('Name')}</span></h1>
                <form onSubmit={handleSubmit}>
                    <div className="w-2/3 mx-auto grid grid-cols-2 gap-4">
                    <Input isInvalid={touched.currentPassword && errors.currentPassword} errorMessage={errors.name} onBlur={handleBlur} onChange={handleChange} value={values.currentPassword} name='currentPassword' variant='bordered' className='col-span-2' label="Current Password" type="currentPassword" />
                        <Input isInvalid={touched.password && errors.password} errorMessage={errors.name} onBlur={handleBlur} onChange={handleChange} value={values.password} name='password' variant='bordered' className='col-span-1' label="Password" type="password" />
                        <Input isInvalid={touched.rePassword && errors.rePassword} errorMessage={errors.name} onBlur={handleBlur} onChange={handleChange} value={values.rePassword} name='rePassword' variant='bordered' className='col-span-1' label="RePassword" type="password" />
                        <Button isLoading={IsLoading} type='submit' className='col-span-2' color="success">Update</Button>
                        {errMsg && <p className=' text-red-600'>{errMsg}</p>}
                        {updat && <p className=' text-green-600'>{updat}</p>}
                    </div>
                </form>
            </div>
            <Link to={'/Profile'}>
                <p className='text-center  mt-10'>Want to update your Information? <span className='text-green-500'>Your Information</span></p>
            </Link>
        </>
    )
}

