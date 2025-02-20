

import axios from 'axios';
import React, { useEffect, useState } from 'react'


import Product from '../../../Components/Product/Product';
import LoadingScreen from '../../../Components/LoadingScreen/LoadingScreen';


export default function RelatedSubCategories(props) {
    console.log(props);


    const [RelatedSubCategories, setRelatedSubCategories] = useState([])
    const [isLoading, setisLoading] = useState(false)
    useEffect(() => {
        getProductDetails()
    }, [props.subCatId])
    async function getProductDetails() {
        setisLoading(true);
        const { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/products/`);
        console.log('sub', data);



        let res = data.data.filter(product => product.subcategory._id == props.subCatId);
        setRelatedSubCategories(res);
        setisLoading(false);

    }
    if (isLoading) {
        return <LoadingScreen />
    }

    if (props.subCatId.length == 0) {
        return (
            <>
            </>
        )
    }
    if (RelatedSubCategories.length == 0) {

        return (
            <>
                <div className='mt-24 flex flex-col justify-center items-center'>
                    <h1 className='text-2xl font-bold my-5'> Related SubCategories Products</h1>
                    <h2 className='text-3xl'> There is no product available for this SubCategories at this time ):</h2>
                </div>
            </>
        )
    }
    return (
        <>
            <div className='mt-24 flex flex-col justify-center items-center'>
                <h1 className='text-2xl font-bold my-5'> Related SubCategories Products</h1>
                <div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
                    {
                        RelatedSubCategories.map((product, index) => {
                            return <Product key={index} product={product} />
                        })
                    }
                </div>
            </div>
        </>
    )
}
