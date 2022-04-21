import React from 'react';
import './services-page.css';
import HeroThree from "../../hero/HeroThree";
import Technologies from "../../technologies/Technologies";
import ServicesTwo from "../../services-component/ServicesTwo";
import PortfolioSlider from "../../portfolio/PortfolioSlider";

function ServicesPage(props) {
    return (
        <div id='servicesPage'>
            <HeroThree/>
            <Technologies/>
            <ServicesTwo/>
            <PortfolioSlider/>
        </div>
    );
}

export default ServicesPage;