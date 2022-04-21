import React from 'react';
import HeroTwo from "../../hero/HeroTwo";
import HomeServices from "../../home-services/HomeServices";
import Roadmap from "../../roadmap/Roadmap";
import PortfolioSlider from "../../portfolio/PortfolioSlider";
import Technologies from "../../technologies/Technologies";
import Contact from "../../contact-component/Contact";
import TestimonialSlider from "../../testimonial-slider/TestimonialSlider";

function Home(props) {
    return (
        <div>
            <HeroTwo/>
            <Technologies/>
            <HomeServices/>
            <PortfolioSlider/>
            <Roadmap/>
            <TestimonialSlider/>
            <Contact/>
        </div>
    );
}

export default Home;