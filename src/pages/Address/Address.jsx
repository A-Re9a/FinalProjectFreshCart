import React, { useState } from 'react'
import { Input } from "@heroui/react";
import { Button } from "@heroui/react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useParams } from 'react-router-dom';


export default function Address() {
    const [IsLoading, setIsLoading] = useState(false);

    const { CartId } = useParams();

    const initialValues = {
        details: "6 tahreer str.",
        phone: "01010700999",
        city: "Cairo"
    };
    async function checkout() {
        setIsLoading(true);
        const { data } = await axios.post("https://ecommerce.routemisr.com/api/v1/orders/checkout-session/" + CartId, {
            shippingAddress: values
        },
            {
                headers: { token: localStorage.getItem('token') },
                params: { url: "http://localhost:5173" }
            }

        )
        location.href = data.session.url;
        setIsLoading(false);
    }
    const { handleSubmit, values, handleChange, errors, touched, handleBlur } = useFormik({
        initialValues,
        onSubmit: checkout,
        validationSchema: Yup.object({
            details: Yup.string().required("Details is required"),
            phone: Yup.string().required("Phone is required").matches(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/, "Invalid phone number"),
            city: Yup.string().required("City is required")
        })

    });
    return (
        <>
            <div className='my-10'>
                <h1 className='text-center text-2xl font-bold py-5'>Enter Your Address</h1>
                <form onSubmit={handleSubmit}>
                    <div className="w-2/3 mx-auto grid grid-cols-2 gap-4">
                        <Input isInvalid={touched.details && errors.details} errorMessage={errors.details} onBlur={handleBlur} onChange={handleChange} value={values.details} name='details' variant='bordered' className='col-span-2' label="Details" type="text" />
                        <Input isInvalid={touched.phone && errors.phone} errorMessage={errors.phone} onBlur={handleBlur} onChange={handleChange} value={values.phone} name='phone' variant='bordered' className='col-span-2' label="Phone" type="tel" />
                        <Input isInvalid={touched.city && errors.city} errorMessage={errors.city} onBlur={handleBlur} onChange={handleChange} value={values.city} name='city' variant='bordered' className='col-span-2' label="city" type="citytext" />
                        <Button isLoading={IsLoading} type='submit' className='col-span-2' color="primary">Please Order</Button>
                    </div>
                </form>
            </div>
        </>
    )
}
