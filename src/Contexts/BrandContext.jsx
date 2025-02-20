

import axios from "axios";
import { useQuery } from '@tanstack/react-query'
import { createContext, useEffect, useState } from "react";
import LoadingScreen from "../Components/LoadingScreen/LoadingScreen";

export const BrandsContext = createContext();

export default function BrandsContextProvider({ children }) {
    const [brandId, setbrandId] = useState([])
    useEffect(() => {
        getBrands();
    }, [])
    function getBrands() {
        return axios.get("https://ecommerce.routemisr.com/api/v1/brands")
    }
    const { data, isLoading } = useQuery({
        queryKey: ["brands"],
        queryFn: getBrands,
        select: (res) => res.data.data,
    })
    if (isLoading) {
        return <LoadingScreen />
    }

    async function getSpecificBrands(brandegoryID) {
        const { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/brands/${brandegoryID}`);
        console.log(data);
        setbrandId(data.data._id);
    }

    return (
        <>
            <BrandsContext.Provider value={{ data, getSpecificBrands,brandId }}>
                {children}
            </BrandsContext.Provider>

        </>
    )
}
