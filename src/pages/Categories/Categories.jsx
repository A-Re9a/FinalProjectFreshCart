import { Bounce, toast } from "react-toastify";
import { CategoriesContext } from '../../Contexts/CategoriesContext'
import React, { useContext } from 'react'

import Slider from "react-slick";
import { Button } from "@heroui/react";
import RelatedCategory from "./Components/RelatedCategores";
import SubCategories from "../../Components/SubCategories/SubCategories";
export default function Categories() {

    const { data, getSpecificCategories, catId } = useContext(CategoriesContext)

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1

                }
            }
        ]

    };
    return (
        <>
            <div class="flex flex-col justify-center items-center mb-5 ">
                <h1 class="text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9 text-slate-500  ">Shop By Category</h1>
            </div>
            <Slider className="p-0 m-0 w-full overflow-hidden" {...settings}>
                {data.map((category) => (
                    <div key={category.id}>
                        <div className="relative product group flex justify-center items-center h-full w-auto category-img">
                            <img className="object-center object-cover h-full w-auto" src={category.image} alt={category.name} />
                            <Button onPress={() => getSpecificCategories(category._id)} className="bg-green-800 text-white btn  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none  py-3 w-36 ">{category.name}</Button>
                        </div>
                    </div>
                ))}
            </Slider>

            <RelatedCategory catId={catId} />
            <svg className="my-9 w-full" xmlns="http://www.w3.org/2000/svg" width={1216} height={2} viewBox="0 0 1216 2" fill="none">
                <path d="M0 1H1216" stroke="#D1D5DB" />
            </svg>
            <SubCategories />
        </>

    )
}
