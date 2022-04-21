import React from 'react';
import './testimonial-slider.css';
import ClientImgOne from '../../assets/images/me.png';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, EffectCards } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/effect-cards";

const testimonialsList = [
    {
        id: 1,
        image: ClientImgOne,
        company: 'Web Design Agency',
        name: 'Muraru Mihai',
        review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, atque dicta ea eaque facilis fuga hic ' +
            'incidunt iusto, minima mollitia pariatur quam ratione reiciendis repellendus sapiente similique vel ' +
            'voluptatem voluptatum.'
    },
    {
        id: 2,
        image: ClientImgOne,
        company: 'Web Design Agency',
        name: 'Muraru Mihai',
        review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, atque dicta ea eaque facilis fuga hic ' +
            'incidunt iusto, minima mollitia pariatur quam ratione reiciendis repellendus sapiente similique vel ' +
            'voluptatem voluptatum.'
    },
    {
        id: 3,
        image: ClientImgOne,
        company: 'Web Design Agency',
        name: 'Muraru Mihai',
        review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, atque dicta ea eaque facilis fuga hic ' +
            'incidunt iusto, minima mollitia pariatur quam ratione reiciendis repellendus sapiente similique vel ' +
            'voluptatem voluptatum.'
    },
    {
        id: 4,
        image: ClientImgOne,
        company: 'Web Design Agency',
        name: 'Muraru Mihai',
        review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, atque dicta ea eaque facilis fuga hic ' +
            'incidunt iusto, minima mollitia pariatur quam ratione reiciendis repellendus sapiente similique vel ' +
            'voluptatem voluptatum.'
    },
]

function TestimonialSlider(props) {
    return (
        <section id='testimonial-slider'>
            <h2>Recenzii</h2>
            <Swiper className="container testimonial__container"
                    modules={[Pagination, Scrollbar, A11y, EffectCards]}
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    effect="cards"
                    grabCursor={true}
            >

                {
                    testimonialsList.map(({id, image, name, company, review})=> {
                        return(
                            <SwiperSlide key={id} className='testimonial-slide'>
                                <div className="client-avatar">
                                    <picture>
                                        <img src={image} alt='client image'/>
                                    </picture>
                                </div>
                                <div className="client-data">
                                    <h3>{name}</h3>
                                    <h4>{company}</h4>
                                </div>
                                <div className="client-review">
                                    <p>{review}</p>
                                </div>
                            </SwiperSlide>
                    )
                })
                }
            </Swiper>
        </section>
    );
}

export default TestimonialSlider;