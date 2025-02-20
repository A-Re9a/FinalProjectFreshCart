import React from 'react'
import Slider from "react-slick";
import slide1 from '../../../../../src/assets/slider-image-1.jpeg'
import slide2 from '../../../../../src/assets/slider-image-2.jpeg'
import slide3 from '../../../../../src/assets/slider-image-3.jpeg'
import static1 from '../../../../../src/assets/./grocery-banner.png'
import static2 from '../../../../../src/assets/./grocery-banner-2.jpeg'
export default function StaticSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows:false,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <>
            <div class="flex">
<div className="w-9/12">
            <Slider {...settings}>
            <img src={slide1} /> 
            <img src={slide3} />
            </Slider>
</div>
<div className="w-3/12 ">
<img src={static1} className='w-full ' />
<img src={static2} className='w-full '/>
<img src={slide3} className='w-full'/>
</div>
            </div>

        </>

    )
}
