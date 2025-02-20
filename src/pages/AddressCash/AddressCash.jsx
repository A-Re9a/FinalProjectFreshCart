import React, { useContext, useEffect, useState } from 'react'
import { Input } from "@heroui/react";
import { Button } from "@heroui/react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import {  useNavigate, useParams } from 'react-router-dom';
import { Bounce, toast } from "react-toastify";
import { CartContext } from '../../Contexts/CartContext';

export default function AddressCash() {
    const [IsLoading, setIsLoading] = useState(false);
    const {CartId}=useParams();
    const navigate = useNavigate();
    const { getUserCart} = useContext(CartContext);
    useEffect(() => {
        getUserCart();
    }, [checkoutCash]);
    const initialValues = {
        details: "",
        phone: "",
        city: ""
    };
    async function checkoutCash() {

        setIsLoading(true);
        const { data } = await axios.post("https://ecommerce.routemisr.com/api/v1/orders/"+CartId, {
            shippingAddress: values
        },
            {
                headers: { token: localStorage.getItem('token') },
            }

        )
        setIsLoading(false);
        if(data.status == "success")
        {
            toast.success('Order Placed Successfully', {
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
        navigate("/allorders");
        
    }
    const { handleSubmit, values, handleChange, errors, touched, handleBlur } = useFormik({
        initialValues,
        onSubmit: checkoutCash,
        validationSchema: Yup.object({
            details: Yup.string().required("Details is required"),
            phone: Yup.string().required("Phone is required").matches(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/, "Invalid phone number"),
            city: Yup.string().required("City is required")
        })

    });
    return (
        <>
            <div className='my-10'>
                <h1 className='text-center text-2xl font-bold py-5'>Enter Your Address Details to Complete the Your Cash Order</h1>
                <form onSubmit={handleSubmit}>
                    <div className="w-2/3 mx-auto grid grid-cols-2 gap-4">
                        <Input isInvalid={touched.details && errors.details} errorMessage={errors.details} onBlur={handleBlur} onChange={handleChange} value={values.details} name='details' variant='bordered' className='col-span-2' label="Details" type="text" />
                        <Input isInvalid={touched.phone && errors.phone} errorMessage={errors.phone} onBlur={handleBlur} onChange={handleChange} value={values.phone} name='phone' variant='bordered' className='col-span-2' label="Phone" type="tel" />
                        <Input isInvalid={touched.city && errors.city} errorMessage={errors.city} onBlur={handleBlur} onChange={handleChange} value={values.city} name='city' variant='bordered' className='col-span-2' label="city" type="citytext" />
                        <Button isLoading={IsLoading} type='submit'  className='col-span-2' color="primary">Please Order</Button>
                    </div>
                </form>
            </div>
        </>
    )
}
