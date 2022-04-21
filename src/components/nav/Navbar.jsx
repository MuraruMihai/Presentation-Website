import React, {useState, useEffect} from 'react';
import './navbar.css';
import {Link} from "react-router-dom";
import {CgMenuRight, CgClose} from 'react-icons/cg';
import logoNew from "../../assets/images/logo-white3.png";

function Navbar() {

    const [clickStatus, setClickStatus] = useState(false);
    const [menuBtnStatus, setMenuBtnStatus] = useState(false);
    const [activeNav, setActiveNav] = useState('');
    const [navbarBg, setNavbarBg] = useState(false);

    const handleClickStatus = () => setClickStatus(!clickStatus);
    const closeMenu = () => setClickStatus(false);

    const showMenuBtn = () => {
        if(window.innerWidth <= 1024){
            setMenuBtnStatus(false);
        }else{
            setMenuBtnStatus(true);
        }
    }

    const changeBackground = () => {
        // console.log(window.scrollY)
        if (window.scrollY >= 66) {
            setNavbarBg(true)
        } else {
            setNavbarBg(false)
        }
    }

    useEffect(() => {
        showMenuBtn();
    }, []);

    window.addEventListener('resize', showMenuBtn);

    useEffect(() => {
        changeBackground();
        window.addEventListener("scroll", changeBackground);
    })
    return (
        <nav className={navbarBg ? "navbar sticky" : "navbar"} >
            <Link to='/'  onClick={() => {
                setActiveNav('')}}
                className='logo_link' >
                <img src={logoNew} className="logo_img"/>
            </Link>

            <ul className={clickStatus ? 'nav__links active' : 'nav__links'} >
                <Link to='/'  onClick={() => {
                    closeMenu()
                    setActiveNav('')}}
                    className={activeNav === '' ? 'home nav__item active' : 'home nav__item' }>
                    <li>Acasa</li>
                </Link>

                <Link to='/servicii' onClick={() => {
                    closeMenu()
                    setActiveNav('/servicii')}}
                      className={activeNav === '/servicii' ? 'services nav__item active' : 'services nav__item' }>
                    <li>Servicii</li>
                </Link>
                <Link to='/contact' onClick={() => {
                    closeMenu()
                    setActiveNav('/contact')}}
                      className={activeNav === '/contact' ? 'contact nav__item active' : 'contact nav__item' }>
                    <li>Contact</li>
                </Link>
            </ul>

            <button className='mobile__menu-icon' onClick={handleClickStatus}>
                {clickStatus ? <CgClose/> : <CgMenuRight/> }
            </button>
        </nav>
    );
}

export default Navbar;