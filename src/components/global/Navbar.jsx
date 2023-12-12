import React from 'react'
import logo from '../../assets/images/logo.png'
const Navbar = () => {
    return (
        <>
            <div class="tm-top-header">
                <div class="container">
                    <div class="row">
                        <div class="tm-top-header-inner">
                            <div class="tm-logo-container flex-row">
                                <img src={logo} alt="Logo" class="tm-site-logo" />
                                <h1 class="tm-site-name tm-handwriting-font">Cafe House</h1>
                            </div>
                            <div class="mobile-menu-icon">
                                <i class="fa fa-bars"></i>
                            </div>
                            <nav class="tm-nav">
                                <ul>
                                    <li><a href="index.html" class="active">Home</a></li>
                                    <li><a href="today-special.html">Today Special</a></li>
                                    <li><a href="menu.html">Menu</a></li>
                                    <li><a href="contact.html">Contact</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
