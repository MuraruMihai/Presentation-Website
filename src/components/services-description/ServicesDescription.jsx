import React from 'react';
import './services-description.css';
import {SiWordpress, SiWoo, SiShopify} from 'react-icons/si';
import {GrReactjs} from 'react-icons/gr';
import {BsGraphUp} from 'react-icons/bs';

function ServicesDescription(props) {
    return (
        <section id='services-description'>
            <div className='services-desc-container'>

                <div className='service-description-item'>
                    <div className='service-desc-image-section'>
                        <SiWordpress className='service-desc-image-icon color_wp'/>
                        <GrReactjs className='service-desc-image-icon color_react'/>
                    </div>
                    <div className='service-desc-content'>
                        <div className='service-desc-item'>
                            <h3>Wordpress</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus deleniti ea eaque id ipsa
                                ipsum molestias nobis nostrum omnis praesentium quas, quasi rem repellendus, similique soluta
                                sunt tenetur totam, unde.</p>
                        </div>
                        <div className='service-desc-item'>
                            <h3>ReactJs</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus deleniti ea eaque id ipsa
                                ipsum molestias nobis nostrum omnis praesentium quas, quasi rem repellendus, similique soluta
                                sunt tenetur totam, unde.</p>
                        </div>
                    </div>
                </div>

                <div className='service-description-item'>
                    <div className='service-desc-image-section'>
                        <SiWoo className='service-desc-image-icon color_woo'/>
                        <SiShopify className='service-desc-image-icon color_shopify'/>
                    </div>
                    <div className='service-desc-content'>
                        <div className='service-desc-item'>
                            <h3>WooCommerce</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus deleniti ea eaque id ipsa
                                ipsum molestias nobis nostrum omnis praesentium quas, quasi rem repellendus, similique soluta
                                sunt tenetur totam, unde.</p>
                        </div>
                        <div className='service-desc-item'>
                            <h3>Shopify</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus deleniti ea eaque id ipsa
                                ipsum molestias nobis nostrum omnis praesentium quas, quasi rem repellendus, similique soluta
                                sunt tenetur totam, unde.</p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default ServicesDescription;