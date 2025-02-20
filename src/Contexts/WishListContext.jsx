import axios from "axios";

import { Bounce, toast } from "react-toastify";
import { createContext, useEffect, useState } from "react";
import LoadingScreen from "../Components/LoadingScreen/LoadingScreen";



export const WishListContext = createContext();

export default function WishListContextProvider({children}) {
    const [wishlist, setwishlist] = useState(0);
    const [loading, setloading] = useState(false);

async function addProductTowishlist(productId, setisLoading){
        setisLoading(true);
        const { data } = await axios.post("https://ecommerce.routemisr.com/api/v1/wishlist",{productId},{headers:{token: localStorage.getItem('token')}});
        getUserwishlist(data);
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
        getUserwishlist();
    }, [])

    async function getUserwishlist() {
        setloading(true);
        const { data } = await axios.get('https://ecommerce.routemisr.com/api/v1/wishlist', { headers: { token: localStorage.getItem('token') } });
        setwishlist(data);
        setloading(false);
    }
if(loading){
    <LoadingScreen/>
}


async function removeSpasificwishlistItem(productId, setisLoading) {
    setisLoading(true);
    const { data } = await axios.delete("https://ecommerce.routemisr.com/api/v1/wishlist/" + productId, { headers: { token: localStorage.getItem('token') } });
    setisLoading(false);
    getUserwishlist(data);
    if(data.status == "success"){
        toast.success(data.message, {
            position: "bottom-right",
            autoClose: 4000,
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
    
    return (
        <WishListContext.Provider value={{addProductTowishlist,wishlist,removeSpasificwishlistItem}}>
            {children}
        </WishListContext.Provider>
    )
}