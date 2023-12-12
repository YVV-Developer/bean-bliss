import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
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


            <header id="header" className="fixed-top d-flex align-items-cente">
                <div className="container-fluid container-xl d-flex align-items-center justify-content-lg-between">

                    <h1 className="logo me-auto me-lg-0"><a href="index.html">Restaurantly</a></h1>



                    <nav id="navbar" className="navbar order-last order-lg-0">
                        <ul>
                            <li><a className="nav-link scrollto active" href="/">Home</a></li>
                            <li><NavLink className="nav-link scrollto" to="/about">About</NavLink></li>
                            <li><NavLink className="nav-link scrollto" to="/menu">Menu</NavLink></li>
                            <li><a className="nav-link scrollto" href="#specials">Specials</a></li>
                            <li><a className="nav-link scrollto" href="#events">Events</a></li>
                            <li><a className="nav-link scrollto" href="#chefs">Chefs</a></li>
                            <li><a className="nav-link scrollto" href="/gallery">Gallery</a></li>
                            <li><a className="nav-link scrollto" href="/contact">Contact</a></li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle"></i>
                    </nav>
                    <a href="#book-a-table" className="book-a-table-btn scrollto d-none d-lg-flex">Book a table</a>

                </div>
            </header>
        </>
    )
}

export default Navbar
