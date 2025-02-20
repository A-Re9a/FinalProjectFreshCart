import React, { useContext, useState } from 'react'
import { Input } from "@heroui/react";
import { Button } from "@heroui/react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Bounce, toast } from "react-toastify";
import { AuthContext } from '../../Contexts/AuthContext';


export default function Profile() {
    const {setName,Name}=useContext(AuthContext);
    const [IsLoading, setIsLoading] = useState(false);
    const [errMsg, setErrMsg] = useState('');
    const [updat, setupdat] = useState('');
    const navigate = useNavigate();
    const initialValues = {
        name: "",
        email: "",
        phone: "",
    };

    const onSubmit = () => {
        setErrMsg("")
        setIsLoading(true)
        axios.put("https://ecommerce.routemisr.com/api/v1/users/updateMe/",{values},{headers:{token: localStorage.getItem('token')}})
            .then((res) => {
                console.log(res);
                setName((res.config.data).split("name")[1].split(",")[0].split(':')[1].split('"')[1]);
                localStorage.setItem("Email",(res.config.data).split("email")[1].split(",")[0].split(':')[1].split('"')[1]);
                navigate("/");
                setupdat(res.data.message);
                if(res.data.message == "success"){
                            toast.success("Your profile updated successfully", {
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
            name: Yup.string().required("Name is required").min(3,"Name must be at least 3 characters").max(20, "Name must be at most 20 characters").matches(/^[A-Za-z\s]+$/, "Name must contain only letters and spaces"),
            email: Yup.string().required("Email is required").matches(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/, "Invalid email address"),
            phone: Yup.string().required("Phone is required").min(11, "Phone must be at least 11 characters"),
        })
    });
    return (
        <>
            <div className='my-10'>
                <h1 className='text-2xl text-center text-gray-600 border-b border-gray-400'>Update Profile <span className='text-success'>{Name == undefined|| Name == null || Name == "" ? localStorage.getItem("Name") : Name}</span></h1>
                <form onSubmit={handleSubmit}>
                    <div className="w-2/3 mx-auto grid grid-cols-2 gap-4">
                        <Input isInvalid={touched.name && errors.name} errorMessage={errors.name} onBlur={handleBlur} onChange={handleChange} value={values.name} name='name' variant='bordered' className='col-span-2' label="Name" type="name" />
                        <Input isInvalid={touched.email && errors.email} errorMessage={errors.name} onBlur={handleBlur} onChange={handleChange} value={values.email} name='email' variant='bordered' className='col-span-2' label="Email" type="email" />
                        <Input isInvalid={touched.phone && errors.phone} errorMessage={errors.name} onBlur={handleBlur} onChange={handleChange} value={values.phone} name='phone' variant='bordered' className='col-span-2' label="Phone" type="tel" />
                        <Button isLoading={IsLoading} type='submit' className='col-span-2' color="success">Update</Button>
                        {errMsg && <p className=' text-red-600'>{errMsg}</p>}
                        {updat && <p className=' text-green-600'>{updat}</p>}
                    </div>
                </form>
            </div>
            <Link to={'/UpdatePassword'}>
                <p className='text-center  mt-10'>Want to update your password? <span className='text-green-500'>Your Password</span></p>
            </Link>
        </>
    )
}

