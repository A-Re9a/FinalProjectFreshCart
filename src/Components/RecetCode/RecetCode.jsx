import React, { useState } from 'react'
import { Input } from "@heroui/react";
import { Button } from "@heroui/react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import ResetPassword from '../ResetPassword/ResetPassword';

export default function RecetCode() {
    const [IsLoading, setIsLoading] = useState(false);
    const [errMsg, setErrMsg] = useState("");
    const [statusMsg, setstatusMsg] = useState("");
    const navigate = useNavigate();
    const initialValues = {
        resetCode: "",
    };
    const onSubmit = () => {
        setErrMsg("")
        setstatusMsg("")
        setIsLoading(true)
        axios.post("https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode", values)
            .then((data) => {
                setstatusMsg(data.data.status)
                console.log(data);

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
            resetCode: Yup.string().required("Reset Code is required").min(4, "Reset Code must be at least 4 characters"),
        })
    });
    return (
        <>
            {statusMsg ? <ResetPassword />
                :
                <>
                    <div className='my-10'>
                        <div className='flex items-center justify-center my-5'>
                            <span class="rounded-full h-16 w-16 flex items-center justify-center text-white bg-green-500">Step 2</span>
                        </div>
                        <h1 className='text-center text-2xl font-bold mb-5'>We send a<span className='text-green-500'> Reset Code</span>  to your email</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="w-2/3 mx-auto grid grid-cols-2 gap-4">
                                <Input isInvalid={touched.resetCode && errors.resetCode} errorMessage={errors.name} onBlur={handleBlur} onChange={handleChange} value={values.resetCode} name='resetCode' variant='bordered' className='col-span-2' label="Reset Code" type="resetCode" />
                                <Button isLoading={IsLoading} type='submit' className='col-span-2' color="success">Submit</Button>
                                {errMsg && <p className='text-red-500 '>{errMsg}</p>}
                                {statusMsg && <p className='text-green-500 '>{statusMsg}</p>}
                            </div>
                        </form>

                    </div>
                    <Link to={'/ForgotPassword'}>
                        <p className='text-center'>Did not receive a code? <span className='text-green-500'>Resend</span></p>
                    </Link>
                    <Link to={'/Login'}>
                        <p className='text-center mt-4'>Already have an account? <span className='text-green-500'>Submit</span></p>
                    </Link>

                </>
            }

        </>
    )
}


