
import React, { useContext } from 'react'
import { useState } from "react";
import { Button } from '@heroui/react';

import { SubCategoriesContext } from '../../Contexts/SubCategoriesContext';
import RelatedSubCategories from './component/RelatedSubCategories';


export default function SubCategories() {
    const [page, setPage] = useState(1);
    const { data, getSpecificSubCategories, subCatId } = useContext(SubCategoriesContext)
    const handlePageChange = (pageNumber) => {
        if (
            pageNumber > 0 &&
            pageNumber <= data.length / 10 &&
            pageNumber !== page
        )
            setPage(pageNumber);
    };
    return (
        <>
            <div className="py-14">
                <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                    <div className="max-w-xl mx-auto text-center">
                        <p class="text-1xl xl:text-2xl font-semibold leading-7 xl:leading-9 text-gray-600  py-8">
                            Here you can find the most popular <span className='text-green-600'>SubCategories</span> .
                        </p>
                    </div>
                    <div className="mt-12 flex justify-center">
                        <ul className="inline-grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3  lg:grid-cols-4  gap-x-10 gap-y-6 md:gap-x-16  ">
                            {
                                data.slice(page * 10 - 10, page * 10)?.map((subCat) => (
                                    <li key={subCat._id}>
                                        <div className='flex justify-center text-center '>
                                            <Button className='text-center w-full px-24' onPress={() => getSpecificSubCategories(subCat._id)}>
                                                <p className='text-center text-green-700'>{subCat.name}</p>
                                            </Button>
                                        </div>
                                    </li>
                                ))
                            }

                        </ul>
                    </div>

                </div>

                <div className="mt-12 flex justify-center">

                    {data.length > 0 && (

                        <section className="pagination">
                            <span
                                onClick={() => handlePageChange(page - 1)}
                                className={`arrow ${page === 1 ? "pagination__disabled" : ""}`}
                            >
                                <i className="fas fa-arrow-left"></i>
                            </span>
                            {[...Array(Math.floor(data.length / 10))].map((_, i) => (
                                <span
                                    className={`page__number ${page === i + 1 ? "selected__page__number" : ""
                                        }`}
                                    key={i + 1}
                                    onClick={() => handlePageChange(i + 1)}
                                >
                                    {i + 1}
                                </span>
                            ))}
                            <span
                                onClick={() => handlePageChange(page + 1)}
                                className={`arrow ${page === Math.floor(data.length / 10)
                                    ? "pagination__disabled"
                                    : ""
                                    }`}
                            >
                                <i className="fas fa-arrow-right"></i>
                            </span>

                        </section>
                    )}
                </div>

            </div>
            <RelatedSubCategories subCatId={subCatId} />
        </>

    )
}


