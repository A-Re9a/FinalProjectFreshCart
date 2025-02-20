import { i } from 'framer-motion/m';
import React from 'react'
import OrderItem from '../OrderItem/OrderItem';
import { formatCurrency } from '../Helper/CurrencyHelper';

export default function OrderHistory({orders,index}) {



    return (
        <>
        
            <div key={index}>
                <section className="py-12  relative overflow-hidden shadow bg-green-100">
                    <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
                        <h2 className="font-manrope font-extrabold text-3xl lead-10 text-gray-600 ">Order History</h2>
                        <div className="flex sm:flex-col lg:flex-row sm:items-center justify-between">
                            <div className="flex max-sm:flex-col items-center justify-end gap-2 max-lg:mt-5">
                                <div className="flex rounded-full py-3 px-4 border border-gray-300 relative">
                                    <svg className="relative " width={18} height={20} viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.5 7.75H16.5M11.9213 11.875H11.928M11.9212 14.125H11.9279M9.14676 11.875H9.1535M9.14676 14.125H9.1535M6.37088 11.875H6.37762M6.37088 14.125H6.37762M5.25 4.75V1.75M12.75 4.75V1.75M7.5 18.25H10.5C13.3284 18.25 14.7426 18.25 15.6213 17.3713C16.5 16.4926 16.5 15.0784 16.5 12.25V9.25C16.5 6.42157 16.5 5.00736 15.6213 4.12868C14.7426 3.25 13.3284 3.25 10.5 3.25H7.5C4.67157 3.25 3.25736 3.25 2.37868 4.12868C1.5 5.00736 1.5 6.42157 1.5 9.25V12.25C1.5 15.0784 1.5 16.4926 2.37868 17.3713C3.25736 18.25 4.67157 18.25 7.5 18.25Z" stroke="#111827" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <input readOnly type="text" name="from-dt" id="from-dt" className="font-semibold text-sm text-gray-600 bg-transparent focus:outline-0 appearance-none flex flex-row-reverse cursor-pointer w-28 placeholder-gray-900" placeholder={new Date(orders.createdAt).toLocaleDateString("en-US", { day: "numeric", month:"long", year: "2-digit" })} />
                                </div>
                                <p className="font-medium text-lg leading-8 text-gray-600">To</p>
                                <div className="flex rounded-full py-3 px-4 border border-gray-300 relative">
                                    <svg className="relative " width={18} height={20} viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.5 7.75H16.5M11.9213 11.875H11.928M11.9212 14.125H11.9279M9.14676 11.875H9.1535M9.14676 14.125H9.1535M6.37088 11.875H6.37762M6.37088 14.125H6.37762M5.25 4.75V1.75M12.75 4.75V1.75M7.5 18.25H10.5C13.3284 18.25 14.7426 18.25 15.6213 17.3713C16.5 16.4926 16.5 15.0784 16.5 12.25V9.25C16.5 6.42157 16.5 5.00736 15.6213 4.12868C14.7426 3.25 13.3284 3.25 10.5 3.25H7.5C4.67157 3.25 3.25736 3.25 2.37868 4.12868C1.5 5.00736 1.5 6.42157 1.5 9.25V12.25C1.5 15.0784 1.5 16.4926 2.37868 17.3713C3.25736 18.25 4.67157 18.25 7.5 18.25Z" stroke="#111827" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <input readOnly  type="text" name="to-dt" id="to-dt" className="font-semibold  text-sm text-gray-600 bg-transparent focus:outline-0 appearance-none flex flex-row-reverse cursor-pointer w-28 placeholder-gray-900" placeholder={new Date().toLocaleDateString("en-US", { day: "numeric", month: "long", year: "2-digit" })} />
                                </div>
                            </div>
                        </div>
                        <div className="mt-7 border border-gray-300 ">
                            <div className="flex max-md:flex-col sm:flex-row items-center justify-between py-3 px-3 sm:px-0">
                                <div className="data">
                                    <p className="font-medium text-lg leading-8 text-gray-600 whitespace-nowrap">Order : #{orders.id}</p>
                                    <p className="font-medium text-lg leading-8 text-gray-600 mt-3 whitespace-nowrap">Order Payment : {orders.paidAt=orders.paidAt?" Cash" : new Date(orders.paidAt).toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" })}</p>
                                </div>
                                <div className="data">
                                    <p className="font-medium text-lg leading-8 text-gray-600 whitespace-nowrap">Shipping Address
                                    :{orders.shippingAddress.city}</p>
                                    <p className="font-medium text-lg leading-8 text-gray-600 mt-3 whitespace-nowrap">details : {orders.shippingAddress.details}</p>
                                </div>
                            </div>
                            
                            <svg className="my-9 w-full" xmlns="http://www.w3.org/2000/svg" width={1216} height={2} viewBox="0 0 1216 2" fill="none">
                                <path d="M0 1H1216" stroke="#D1D5DB" />
                            </svg>
                            <div className="px-3 md:px-11 ">
                            <div className="flex flex-col">
                            {
                            orders.cartItems.map((order, index) => {
                                return (
                                    <OrderItem key={index} order={order}/>
                                )
                            })

                        }
                        </div>
                                <div className="flex items-center justify-around w-full  sm:pl-28 lg:pl-0">
                                    <div className="flex flex-col justify-center items-start max-sm:items-center">
                                        <p className="font-normal text-lg text-gray-500 leading-8 mb-2 text-left whitespace-nowrap">
                                            Status</p>
                                        <p className="font-semibold text-lg leading-8  text-left whitespace-nowrap">
                                        {orders.isDelivered ? <span className="text-green-500">Delivered</span> : <span className="text-red-500">Not Delivered</span>}</p>
                                    </div>
                                    <div className="flex flex-col justify-center items-start max-sm:items-center">
                                        <p className="font-normal text-lg text-gray-500 leading-8 mb-2 text-left whitespace-nowrap">
                                            Is Paid</p>
                                        <p className="font-semibold text-lg leading-8 text-gray-600 text-left whitespace-nowrap">{orders.isPaid ? <span className="text-green-500">Paid</span> : <span className="text-red-500">Not Paid</span>}</p>
                                        <p className="font-normal text-xl leading-8 text-gray-500 ">{orders.isPaid ? "" : "  Will be paid after delivery"}</p>
                                    </div>
                                </div>
                            </div>
                            <svg className="my-9 w-full" xmlns="http://www.w3.org/2000/svg" width={1216} height={2} viewBox="0 0 1216 2" fill="none">
                                <path d="M0 1H1216" stroke="#D1D5DB" />
                            </svg>

                            <div className="px-3 md:px-11 flex items-center justify-between max-sm:flex-col-reverse">
                                <div className="flex max-sm:flex-col-reverse items-center">
                                    <p className="font-normal text-xl  leading-8 text-gray-500 sm:pl-8">Payment Method Type : {orders.paymentMethodType === "card" ?<span className="text-green-500">Credit Card</span> :<span className="text-blue-500">Cash</span> }</p>
                                </div>
                                <p className="font-medium text-xl leading-8 text-gray-600 max-sm:py-4"> <span className="text-gray-500">Total
                                    Price: </span> {formatCurrency(orders.totalOrderPrice)}</p>
                            </div>
                        </div>

                    </div>
                </section>



            </div>
        </>
    )
}
