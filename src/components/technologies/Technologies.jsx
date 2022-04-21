import React, {useEffect, useState} from 'react';
import './technologies.css';
import {FaWordpressSimple, FaReact, FaShopify, FaCss3Alt} from 'react-icons/fa';
import {SiWoo, SiHtml5,SiJavascript, SiJquery, SiPhp} from 'react-icons/si';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, EffectCards, EffectCoverflow, EffectCreative } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// import "swiper/css/effect-cards";
import "swiper/css/effect-coverflow";
// import "swiper/css/effect-creative";
import PortfolioImg from "../../assets/images/banner1.jpg";

function Technologies(props) {

    const [tSlidesPerView, setTSlidesPerView] = useState(4);

    const changeTechSlidesNumber = () => {
        // console.log(window.innerWidth);
        if(window.innerWidth < 768){
            setTSlidesPerView(1);
        } else if(window.innerWidth > 767 && window.innerWidth < 1200){
            setTSlidesPerView(2);
        }else{
            setTSlidesPerView(4);
        }
    }

    useEffect(() => {
        changeTechSlidesNumber();
    })

    window.addEventListener('resize', changeTechSlidesNumber);

    return (
        <div className='technologies__container'>
            <Swiper className="container technologies-slider__container"
                    slidesPerView={tSlidesPerView}
                    spaceBetween={10}
                    slidesPerGroup={1}
                    loop={true}
                    // loopFillGroupWithBlank={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    // pagination={{
                    //     clickable: true,
                    // }}

                    modules={[Pagination, Navigation]}
            >

                <SwiperSlide className='technologies__slide'>
                    <div className='technologies__slider_content technologies__slider_content-wp'>
                        <FaWordpressSimple className='technologies__icon'/>
                        <p>Wordpress</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='technologies__slide'>
                    <div className='technologies__slider_content technologies__slider_content-woo'>
                        <SiWoo className='technologies__icon'/>
                        <p>WooCommerce</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='technologies__slide'>
                    <div className='technologies__slider_content technologies__slider_content-shopify'>
                        <FaShopify className='technologies__icon'/>
                        <p>Shopify</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='technologies__slide'>
                    <div className='technologies__slider_content technologies__slider_content-react'>
                        <FaReact className='technologies__icon'/>
                        <p>ReactJS</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='technologies__slide'>
                    <div className='technologies__slider_content technologies__slider_content-html'>
                        <SiHtml5 className='technologies__icon'/>
                        <p>HTML5</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='technologies__slide'>
                    <div className='technologies__slider_content technologies__slider_content-css'>
                        <FaCss3Alt className='technologies__icon'/>
                        <p>CSS</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='technologies__slide'>
                    <div className='technologies__slider_content technologies__slider_content-js'>
                        <SiJavascript className='technologies__icon'/>
                        <p>JavaScript</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='technologies__slide'>
                    <div className='technologies__slider_content technologies__slider_content-jq'>
                        <SiJquery className='technologies__icon'/>
                        <p>JQuery</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='technologies__slide'>
                    <div className='technologies__slider_content technologies__slider_content-php'>
                        <SiPhp className='technologies__icon'/>
                        <p>PHP</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Technologies;