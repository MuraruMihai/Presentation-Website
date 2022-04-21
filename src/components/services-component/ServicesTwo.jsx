import React from 'react';
import './services-two.css';
import {ServicesListItems} from './ServicesList';
import ServiceItem from "./ServiceItem";

function ServicesTwo(props) {
    console.log(ServicesListItems)
    return (
        <section id='services-two'>
            <div className='services-two__container'>
                <div className='services-two__left'>
                    <h1>Serviciile Noastre</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, aut delectus dolor et ipsam
                        iste laborum quisquam reprehenderit ullam voluptatibus.</p>
                </div>
                <div className='services-two__right'>
                    {ServicesListItems.map((serviceItem,key) => (
                        <ServiceItem key={key} icon={serviceItem.icon} serviceName={serviceItem.name} tags={serviceItem.tags}/>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}

export default ServicesTwo;