import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Contexts/AuthContext'
import { Button } from '@heroui/react';

export default function () {
    const { Name } = useContext(AuthContext);
    const { setisLoggedin } = useContext(AuthContext);
    const Navigate = useNavigate();


    const LogOut = () => {
        localStorage.removeItem("token");
        setisLoggedin(false);
        Navigate('/Login')
    }

    return (
        <>
            <div className="bg-green-50 overflow-hidden shadow rounded-lg border">
                <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                        Hello,{Name == undefined || Name == null || Name == "" ? localStorage.getItem("Name").split(" ")[0] : Name.split(" ")[0]}
                    </h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">
                        This is some information about the you.
                    </p>
                </div>

                <div className="flex items-center justify-center">
                    <div class="rounded-full h-16 w-16 flex items-center justify-center text-white text-2xl bg-green-500">{Name.split(" ")[0][0] == undefined || Name.split(" ")[0][0] == null || Name.split(" ")[0][0] == "" ? localStorage.getItem("Name").split(" ")[0][0] : Name.split(" ")[0][0]}</div>

                </div>
                <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                    <dl className="sm:divide-y sm:divide-gray-200">
                        <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                Full name
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {Name == undefined || Name == null || Name == "" ? localStorage.getItem("Name") : Name}
                            </dd>
                        </div>
                        <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                Email address
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {localStorage.getItem("Email")}
                            </dd>
                        </div>
                        <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                User Role
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {localStorage.getItem("role")}
                            </dd>
                        </div>
                        <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                Orders History
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                <Link to={'/allOrders'}>
                                    <span className='text-green-500'>Your Orders</span>
                                </Link>
                            </dd>
                        </div>
                        <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                    <Button color="danger" href="#" variant="bordered" className='hover:bg-green-200 ' onPress={() => LogOut()}>Logout</Button>
                                
                            </dt>
                        </div>
                    </dl>
                </div>
            </div>
            <Link to={'/Profile'}>
                <p className='text-center  mt-10'>Want to update your information? <span className='text-green-500'>Your Profile</span></p>
            </Link>
            <Link to={'/UpdatePassword'}>
                <p className='text-center  mt-10'>Want to update your password? <span className='text-green-500'>Your Password</span></p>
            </Link>

        </>
    )
}
