import React from 'react';
import './topbar.css';
import {SiMinutemailer} from 'react-icons/si';
import {BsTelephone} from 'react-icons/bs';
import {CgLogIn} from 'react-icons/cg';

function TopBar(props) {
    return (
        <section id='top-bar'>
            <div className="top-bar__container">
                <div className='top-bar__left'>
                    <div className='top-bar__email'>
                        <SiMinutemailer className='top-bar__email-icon'/>
                        <a href='mailto:contact@murarugraphics.com'>contact@murarugraphics.com</a>
                    </div>
                    <div className='top-bar__phone'>
                        <BsTelephone className='top-bar__phone-icon'/>
                        <a href='tel:+40721002903'>+4 0721 002 903</a>
                    </div>
                </div>
                <div className='top-bar__right'>
                    <div className='top-bar__language'>
                        <span>RO</span>
                    </div>
                    <div className='top-bar__auth'>
                        <CgLogIn className='top-bar__auth-icon'/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TopBar;