import React from 'react';
import './heroTwo.css';
import {Link} from "react-router-dom";
import ContactPage from "../pages/Contact/ContactPage";

function HeroTwo(props) {
    return (
        <div className='hero__two-container'>
            <div className='container__left'>
                <div className='content__text'>
                    <h1>Web Design</h1>
                    <h3>Te ajutăm să îți dezvolți afacerea în mediul online pe toate planurile.</h3>
                    <h4>Fie că îți dorești un site de prezentare, un magazin online sau să îți promovezi afacerea, vom lucra cu tine la fiecare pas pentru a ne asigura că viziunea ta prinde viață în cel mai bun mod posibil – ceva care te va reprezenta cu adevărat!</h4>
                    <Link to='/contact'>
                        <button>Contact</button>
                    </Link>

                </div>
            </div>
            {/*<div className='container__right'>*/}

            {/*</div>*/}
        </div>
    );
}

export default HeroTwo;