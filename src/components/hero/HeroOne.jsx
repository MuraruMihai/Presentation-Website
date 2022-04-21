import React from 'react';
import './heroOne.css';

function HeroOne(props) {
    return (
        <div className='hero__one-container'>
            <div className='container-one'>
                <h1>Need a website?</h1>
                <p>What are you waiting for?</p>
                <div className='hero__one-btns'>
                    <button>Contact Us</button>
                </div>
            </div>
            <div className='hero_mask'>

            </div>

        </div>
    );
}

export default HeroOne;