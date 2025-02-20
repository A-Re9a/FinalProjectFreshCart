

import axios from "axios";
import { useQuery } from '@tanstack/react-query'
import { createContext, useEffect, useState } from "react";
import LoadingScreen from "../Components/LoadingScreen/LoadingScreen";

export const SubCategoriesContext = createContext();

export default function SubCategoriesContextProvider({ children }) {
    const [SubCategories, setSubCategories] = useState([])
    const [subCatId, setsubCatId] = useState([])
    useEffect(() => {
        getSubCategories();
    }, [])
    useEffect(() => {
        getSubCategories();
    }, [])
    function getSubCategories() {
        return axios.get("https://ecommerce.routemisr.com/api/v1/subcategories")
    }
    const { data, isLoading } = useQuery({
        queryKey: ["subcategories"],
        queryFn: getSubCategories,
        select: (res) => res.data.data,
    })
    if (isLoading) {
        return <LoadingScreen />
    }

    async function getSpecificSubCategories(subCategoryID) {
        const { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/subcategories/${subCategoryID}`);
        console.log(data);
        setsubCatId(data.data._id);
    }


    return (
        <>
            <SubCategoriesContext.Provider value={{ data, getSpecificSubCategories, SubCategories, subCatId }}>
                {children}
            </SubCategoriesContext.Provider>

        </>
    )
}
