import React from 'react';
import './roadmap.css';
import {GiDiscussion,GiOnTarget} from 'react-icons/gi';
import {MdOutlineScreenSearchDesktop} from 'react-icons/md';
import {RiCodeBoxLine} from 'react-icons/ri';

function Roadmap(props) {
    return (
        <div className='roadmap__container'>
            {/*<h2>Roadmap</h2>*/}
            <div className='roadmap__content'>
                <div className='roadmap__items'>
                    <article className='roadmap__item'>
                        <div className='roadmap__icon_container'>
                            <GiDiscussion className="roadmap__item-icon" />
                            <div className='roadmap__item-number'>1</div>
                        </div>
                        <div className='roadmap__divider'></div>
                        <div className='roadmap__item-content'>
                            <h3>Consultanță</h3>
                            <p>Oferim consultanță gratuită, pentru a stabilii obiectivele tale.</p>
                        </div>
                    </article>
                    <article className='roadmap__item'>
                        <div className='roadmap__icon_container'>
                            <MdOutlineScreenSearchDesktop className="roadmap__item-icon" />
                            <div className='roadmap__item-number'>2</div>
                        </div>
                        <div className='roadmap__divider'></div>
                        <div className='roadmap__item-content'>
                            <h3>Research</h3>
                            <p>Căutăm soluția optimă pentru afacerea ta, și stabilim pașii care trebuie urmați</p>
                        </div>
                    </article>
                    <article className='roadmap__item'>
                        <div className='roadmap__divider roadmap__divider-ipad'></div>
                        <div className='roadmap__icon_container'>
                            <RiCodeBoxLine className="roadmap__item-icon" />
                            <div className='roadmap__item-number'>3</div>
                        </div>
                        <div className='roadmap__divider hide-ipad'></div>
                        <div className='roadmap__item-content '>
                            <h3>Dezvoltare</h3>
                            <p>Dezvoltăm proiectul utilizând cele mai noi tehnologii</p>
                        </div>
                    </article>
                    <article className='roadmap__item'>
                        <div className='roadmap__icon_container'>
                            <GiOnTarget className="roadmap__item-icon" />
                            <div className='roadmap__item-number'>4</div>
                        </div>

                        <div className='roadmap__item-content'>
                            <h3>Atingere Obiective</h3>
                            <p>Atingem obiectivele stabilite împreună și îți ducem afacerea la nivelul următor.</p>
                        </div>
                    </article>
                </div>
                <div className='roadmap__bottom_text'>
                    <p>Credem că proiectarea produselor si serviciilor în strâns parteneriat cu clienții noștri
                        este singura modalitate de a avea un impact real asupra afacerii lor.</p>
                </div>
            </div>
        </div>
    );
}

export default Roadmap;