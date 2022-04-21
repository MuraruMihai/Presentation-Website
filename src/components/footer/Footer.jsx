import React,{useEffect} from 'react';
import './footer.css';
import Logo from '../../assets/images/logo-white3.png';
import {Link} from "react-router-dom";
import {FaFacebookSquare} from 'react-icons/fa';
import {BsInstagram} from 'react-icons/bs';
import Copyright from "../copyright/Copyright";

function Footer(props) {
    const scrollTop = () =>{
        window.scrollTo(0, 0)
    }

    useEffect(()=> {
        scrollTop();
    })

    return (
        <footer>
            <div className="footer__container">
                <div className='footer__left'>
                    <Link to='/' onClick={scrollTop}>
                        <img src={Logo} alt="Muraru Graphics Logo" className='footer__logo_img'/>
                    </Link>

                    <div className='footer_left__socials'>
                        <ul>
                            <li><a href='https://facebook.com' target='_blank'><FaFacebookSquare/></a></li>
                            <li><a href='https://instagram.com' target='_blank'><BsInstagram/></a></li>
                        </ul>
                    </div>
                </div>
                <div className='footer_menu'>
                    <ul>
                        <Link to='/'>Acasa</Link>
                        <Link to='/servicii'>Servicii</Link>
                        <Link to='/contact'>Contact</Link>
                    </ul>
                </div>
            </div>
            <Copyright/>
        </footer>
    );
}

export default Footer;