import axios from "axios";

import { Bounce, toast } from "react-toastify";
import { createContext, useEffect, useState } from "react";
import LoadingScreen from "../Components/LoadingScreen/LoadingScreen";



export const CartContext= createContext();

export default function CartContextProvider({children}) {

    const [cart, setcart] = useState(0);
    const [loading, setloading] = useState(false);
    const [clearCartLoading, setclearCartLoading] =useState(false);


async function addProductToCart(productId,setisLoading){
        setisLoading(true);
        const { data } = await axios.post("https://ecommerce.routemisr.com/api/v1/cart",{productId},{headers:{token: localStorage.getItem('token')}});
        getUserCart(data);
        console.log(data);
        
        setisLoading(false);
        if(data.status == "success"){
            toast.success(data.message, {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
                });
        }
    }
    
    useEffect(() => {
        getUserCart();
    }, [])

    async function getUserCart() {
        setloading(true);
        const { data } = await axios.get('https://ecommerce.routemisr.com/api/v1/cart', { headers: { token: localStorage.getItem('token') } });
        setcart(data);
        setloading(false);
    }
if(loading){
    <LoadingScreen/>
}

    function updateCart(productId, count, setdecrementLoading, setincrementLoading, currentCount) {
        {
            if (count > currentCount) {
                setincrementLoading(true);
                
            }
            if (count < currentCount) {
                setdecrementLoading(true);
            }
            axios.put("https://ecommerce.routemisr.com/api/v1/cart/" + productId, { count },
            { headers: { token: localStorage.getItem('token') } }
            ).then(({ data }) => {
            setdecrementLoading(false);
            setincrementLoading(false);
            setcart(data);
            })
            if(count > currentCount){
                toast.success("Product increment sucssissfuly", {
                    position: "bottom-right-center",
                    delay: 1000,
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                    });
            }else if(count == 0){
                toast.error("Product removed sucssissfuly", {
                    position: "bottom-right-center",
                    delay: 2000,
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                    });
            }
            else if(count < currentCount){
                toast.error("Product decrement sucssissfuly", {
                    position: "bottom-right-center",
                    delay: 1000,
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                    });
            }
        }
    }
    async function removeSpasificCartItem(productId, setisLoading) {
        setisLoading(true);
        const { data } = await axios.delete("https://ecommerce.routemisr.com/api/v1/cart/" + productId, { headers: { token: localStorage.getItem('token') } });
        setisLoading(false);
        setcart(data);
        if(data.status == "success"){
            toast.error("Product removed sucssissfuly", {
                position: "bottom-right-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
                });
        }
    }
    

    async function removeCartItems() {
        setclearCartLoading(true);
        const {data}=await axios.delete("https://ecommerce.routemisr.com/api/v1/cart", { headers: { token: localStorage.getItem('token') } });
        setcart(data);
        setclearCartLoading(false);

        toast.error("Cart Cleared sucssissfuly", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
    }

    return (
        <CartContext.Provider value={{cart,addProductToCart,getUserCart,updateCart,removeSpasificCartItem,removeCartItems,clearCartLoading}}>
            {children}
        </CartContext.Provider>
    )
}