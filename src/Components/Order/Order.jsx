import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../Contexts/AuthContext'
import axios from 'axios'
import OrderHistory from '../OrderHistory/OrderHistory'
import LoadingScreen from '../LoadingScreen/LoadingScreen'

export default function Order() {
    const { userId } = useContext(AuthContext)
    const [userOrders, setUserOrders] = useState("")
    const [isLoadin, setisLoadin] = useState(false)
    useEffect(() => {
        getUserOrders();
    }, [])
    async function getUserOrders() {
        setisLoadin(true);
        const { data } = await axios.get("https://ecommerce.routemisr.com/api/v1/orders/user/" + userId)
        setUserOrders(data);
        setisLoadin(false);
        console.log(data);
        
    }
    if (isLoadin) {
        return <LoadingScreen />
    }
    return (
        <>
            <h2 class="font-manrope font-bold text-4xl leading-10 text-gray-600 text-center">
                Payment Successful
            </h2>
            <p class="mt-4 font-normal text-lg leading-8 text-gray-500 mb-11 text-center">Thanks, for making a purchase
                you can
                check our order summary from below</p>
            <div className='grid grid-cols-1  gap-4'>
                {
                    userOrders && userOrders.map((orders, index) => <OrderHistory orders={orders} index={index} />)
                }
            </div>            
        </>
    )
}
