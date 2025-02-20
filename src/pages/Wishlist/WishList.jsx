
import React, { useContext } from "react";
import { WishListContext } from "../../Contexts/WishListContext";
import WishListProduct from "../../Components/WishListProduct/WishListProduct";
import { Button} from "@heroui/react";
import { Link } from 'react-router-dom';

export default function WishList() {
  const {wishlist,removeSpasificwishlistItem} = useContext(WishListContext);

  if ( wishlist?.count == 0 || wishlist?.count == null) {
    return (
      <>
        <div className="container-fluid mt-100">
          <div className="flex justify-center">
            <div className="card">
              <div className="card-header text-center">
                <h2 className="title font-manrope font-bold text-4xl leading-10 mb-8 text-center text-slate-500">Your wishlist is Empty</h2>
              </div>
              <div className="card-body cart">
                <div className="col-sm-12 empty-cart-cls text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#4d7136" height="500px" width="500px" version="1.1" id="Layer_1" viewBox="0 0 480 480" xmlSpace="preserve">
                    <g id="XMLID_28_">
                      <g>
                        <path d="M346.154,52.5c-1.013,0-2.025,0.012-3.032,0.034c-57.867,1.293-106.209,46.105-112.447,104.238    c-1.117,10.407,3.111,20.459,11.31,26.89l36.291,28.471c5.201,4.08,3.825,9.552,3.279,11.132c-0.546,1.58-2.841,6.735-9.452,6.735    h-58.874c-12.621,0-23.644,7.635-28.083,19.449c-4.439,11.814-1.17,24.818,8.328,33.129l19.451,17.02    C223.776,309.092,230,322.807,230,337.226V380c0,5.523,4.477,10,10,10c5.522,0,10-4.477,10-10v-42.774    c0-20.187-8.713-39.388-23.905-52.68l-19.451-17.02c-4.836-4.231-3.347-9.522-2.776-11.043c0.571-1.521,2.935-6.483,9.361-6.483    h58.874c12.985,0,24.116-7.931,28.356-20.205c4.239-12.273,0.377-25.383-9.839-33.398l-36.292-28.471    c-2.736-2.146-4.144-5.518-3.768-9.02c5.169-48.174,45.155-85.308,93.009-86.377c0.859-0.02,1.721-0.029,2.585-0.029    C408.929,72.5,460,123.752,460,186.75c0,30.872-13.555,59.91-37.19,79.669L264.87,398.465c-6.969,5.826-15.802,9.035-24.87,9.035    c-9.069,0-17.901-3.209-24.87-9.035L57.189,266.419C33.555,246.66,20,217.622,20,186.75C20,123.752,71.071,72.5,133.846,72.5    c26.294,0,50.986,8.739,71.408,25.272c4.292,3.474,10.589,2.812,14.064-1.48c3.476-4.292,2.813-10.589-1.479-14.064    C194.16,63.057,164.331,52.5,133.846,52.5C60.043,52.5,0,112.724,0,186.75c0,36.812,16.169,71.443,44.361,95.013l157.941,132.046    C212.862,422.638,226.25,427.5,240,427.5s27.138-4.862,37.699-13.691l157.94-132.046C463.831,258.193,480,223.562,480,186.75    C480,112.724,419.957,52.5,346.154,52.5z" />
                      </g>
                    </g>
                  </svg>
                  <h4 className="font-manrope font-bold text-slate-500">Add something to make me happy :)</h4>
                  <Button variant='bordered' color='danger' className='bg-green-300 hover:bg-green-200 my-10'>
                    <Link to="/" data-abc="true">continue shopping</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
  return (
    <div className="mx-auto container px-4 md:px-6 2xl:px-0 py-12 flex justify-center items-center">
      <div className="flex flex-col jusitfy-start items-start">
        <div>
          <p className="text-sm leading-4 text-gray-600">Your</p>
        </div>
        <div className="mt-3">
          <h1 className="text-3xl lg:text-4xl tracking-tight font-semibold leading-8 lg:leading-9 text-slate-500">Favourites</h1>
        </div>
        <div className="mt-4">
          <p className="text-2xl tracking-tight leading-6 text-gray-500">{wishlist.count <=9 ?'0'+wishlist.count : wishlist.count} items</p>
        </div>
        <div className=" mt-10 lg:mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-10 lg:gap-y-0">
          {
            wishlist.data?.map((product, index) => {
              return <WishListProduct product={product} key={index} removeSpasificwishlistItem={removeSpasificwishlistItem} />
            })
          }
        </div>


      </div>
    </div>
  );
}