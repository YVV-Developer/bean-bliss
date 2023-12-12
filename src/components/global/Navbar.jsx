import React from 'react'
import { Link, NavLink } from 'react-router-dom'
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
                    <h1 className="logo me-auto me-lg-0"><Link to="/">BeanBliss</Link></h1>
                    <nav id="navbar" className="navbar order-last order-lg-0">
                        <ul>
                            <li><NavLink className="nav-link scrollto" to="/">Home</NavLink></li>
                            <li><NavLink className="nav-link scrollto" to="/about">About</NavLink></li>
                            <li><NavLink className="nav-link scrollto" to="/menu">Menu</NavLink></li>
                            <li><NavLink className="nav-link scrollto" to="/events">Events</NavLink></li>
                            <li><NavLink className="nav-link scrollto" to="/gallery">Gallery</NavLink></li>
                            <li><NavLink className="nav-link scrollto" to="/contact">Contact</NavLink></li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle"></i>
                    </nav>
                    <Link to="/booking" className="book-a-table-btn scrollto d-none d-lg-flex no-underline">Book a table</Link>

                </div>
            </header>
        </>
    )
}

export default Navbar
