import React from 'react'
import { NavLink } from 'react-router-dom'
import aboutImg from '../../assets/img/about.jpg'

const About = () => {
    return (
        <>
            <section id="about" className="about">
                <div className="container" data-aos="fade-up">
                    <div className="section-title mt-24 relative">
                        <h2>About Us</h2>
                        <p>Check About Our Restaurant</p>
                    </div>
                    <div className="row text-white">
                        <div className="col-lg-6 order-1 order-lg-2" data-aos="zoom-in" data-aos-delay="100">
                            <div className="about-img">
                                <img src={aboutImg} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content invert-0">
                            <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
                            <p className="fst-italic">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                magna aliqua.
                            </p>
                            <ul>
                                <li><i className="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                <li><i className="bi bi-check-circle"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                <li><i className="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                            </ul>
                            <p>
                                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            <section id="why-us" className="why-us bg-black">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Why Us</h2>
                        <p>Why Choose Our Restaurant</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="box bg-[#1a1814]" data-aos="zoom-in" data-aos-delay="100">
                                <span>01</span>
                                <h4>Lorem Ipsum</h4>
                                <p>Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur ducimus vero placeat</p>
                            </div>
                        </div>
                        <div className="col-lg-4 mt-4 mt-lg-0">
                            <div className="box bg-[#1a1814]" data-aos="zoom-in" data-aos-delay="200">
                                <span>02</span>
                                <h4>Repellat Nihil</h4>
                                <p>Dolorem est fugiat occaecati voluptate velit esse. Dicta veritatis dolor quod et vel dire leno para dest</p>
                            </div>
                        </div>
                        <div className="col-lg-4 mt-4 mt-lg-0">
                            <div className="box bg-[#1a1814]" data-aos="zoom-in" data-aos-delay="300">
                                <span>03</span>
                                <h4> Ad ad velit qui</h4>
                                <p>Molestiae officiis omnis illo asperiores. Aut doloribus vitae sunt debitis quo vel nam quis</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default About
