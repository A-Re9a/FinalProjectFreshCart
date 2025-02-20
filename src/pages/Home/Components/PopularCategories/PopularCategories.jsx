
import { useContext } from "react";
import Slider from "react-slick";
import { CategoriesContext } from "../../../../Contexts/CategoriesContext";
export default function PopularCategories() {

    const { data} = useContext(CategoriesContext)
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow:6,
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
                <h2 class="text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9 text-slate-500 ">Popular Categories</h2>
            <div class="flex flex-col justify-center items-center mb-5 ">
            </div>
            <Slider className="p-0 m-0 w-full overflow-hidden" {...settings}>
                {data.map((category) => (
                    <div key={category.id}>
                        <div className="relative product group flex justify-center items-center h-full w-auto category-img">
                            <img className="object-center object-cover h-full w-auto" src={category.image} alt={category.name} />
                            <p className="bg-green-800 text-white btn text-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none  py-3 w-36 ">{category.name}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </>

    )
}
