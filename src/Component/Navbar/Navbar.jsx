import React, { useEffect } from 'react';
import './Navbar.css';
import Mainlogo from '../../../public/assets/mainlogo.png'
export default function Navbar() {
    /*=============== SHOW MENU ===============*/
    useEffect(() => {
        const toggle = document.getElementById('nav-toggle');
        const nav = document.getElementById('nav-menu');

        if (toggle && nav) {
            const handleToggleClick = () => {
                nav.classList.toggle('show-menu');
                toggle.classList.toggle('show-icon');
            };

            toggle.addEventListener('click', handleToggleClick);

            // Clean up event listener on component unmount
            return () => {
                toggle.removeEventListener('click', handleToggleClick);
            };
        }
    }, []);

    return (
        <header className="header">
            <nav className="nav container">
                <div className="nav__data">
                    <a href="#" className="nav__logo">
                        <img className='Mainlogo' src={Mainlogo} alt="GGITS" />
                    </a>
                    <div className="nav__toggle" id="nav-toggle">
                        <i className="ri-menu-line nav__burger"></i>
                        <i className="ri-close-line nav__close"></i>
                    </div>
                </div>
                {/* <!--=============== NAV MENU ===============--> */}
                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list">
                        <li><a href="#" className="nav__link">Home</a></li>
                        <li><a href="#" className="nav__link">Company</a></li>
                        {/* <!--=============== DROPDOWN 1 ===============--> */}
                        <li className="dropdown__item">
                            <div className="nav__link">
                                Analytics <i className="ri-arrow-down-s-line dropdown__arrow"></i>
                            </div>
                            <ul className="dropdown__menu">
                                <li>
                                    <a href="#" className="dropdown__link">
                                        <i className="ri-pie-chart-line"></i> Overview
                                    </a>                          
                                </li>
                                <li>
                                    <a href="#" className="dropdown__link">
                                        <i className="ri-arrow-up-down-line"></i> Transactions
                                    </a>
                                </li>
                                {/* <!--=============== DROPDOWN SUBMENU ===============--> */}
                                <li className="dropdown__subitem">
                                    <div className="dropdown__link">
                                        <i className="ri-bar-chart-line"></i> Reports <i className="ri-add-line dropdown__add"></i>
                                    </div>
                                    <ul className="dropdown__submenu">
                                        <li>
                                            <a href="#" className="dropdown__sublink">
                                                <i className="ri-file-list-line"></i> Documents
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="dropdown__sublink">
                                                <i className="ri-cash-line"></i> Payments
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="dropdown__sublink">
                                                <i className="ri-refund-2-line"></i> Refunds
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><a href="#" className="nav__link">Products</a></li>
                        {/* <!--=============== DROPDOWN 2 ===============--> */}
                        <li className="dropdown__item">
                            <div className="nav__link">
                                Users <i className="ri-arrow-down-s-line dropdown__arrow"></i>
                            </div>
                            <ul className="dropdown__menu">
                                <li>
                                    <a href="#" className="dropdown__link">
                                        <i className="ri-user-line"></i> Profiles
                                    </a>                          
                                </li>
                                <li>
                                    <a href="#" className="dropdown__link">
                                        <i className="ri-lock-line"></i> Accounts
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="dropdown__link">
                                        <i className="ri-message-3-line"></i> Messages
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li><a href="#" className="nav__link">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
