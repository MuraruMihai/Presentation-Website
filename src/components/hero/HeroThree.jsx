import React from 'react';
import './hero-three.css';
import { FaLaptopCode } from 'react-icons/fa';

function HeroThree(props) {
    return (
        <section id='heroThree'>
            <div className='hero-three__container'>
                <h1>Servicii</h1>
                <h4>Te ajutăm să îți pui ideile în practică </h4>
                <div className='hero-three__services'>
                    <article className='hero-three__service'>
                        <FaLaptopCode className='hero-three__service-icon' />
                        <h2>Web Design</h2>
                    </article>
                    <article className='hero-three__service'>
                        <FaLaptopCode className='hero-three__service-icon' />
                        <h2>E-Commerce</h2>
                    </article>
                    <article className='hero-three__service'>
                        <FaLaptopCode className='hero-three__service-icon' />
                        <h2>Marketing</h2>
                    </article>
                </div>
            </div>
        </section>
    );
}

export default HeroThree;