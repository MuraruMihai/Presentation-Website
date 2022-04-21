import React from "react";
import {FaLaptopCode} from 'react-icons/fa';
import {SiWordpress, SiWoo, SiShopify} from 'react-icons/si';
import {GrReactjs} from 'react-icons/gr';
import {BsGraphUp} from 'react-icons/bs';

export const ServicesListItems = [
    {
        name: "Wordpress Website",
        tags: ["Responsive","Web","Design"],
        icon: <SiWordpress className='services_two-item-icon'/>
    },
    {
        name: "Wordpress Blog",
        tags: ["Responsive","Web","Design"],
        icon: <SiWordpress className='services_two-item-icon'/>
    },
    {
        name: "WooCommerce",
        tags: ["Responsive","Web","E-Commerce"],
        icon: <SiWoo className='services_two-item-icon'/>
    },
    {
        name: "Shopify",
        tags: ["Responsive","Web","E-Commerce"],
        icon: <SiShopify className='services_two-item-icon'/>
    },
    {
        name: "React JS",
        tags: ["Responsive","Web","Fast"],
        icon: <GrReactjs className='services_two-item-icon'/>
    },
    {
        name: "Digital Marketing",
        tags: ["Facebook","Instagram","TikTok"],
        icon: <BsGraphUp className='services_two-item-icon'/>
    }

]