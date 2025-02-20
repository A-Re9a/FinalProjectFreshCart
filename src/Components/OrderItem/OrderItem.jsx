import React from 'react'
import { formatCurrency } from '../Helper/CurrencyHelper'

export default function OrderItem({ order, index }) {

    return (
        <>
            <div key={index}>
                <div className='grid grid-cols-12 gap-x-5 mt-5'>
                    <div className="col-span-3 lg:col-span-2  sm:col-span-12  max-sm:mx-auto ">
                        <img src={order.product.imageCover} alt={order.product.title} className="max-sm:mx-auto object-cover" />
                    </div>
                    <div className="col-span-8 lg:col-span-7 md:col-span-6 sm:col-span-5 ">
                        <h6 className="font-manrope font-semibold text-2xl leading-9 text-black mb-3 whitespace-nowrap">
                            {(order.product.title).length > 30 ? order.product.title.slice(0, 30) + '...' : order.product.title}</h6>
                        <p className="font-normal text-lg leading-8 text-gray-500 mb-8 whitespace-nowrap">By: {order.product.brand.name}</p>
                        <div className="flex items-center max-sm:flex-col gap-x-10 gap-y-3">
                            <span className="font-normal text-lg leading-8 text-gray-500 whitespace-nowrap">category: {order.product.category.name}</span>
                            <span className="font-normal text-lg leading-8 text-gray-500 whitespace-nowrap">Qty: {order.count}</span>
                            <p className="font-semibold text-xl leading-8 text-black whitespace-nowrap">Price: <span className="font-semibold text-xl leading-8 text-blue-500 whitespace-nowrap"> {formatCurrency(order.price)}</span></p>
                        </div>
                        <div className="flex items-center mt-3">
                            {
                                [1, 2, 3, 4, 5].map((rate, index) => {
                                    return order.product.ratingsAverage >= rate ?
                                        <svg key={index} aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        :
                                        <svg key={index} aria-hidden="true" className="h-5 w-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                })
                            }
                            <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">{order.product.ratingsAverage}</span>
                        </div>
                    </div>
                </div>
                <svg className="my-9 w-full" xmlns="http://www.w3.org/2000/svg" width={1216} height={2} viewBox="0 0 1216 2" fill="none">
                    <path d="M0 1H1216" stroke="#D1D5DB" />
                </svg>
            </div>
        </>
    )
}
