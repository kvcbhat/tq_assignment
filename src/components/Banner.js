import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export const Banner = ({ banners }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };

    return (
        <Slider {...settings}>
            {banners.map((banner) => (
                <div key={banner.id_no} className='p-md-4 position-relative'>
                    <img className="w-100" src={banner.image_link} alt="Card image cap"></img>
                    <div className='bg-dark position-absolute bottom-0 start-50 translate-middle p-md-2 rounded-5 d-none d-md-block'>
                        <h2 className='text-white'>{banner.text}</h2>
                    </div>

                </div>
            ))}
        </Slider>
    );
};
export default Banner;