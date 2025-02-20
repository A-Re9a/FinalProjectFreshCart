import React, { useEffect, useState } from 'react'
import { formatCurrency } from '../Helper/CurrencyHelper'
import { Button } from '@heroui/react';



export default function CartProduct({ product, index, updateCart, removeSpasificCartItem }) {
    const [isLoading, setisLoading] = useState(false)
    const [decrementLoading, setdecrementLoading] = useState(false)
    const [incrementLoading, setincrementLoading] = useState(false)
    const [productCount, setproductCount] = useState(product.count)

    useEffect(() => {
        setproductCount(product.count);
    }, [product.count])

    return (
        <>
            <section className=" relative bg-green-100 border border-gray-100 shadow-md" key={index} >
                <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto ">
                    <div className="rounded-3xl border-2 border-gray-200 p-4 lg:p-8 grid grid-cols-12 mb-8 max-lg:max-w-lg max-lg:mx-auto gap-y-4 ">
                        <div className="col-span-12 lg:col-span-4 img box ">
                            <img src={product.product.imageCover} alt="speaker image" className="max-lg:w-full rounded-lg object-cover hover:scale-105 transition duration-500" />
                        </div>
                        <div className="col-span-12 lg:col-span-8 detail w-full pl-4">
                            <div className="flex items-center justify-between w-full mb-4">
                                <h5 className="font-manrope font-bold text-2xl leading-9 text-gray-900">{product.product.title}</h5>
                                <Button isLoading={isLoading} onPress={() => removeSpasificCartItem(product.product._id, setisLoading)} className="rounded-full bg-transparent group flex items-center justify-center p-2.5 transition-all duration-500 hover:bg-gray-50 focus-within:outline-gray-300">
                                    <svg width={34} height={34} viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle className="fill-red-50 transition-all duration-500 group-hover:fill-red-400" cx={17} cy={17} r={17} fill />
                                        <path className="stroke-red-500 transition-all duration-500 group-hover:stroke-white" d="M14.1673 13.5997V12.5923C14.1673 11.8968 14.7311 11.333 15.4266 11.333H18.5747C19.2702 11.333 19.834 11.8968 19.834 12.5923V13.5997M19.834 13.5997C19.834 13.5997 14.6534 13.5997 11.334 13.5997C6.90804 13.5998 27.0933 13.5998 22.6673 13.5997C21.5608 13.5997 19.834 13.5997 19.834 13.5997ZM12.4673 13.5997H21.534V18.8886C21.534 20.6695 21.534 21.5599 20.9807 22.1131C20.4275 22.6664 19.5371 22.6664 17.7562 22.6664H16.2451C14.4642 22.6664 13.5738 22.6664 13.0206 22.1131C12.4673 21.5599 12.4673 20.6695 12.4673 18.8886V13.5997Z" stroke="#EF4444" strokeWidth="1.6" strokeLinecap="round" />
                                    </svg>
                                </Button>
                            </div>

                            <a href="javascript:;" className="text-indigo-600"> <img className="w-[100px]" src={product.product.brand.image} alt="" /></a>
                            <div className="mt-2 mb-5 ">
                                <div className="flex items-center mt-3">
                                    {
                                        [1, 2, 3, 4, 5].map((rate, index) => {
                                            return product.product.ratingsAverage >= rate ?
                                                <svg key={index} aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                :
                                                <svg key={index} aria-hidden="true" className="h-5 w-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>

                                        })
                                    }

                                    <span className="mr-2 ml-3 rounded bg-yellow-200 text-slate-500 px-2.5 py-0.5 text-xs font-semibold">{product.product.ratingsAverage}</span>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center gap-1 ">
                                    <Button isLoading={incrementLoading} onPress={() => updateCart(product.product._id, product.count - 1, setincrementLoading, setdecrementLoading, product.count)} className="group rounded-[50px] border border-gray-200 shadow-sm shadow-transparent p-2.5 flex items-center justify-center bg-white transition-all duration-500 hover:shadow-gray-200 hover:bg-gray-50 hover:border-gray-300 focus-within:outline-gray-300">
                                        <svg className="stroke-gray-900  transition-all duration-500 group-hover:stroke-black w-[18px] h-[19px]" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.5 9.5H13.5" stroke strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </Button>
                                    <input type="text" id="number" className="border border-gray-200 rounded-full w-10 aspect-square outline-none text-gray-900 font-semibold text-sm py-1.5 px-3 bg-gray-100  text-center" value={productCount} onChange={(e) => setproductCount(e.target.value)} onBlur={(e) => updateCart(product.product._id, e.target.value, setincrementLoading, setdecrementLoading, product.count)} min={1} />
                                    <Button isLoading={decrementLoading} onPress={() => updateCart(product.product._id, product.count + 1, setincrementLoading, setdecrementLoading, product.count)} className="group rounded-[50px] border border-gray-200 shadow-sm shadow-transparent p-2.5 flex items-center justify-center bg-white transition-all duration-500 hover:shadow-gray-200 hover:bg-gray-50 hover:border-gray-300 focus-within:outline-gray-300">
                                        <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black w-[18px] h-[19px]" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.75 9.5H14.25M9 14.75V4.25" stroke strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </Button>
                                </div>
                                <h6 className="text-indigo-600 font-manrope font-bold text-2xl leading-9 text-right ">{formatCurrency(product.price)}</h6>
                            </div>

                            <div className="flex flex-col mt-10 md:flex-row items-center md:items-center justify-between lg:px-6 pt-6 border-t border-gray-200  max-lg:max-w-lg max-lg:mx-auto">
                                <h5 className="text-gray-900 font-manrope font-semibold text-2xl leading-9 w-full max-md:text-center max-md:mb-4">Subtotal</h5>
                                <div className="flex items-center justify-between gap-5 ">
                                    <h6 className="font-manrope font-bold text-3xl lead-10 text-indigo-600">{formatCurrency(product.count * product.price)}</h6>
                                </div>
                            </div>
                            <div className="max-lg:max-w-lg max-lg:mx-auto">
                                <p className="font-normal text-base leading-7 text-gray-500 text-center mb-5 mt-6">Shipping taxes, and discounts
                                    calculated
                                    at checkout</p>
                            </div>
                        </div>
                    </div>

                </div>

            </section>

        </>
    )
}
