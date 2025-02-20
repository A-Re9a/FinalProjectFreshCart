import axios from "axios";
import { useQuery } from '@tanstack/react-query'
import { createContext, useEffect, useState } from "react";
import LoadingScreen from "../Components/LoadingScreen/LoadingScreen";

export const CategoriesContext= createContext();

export default function CategoriesContextProvider({children}) {

  const [catId, setcatId] = useState([])
  useEffect(() => {
    getCategories();
  }, [])

    function getCategories() {
        return axios.get("https://ecommerce.routemisr.com/api/v1/categories")
    }
    const { data, isLoading } = useQuery({
        queryKey: ["categories"],
        queryFn: getCategories,
        select: (res) => res.data.data,
    })

    if (isLoading) {
        return <LoadingScreen />
    }

    async function getSpecificCategories(categoryID) {
    const { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/categories/${categoryID}`);
    setcatId(data.data._id);
  }


  return (
    <>
    <CategoriesContext.Provider value={{data,getSpecificCategories,catId}}>
      {children}
    </CategoriesContext.Provider>

    </>
  )
}
