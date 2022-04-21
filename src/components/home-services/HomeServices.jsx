import React from 'react';
import './homeServices.css';
import {FaWordpressSimple, FaReact, FaFacebookF, FaInstagram, FaTiktok, FaMailBulk, FaShopify} from 'react-icons/fa';
import { SiGoogleads } from 'react-icons/si';
import {SiWoo} from 'react-icons/si';
import {MdPhonelink} from 'react-icons/md';
import {GiUnplugged} from 'react-icons/gi';

function HomeServices(props) {
    return (
        <div className='home-services__container' id='serviciii'>
            <h2>Servicii</h2>
            <h4>Cu ce te putem ajuta?</h4>
            <div className='home-services__content'>

                <article className='home-service'>
                    <div className='home-service__pin'></div>
                    <div className='home-service__content'>
                        <h3 className='home-service__head'>Web Design</h3>
                        <ul className='home-service__list'>
                            <li><FaWordpressSimple className='home-service__list-icon'/> Wordpress Presentation Website</li>
                            <li><FaWordpressSimple className='home-service__list-icon'/> Wordpress Blog</li>
                            <li><FaReact className='home-service__list-icon'/> ReactJS Presentation Website</li>
                        </ul>
                    </div>
                    {/*<button className='services_CTA'>Vezi Oferta</button>*/}
                </article>

                <article className='home-service'>
                    <div className='home-service__pin'></div>
                    <div className='home-service__content'>
                        <h3 className='home-service__head'>Digital Marketing</h3>
                        <ul className='home-service__list'>
                            <li><FaFacebookF className='home-service__list-icon'/>Facebook Ads</li>
                            <li><FaInstagram className='home-service__list-icon'/>Instagram Ads</li>
                            <li><SiGoogleads className='home-service__list-icon'/>Google Ads</li>
                            <li><FaTiktok className='home-service__list-icon'/>TikTok Ads</li>
                            <li><FaMailBulk className='home-service__list-icon'/>Email Marketing</li>
                        </ul>
                    </div>
                    {/*<button className='services_CTA'>Vezi Oferta</button>*/}
                </article>

                <article className='home-service'>
                    <div className='home-service__pin'></div>
                    <div className='home-service__content'>
                        <h3 className='home-service__head'>E-Commerce Website</h3>
                        <ul className='home-service__list'>
                            <li><SiWoo className='home-service__list-icon'/>Wordpress WooCommerce</li>
                            <li><FaShopify className='home-service__list-icon'/>Shopify</li>
                            <li><MdPhonelink className='home-service__list-icon'/>Full Responsive Design</li>
                            <li><GiUnplugged className='home-service__list-icon'/>All Plugins and Integrations you need</li>
                        </ul>
                    </div>
                    {/*<button className='services_CTA'>Vezi Oferta</button>*/}
                </article>

            </div>

            <div className='services__wave__bottom'>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                     preserveAspectRatio="none">
                    <path
                        d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                        opacity=".5" className="shape-fill"></path>
                    <path
                        d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                        opacity=".8" className="shape-fill"></path>
                    <path
                        d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                        className="shape-fill"></path>
                </svg>
            </div>
        </div>
    );
}

export default HomeServices;