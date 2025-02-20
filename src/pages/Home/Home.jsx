
import React, { useEffect, useState } from 'react'
import Product from '../../Components/Product/Product'
import LoadingScreen from '../../Components/LoadingScreen/LoadingScreen'


import { getAllProducts } from '../../Redux/ProductsSlice'
import { useDispatch, useSelector } from 'react-redux'
import PopularCategories from './Components/PopularCategories/PopularCategories'
import StaticSlider from './Components/StaticSlider/StaticSlider'

export default function Home() {
  const [page, setPage] = useState(1);  
  const {products,isLoading} = useSelector(store=>store.products);
  console.log(products);
  
  const dispatch = useDispatch();
useEffect(()=>{
dispatch(getAllProducts());
},[]);
if(isLoading){
<LoadingScreen/>
}
  const handlePageChange = (pageNumber) => {

    if (
      pageNumber > 0 &&
      pageNumber <= products.length / 10 &&
      pageNumber !== page
    )
      setPage(pageNumber);

  };

return (
    <>
        <div>
<StaticSlider/>
</div>
    <div className='py-10 '>

    <PopularCategories/>
    </div>
    <h1 class="text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9 mb-5 text-slate-500 ">Our Products</h1>
      {products.length != 0 &&

      <div className='grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-6'>
        
        {
          products.slice(page * 10 - 10, page * 10).map((product, index) => {
            return <Product key={index} product={product}/>
          })
        }
      </div>
      }
{products.length == 0 && <LoadingScreen/>}
{products.length > 0 && (
        <section className="pagination">
          <span
            onClick={() => handlePageChange(page - 1)}
            className={`arrow ${page === 1 ? "pagination__disabled" : ""}`}
          >
            <i className="fa fa-arrow-left" aria-hidden="true"></i>
          </span>
          {[...Array(Math.floor(products.length / 10))].map((_, i) => (
            <span
              className={`page__number ${
                page === i + 1 ? "selected__page__number" : ""
              }`}
              key={i + 1}
              onClick={() => handlePageChange(i + 1)}
            >
              {i + 1}
            </span>
          ))}
          <span
            onClick={() => handlePageChange(page + 1)}
            className={`arrow ${
              page === Math.floor(products.length / 10)
                ? "pagination__disabled"
                : ""
            }`}
          >
            <i className="fa fa-arrow-right" aria-hidden="true"></i>
          </span>
        </section>
      )}
    </>
  )
}