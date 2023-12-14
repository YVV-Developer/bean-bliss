import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <>
            <div id="topbar" className="d-flex align-items-center fixed-top">
                <div className="container d-flex justify-content-center justify-content-md-between">

                    <div className="contact-info d-flex align-items-center">
                        <i className="bi bi-phone d-flex align-items-center"><span>+1 5589 55488 55</span></i>
                        <i className="bi bi-clock d-flex align-items-center ms-4"><span> Mon-Sat: 11AM - 23PM</span></i>
                    </div>

                    <div className="languages d-none d-md-flex align-items-center">
                        <ul>
                            <li>En</li>
                            <li><a href="#">De</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <header id="header" className="fixed-top align-items-center">
                <nav>
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
                        
                        <h1 className="logo text-lg m-3 md:m-0 md:text-3xl"><Link to="/">BeanBliss</Link></h1>

                        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">

                            <Link to="/booking" className='no-underline'><button type="button" className="font-medium text-sm px-4 py-2 text-center book-a-table-btn hidden md:block">Book a table</button></Link>

                            <button onClick={handleMenuToggle} className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden" aria-expanded={isMenuOpen} aria-controls="navbar-cta">
                                <FontAwesomeIcon icon={isMenuOpen ? faTimes : faList} className="w-5 h-5" />
                            </button>
                        </div>

                        <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? '' : 'hidden'}`} id="navbar-cta">
                            <ul className="navbar flex flex-col font-medium md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
                                <li>
                                    <NavLink onClick={() => setIsMenuOpen(false)} className="block py-2 px-3 md:p-0 no-underline" to="/">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink onClick={() => setIsMenuOpen(false)} className="block py-2 px-3 md:p-0 no-underline" to="/about">About</NavLink>
                                </li>
                                <li>
                                    <NavLink onClick={() => setIsMenuOpen(false)} className="block py-2 px-3 md:p-0 no-underline" to="/menu">Menu</NavLink>
                                </li>
                                <li>
                                    <NavLink onClick={() => setIsMenuOpen(false)} className="block py-2 px-3 md:p-0 no-underline" to="/events">Events</NavLink>
                                </li>
                                <li>
                                    <NavLink onClick={() => setIsMenuOpen(false)} className="block py-2 px-3 md:p-0 no-underline" to="/gallery">Gallery</NavLink>
                                </li>
                                <li>
                                    <NavLink onClick={() => setIsMenuOpen(false)} className="block py-2 px-3 md:p-0 no-underline" to="/contact">Contact</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar
