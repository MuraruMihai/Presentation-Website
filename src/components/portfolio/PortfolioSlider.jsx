import React, {useState, useEffect} from 'react';
import './portfolio-slider.css';
import PortfolioImg from '../../assets/images/banner1.jpg';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, EffectCards, EffectCoverflow } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// import "swiper/css/effect-cards";
import "swiper/css/effect-coverflow";

function PortfolioSlider(props) {

    const [slidesPerView, setSlidesPerView] = useState(3);

    const changeSlidesNumber = () => {
        // console.log(window.innerWidth);
        console.log("N-am bug-uri, te uiti degeaba :)))");
        if(window.innerWidth < 768){
            setSlidesPerView(1);
        } else if(window.innerWidth > 767 && window.innerWidth < 1200){
            setSlidesPerView(1);
        }else{
            setSlidesPerView(2);
        }
    }

    useEffect(() => {
        changeSlidesNumber();
    })

    window.addEventListener('resize', changeSlidesNumber);


    return (
        <section id='portfolio-slider'>
            <h5>La ce proiecte am lucrat?</h5>
            <h2>Portofoliu</h2>

            <Swiper className="container portfolio-slider__container"
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={slidesPerView}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
            >

                <SwiperSlide className='portfolio-slider__project'>
                    <div className='portfolio-slider__project-img'>
                        <picture>
                            <img src={PortfolioImg} alt="project description"/>
                        </picture>
                    </div>
                    <div className='portfolio-slider__project-desc'>
                        <h5>Project Name</h5>
                        <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, recusandae!</small>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='portfolio-slider__project'>
                    <div className='portfolio-slider__project-img'>
                        <picture>
                            <img src={PortfolioImg} alt="project description"/>
                        </picture>
                    </div>
                    <div className='portfolio-slider__project-desc'>
                        <h5>Project Name</h5>
                        <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, recusandae!</small>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='portfolio-slider__project'>
                    <div className='portfolio-slider__project-img'>
                        <picture>
                            <img src={PortfolioImg} alt="project description"/>
                        </picture>
                    </div>
                    <div className='portfolio-slider__project-desc'>
                        <h5>Project Name</h5>
                        <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, recusandae!</small>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='portfolio-slider__project'>
                    <div className='portfolio-slider__project-img'>
                        <picture>
                            <img src={PortfolioImg} alt="project description"/>
                        </picture>
                    </div>
                    <div className='portfolio-slider__project-desc'>
                        <h5>Project Name</h5>
                        <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, recusandae!</small>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='portfolio-slider__project'>
                    <div className='portfolio-slider__project-img'>
                        <picture>
                            <img src={PortfolioImg} alt="project description"/>
                        </picture>
                    </div>
                    <div className='portfolio-slider__project-desc'>
                        <h5>Project Name</h5>
                        <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, recusandae!</small>
                    </div>
                </SwiperSlide>
            </Swiper>

        </section>
    );
}

export default PortfolioSlider;