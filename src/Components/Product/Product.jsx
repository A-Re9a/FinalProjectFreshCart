import { Button } from "@heroui/react";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { formatCurrency } from "../Helper/CurrencyHelper";
import { CartContext } from "../../Contexts/CartContext";
import { WishListContext } from "../../Contexts/WishListContext";
import { HeartSwitch } from '@anatoliygatt/heart-switch';


export default function Product({ product,index }) {
    const { addProductTowishlist, removeSpasificwishlistItem } = useContext(WishListContext);
    const [checked, setChecked] = useState(false);
    const { addProductToCart } = useContext(CartContext);
    const [isLoadingCart, setisLoadingCart] = useState(false);
    const [isLoadingWishList, setisLoadingWishList] = useState(false);

    return (
        <div key={index} className="product bg-green-100 relative flex w-full max-w-xs flex-col justify-between overflow-hidden rounded-lg border border-gray-100  shadow-md">
            <Link className=" mx-3 mt-3 flex overflow-hidden rounded-xl" to={`/ProuductDetails/${product._id}/${product.category._id}`}>
                <img className="object-contain w-full  hover:scale-110 transition duration-500 " src={product.imageCover} alt={product.title} />
            </Link>
            <div className="absolute top-3 right-3">
                <HeartSwitch

                    size="md"
                    inactiveTrackFillColor="#cffafe"
                    inactiveTrackStrokeColor="cffafe"
                    activeTrackFillColor="red"
                    activeTrackStrokeColor="red"
                    inactiveThumbColor="#ecfeff"
                    activeThumbColor="#ecfeff"
                    checked={checked}
                    onClick={(checked == true) ?
                        () => removeSpasificwishlistItem(product._id, setisLoadingWishList)
                        :
                        () => addProductTowishlist(product._id, setisLoadingWishList)
                    }
                    onChange={(event) => {
                        setChecked(event.target.checked);
                    }}
                />

            </div>
            <div className="mt-4 px-5 pb-5">
                <span>
                    <h5 className="text-xl tracking-tight text-slate-900 line-clamp-1">{product.title}</h5>
                </span>
                <div className="mt-2 mb-5 ">
                    <p>
                        <span className="text-sm text-slate-900 line-through block">{formatCurrency(Math.round((product.price) * 39 / 100 + (product.price)))}</span>
                        <span className="text-3xl font-bold text-slate-900 mr-2">{formatCurrency(product.price)}</span>
                    </p>
                    <div className="flex items-center mt-3">
                        {
                            [1, 2, 3, 4, 5].map((rate, index) => {
                                return product.ratingsAverage >= rate ?
                                    <svg key={index} aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    :
                                    <svg key={index} aria-hidden="true" className="h-5 w-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>

                            })
                        }

                        <span className="mr-2 ml-3 rounded bg-yellow-200 text-slate-500  px-2.5 py-0.5 text-xs font-semibold">{product.ratingsAverage}</span>
                    </div>
                </div>
                <div className="flex justify-center gap-3">
                    <Button isLoading={isLoadingCart} onPress={() => addProductToCart(product._id, setisLoadingCart)} className="flex w-full btn items-center justify-center rounded-md bg-green-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className=" h-6 w-6" fill="white" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        Add to Cart
                    </Button>
                </div>
            </div>
        </div>
    )

}




