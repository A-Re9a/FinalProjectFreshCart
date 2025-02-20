import React, { useContext, useState } from 'react'
import { Input } from "@heroui/react";
import { Button } from "@heroui/react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthContext';

export default function Login() {
  const [IsLoading, setIsLoading] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };
  const {setisLoggedin}= useContext(AuthContext)
  const onSubmit =  () => {
    setErrMsg("")
    setIsLoading(true)
    axios.post("https://ecommerce.routemisr.com/api/v1/auth/signin", values)
    .then((res)=>{

      localStorage.setItem("Name", res.data.user.name);
      localStorage.setItem("Email", res.data.user.email);
      localStorage.setItem("role", res.data.user.role);
      
      if( res.data.message == "success" ){
        localStorage.setItem("token", res.data.token);
        setisLoggedin(true);
        navigate(location.pathname == "/Login" ? "/" : location.pathname);
      }
    })
    .catch((err)=>{
      setErrMsg(err.response.data.message)
    })
    .finally(()=>{
      setIsLoading(false)
    })
  };
  const { handleSubmit, values, handleChange, errors, touched, handleBlur } = useFormik({
    initialValues,
    onSubmit,
    validationSchema: Yup.object({
      email: Yup.string().required("Email is required").matches(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/, "Invalid email address"),
      password: Yup.string().required("Password is required").min(6,"Password must be at least 6 characters"),
    })

  });
  return (
    <>
      <div className='my-10'>
        <h1 className='text-center text-3xl font-bold text-gray-600 border-b border-gray-400'>Login to your <span className='text-green-500'>Ecommerce</span> account</h1>
        <form onSubmit={handleSubmit}>
          <div className="w-2/3 mx-auto grid grid-cols-2 gap-4">
            <Input isInvalid={touched.email && errors.email } errorMessage={errors.email} onBlur={handleBlur} onChange={handleChange} value={values.email} name='email' variant='bordered' className='col-span-2' label="Email" type="email" />
            <Input isInvalid={touched.password && errors.password } errorMessage={errors.password} onBlur={handleBlur} onChange={handleChange} value={values.password} name='password' variant='bordered' className='col-span-2' label="Password" type="password" />
            <Button isLoading={IsLoading} type='submit' className='col-span-2'  color="success">Login</Button>
            {errMsg && <p className=' text-red-600'>{errMsg}</p>}
          </div>

        </form>
        <Link  to={'/ForgotPassword'}>
          <p className='text-center  mt-10'>Forgot password? <span className='text-green-600 cursor-pointer'>Reset password</span></p>
        </Link>
        <Link to={'/Register'}>
          <p className='text-center mt-10'>Don't have an account? <span className='text-green-600'>Sign up</span></p>
        </Link>
      </div>
    </>
  )
}
