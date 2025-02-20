import React, { useContext, useState } from 'react'
import { CartContext } from '../../Contexts/CartContext';
import { Button } from '@heroui/react';
import { formatCurrency } from '../Helper/CurrencyHelper';



export default function WishListProduct({ product, index, removeSpasificwishlistItem }) {

    const { addProductToCart } = useContext(CartContext);
    const [isLoadingCart, setisLoadingCart] = useState(false);
    const [isLoading, setisLoading] = useState(false)
    const [show1, setshow1] = useState(true);


    return (
        <div>

            <div className="flex relative flex-col  shadow-lg rounded-lg p-4 my-3 bg-green-50" key={index}>

                <Button isLoading={isLoading} onPress={() => removeSpasificwishlistItem(product._id, setisLoading)} className="rounded-full  bg-transparent group flex items-center justify-center transition-all duration-500 hover:bg-gray-50 focus-within:outline-gray-300">
                    <svg className="absolute top-0 right-0" width={50} height={50} viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle className="fill-red-50 transition-all duration-500 group-hover:fill-red-400 " cx={17} cy={17} r={17} fill />
                        <path className="stroke-red-500 transition-all duration-500 group-hover:stroke-white " d="M14.1673 13.5997V12.5923C14.1673 11.8968 14.7311 11.333 15.4266 11.333H18.5747C19.2702 11.333 19.834 11.8968 19.834 12.5923V13.5997M19.834 13.5997C19.834 13.5997 14.6534 13.5997 11.334 13.5997C6.90804 13.5998 27.0933 13.5998 22.6673 13.5997C21.5608 13.5997 19.834 13.5997 19.834 13.5997ZM12.4673 13.5997H21.534V18.8886C21.534 20.6695 21.534 21.5599 20.9807 22.1131C20.4275 22.6664 19.5371 22.6664 17.7562 22.6664H16.2451C14.4642 22.6664 13.5738 22.6664 13.0206 22.1131C12.4673 21.5599 12.4673 20.6695 12.4673 18.8886V13.5997Z" stroke="#EF4444" strokeWidth="1.6" strokeLinecap="round" />
                    </svg>
                </Button>
                <div className="relative">
                    <img className="hidden lg:block w-[250px]" src={product?.imageCover} alt={product?.title} />
                    <img className="hidden sm:block lg:hidden" src={product?.imageCover} alt={product?.title} />
                    <img className=" sm:hidden" src={product?.imageCover} alt={product?.title} />
                </div>
                <div className="mt-6 flex justify-between items-center">
                    <div className="flex justify-center items-center">
                    </div>
                    <div className="flex justify-center items-center ">
                        <button aria-label="show menu" onClick={() => setshow1(!show1)} className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-2.5 px-2 bg-gray-800 text-white hover:text-gray-400">
                            <svg className={`fill-stroke ${show1 ? "block" : "hidden"}`} width={10} height={6} viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 5L5 1L1 5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <svg className={`fill-stroke ${show1 ? "hidden" : "block"}`} width={10} height={6} viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
                <p className="tracking-tight text-base font-semibold leading-6 text-gray-800 line-clamp-1">{product?.title} </p>

                <div id="menu1" className={` flex-col jusitfy-start items-start mt-5  ${show1 ? "flex" : "hidden"}`}>
                    <div>

                        <img className="w-[100px]" src={product.brand?.image} alt={product?.title} />
                    </div>
                    <div className="mt-2">
                        <p className="tracking-tight text-base font-medium leading-4 text-gray-800">{product.category?.name}</p>
                    </div>
                    <div className="mt-6">
                        <p className="tracking-tight text-s leading-3 text-gray-800"> Quantity : <span className="tracking-tight text-base font-medium leading-4 text-gray-500">{product?.quantity}</span> </p>
                    </div>
                    <div className="mt-6">
                        <p className="tracking-tight text-s leading-3 text-gray-800"> Sold : <span className="tracking-tight text-base font-medium leading-4 text-gray-500">{product?.sold}</span> </p>
                    </div>
                    <div className="mt-6">
                        <p className="tracking-tight text-s leading-3 text-gray-800"> Price : <span className="tracking-tight text-base font-medium leading-4 text-gray-500">{formatCurrency(product?.price)}</span> </p>
                    </div>
                    <div className="mt-2 mb-5 ">
                        <div className="flex items-center w-full mt-3">
                            {
                                [1, 2, 3, 4, 5].map((rate, index) => {
                                    return product?.ratingsAverage >= rate ?
                                        <svg key={index} aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        :
                                        <svg key={index} aria-hidden="true" className="h-5 w-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                })
                            }
                            <span className="mr-2 ml-3 rounded bg-yellow-200 text-slate-500  px-2.5 py-0.5 text-xs font-semibold">{product?.ratingsAverage}</span>
                        </div>
                    </div>
                    <div className="flex jusitfy-between flex-col lg:flex-row items-center  w-full  space-y-2 lg:space-y-0 lg:space-x-4 xl:space-x-8">
                        <div className="w-full ">
                            <Button isLoading={isLoadingCart} onPress={() => addProductToCart(product?._id, setisLoadingCart)} className="focus:outline-none focus:ring-gray-800 focus:ring-offset-2 focus:ring-2  text-white w-full tracking-tight py-4 text-lg leading-4  hover:bg-black bg-gray-800 border border-gray-800">Add to cart</Button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
