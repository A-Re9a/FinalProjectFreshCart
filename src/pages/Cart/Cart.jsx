import React, { useContext } from 'react'
import CartProduct from '../../Components/CartProduct/CartProduct';
import { formatCurrency } from '../../Components/Helper/CurrencyHelper';
import { Button } from '@heroui/react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Contexts/CartContext';
import CartAnimation from './components/cartAnimation';



export default function Cart() {
    const { cart, removeSpasificCartItem, updateCart, removeCartItems, clearCartLoading } = useContext(CartContext);
    console.log(cart.cartId);

    if (cart.numOfCartItems == undefined || cart.numOfCartItems == 0) {
        return (
            <>
                <div className="container-fluid mt-100">
                    <div className="flex justify-center">
                        <div className="card">
                            <div className="card-header text-center">
                                <h2 className="title font-manrope font-bold text-4xl leading-10 text-center text-slate-500">Your Cart is Empty</h2>
                            </div>
                            <div className="card-body cart">
                                <div className="col-sm-12 empty-cart-cls text-center">
                                    <CartAnimation />
                                    <h4 className="font-manrope font-bold">Add something to make me happy :)</h4>
                                    <Button variant='bordered' color='danger' className='bg-green-300 hover:bg-green-200 my-10'>
                                        <Link to="/" c data-abc="true">continue shopping</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    return (
        <>
            <div className=' flex justify-between'>
                <h1 className="title font-manrope font-bold text-4xl leading-10 mb-8 text-center text-slate-500">Shopping Cart </h1>

                <Button isLoading={clearCartLoading} variant='bordered' color='danger' className='hover:bg-red-100' onPress={removeCartItems}>Clear Cart</Button>
            </div>
            <h2 className="title font-manrope font-bold text-3xl leading-10 mb-8 text-center text-slate-500">You Have  {cart.numOfCartItems <= 9 ? "0" + cart.numOfCartItems : cart.numOfCartItems} Items in your Cart </h2>
            <div className="justify-center px-6 md:flex md:space-x-6 xl:px-0">
                <div className="rounded-lg md:w-2/3">
                    {
                        cart.data?.products.map((product, index) => {
                            return <CartProduct product={product} key={index} updateCart={updateCart} removeSpasificCartItem={removeSpasificCartItem} />
                        })
                    }

                </div>
                {/* Sub total */}
                <div className="sticky top-20 mt-6 h-full rounded-lg border border-gray-200 bg-green-200  p-6 shadow-md md:mt-0 md:w-1/3">
                    <div className="mb-2 flex justify-between">
                        <p className="text-gray-700">Total before Shipping </p>
                        <p className="text-gray-700">{formatCurrency(cart.data?.totalCartPrice)}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-gray-700">Shipping</p>
                        <p className="text-gray-700">$4.99</p>
                    </div>
                    <hr className="my-4" />
                    <div className="flex justify-between">
                        <p className="text-lg font-bold text-slate-500">Order Total</p>
                        <div className>
                            <p className="mb-1 text-lg font-bold text-slate-500">{formatCurrency(cart.data?.totalCartPrice + 4.99)} USD</p>
                            <p className="text-sm text-gray-700">including VAT</p>
                        </div>
                    </div>
                    <Link to={"/Address/" + cart.cartId} variant='bordered' color='primary' className="mt-6 block text-center rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Proceed to Checkout Online</Link>
                    <Link to={"/AddressCash/" + cart.cartId} variant='bordered' color='primary' className="mt-6 block text-center rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Proceed to Checkout Cash</Link>
                </div>
            </div>
        </>
    )
}

