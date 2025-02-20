import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Product from '../../../../Components/Product/Product';
import Slider from "react-slick";
export default function RelatedProducts(props) {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
    };
    const [relatedProducts, setrelatedProducts] = useState([])
    let { categoryId } = props
    useEffect(() => {
        getProductDetails()
    }, [])
    async function getProductDetails() {
        const { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/products/`);
        let res = data.data.filter(product => product.category._id == categoryId)
        setrelatedProducts(res)
    }
    return (
        <>
                        <Slider {...settings}>
                {
                    relatedProducts.map((product, index) => {
                        return <Product key={index} product={product} />
                    })
                }
            </Slider>

        </>
    )
}
