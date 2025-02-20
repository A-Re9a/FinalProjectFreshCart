import React, { useState } from 'react'
import { Input } from "@heroui/react";
import { Button } from "@heroui/react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function Register() {
    const [IsLoading, setIsLoading] = useState(false);
    const [errMsg, setErrMsg] = useState("");
    const navigate = useNavigate();
    const initialValues = {
        name: "",
        email: "",
        password: "",
        rePassword: "",
        phone: "",
    };
    
    const onSubmit = () => {
        setErrMsg("")
        setIsLoading(true)
        axios.post("https://ecommerce.routemisr.com/api/v1/auth/signup", values)
        
        

        
            .then((res) => {
                navigate("/Login")
                localStorage.setItem("name", res.data.user.name);
                localStorage.setItem("email", res.data.user.email);
                
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
            name: Yup.string().required("Name is required").min(3, "Name must be at least 3 characters").max(20, "Name must be at most 20 characters"),
            email: Yup.string().required("Email is required").matches(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/, "Invalid email address"),
            password: Yup.string().required("Password is required").min(6, "Password must be at least 6 characters"),
            rePassword: Yup.string().required("rePassword is required").oneOf([Yup.ref("password")], "Password does not match"),
            phone: Yup.string().required("Phone is required").matches(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/, "Invalid phone number"),
        })

    });
    return (
        <>
            <div className='my-10'>
                <h1 className='text-center text-3xl font-bold text-gray-600 border-b border-gray-400'>Register</h1>
                <form onSubmit={handleSubmit}>
                    <div className="w-2/3 mx-auto grid grid-cols-2 gap-4">
                        <Input isInvalid={touched.name && errors.name} errorMessage={errors.name} onBlur={handleBlur} onChange={handleChange} value={values.name} name='name' variant='bordered' className='col-span-2' label="Name" type="name" />
                        <Input isInvalid={touched.email && errors.email} errorMessage={errors.name} onBlur={handleBlur} onChange={handleChange} value={values.email} name='email' variant='bordered' className='col-span-2' label="Email" type="email" />
                        <Input isInvalid={touched.password && errors.password} errorMessage={errors.name} onBlur={handleBlur} onChange={handleChange} value={values.password} name='password' variant='bordered' className='col-span-1' label="Password" type="password" />
                        <Input isInvalid={touched.rePassword && errors.rePassword} errorMessage={errors.name} onBlur={handleBlur} onChange={handleChange} value={values.rePassword} name='rePassword' variant='bordered' className='col-span-1' label="RePassword" type="password" />
                        <Input isInvalid={touched.phone && errors.phone} errorMessage={errors.name} onBlur={handleBlur} onChange={handleChange} value={values.phone} name='phone' variant='bordered' className='col-span-2' label="Phone" type="tel" />
                        <Button isLoading={IsLoading} type='submit' className='col-span-2' color="success">Register</Button>
                        {errMsg && <p className='text-red-500 '>{errMsg}</p>}
                    </div>
                </form>
                <Link to={'/Login'}>
                            <p className='text-center  mt-10'>Already have an account? <span className='text-green-500'>Login</span></p>
                        </Link>
            </div>
        </>
    )
}
