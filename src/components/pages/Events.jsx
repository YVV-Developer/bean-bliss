import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import eventPrivet from '../../assets/img/event-private.jpg'
import eventBdy from '../../assets/img/event-birthday.jpg'
import eventImg from '../../assets/img/event-custom.jpg'

const Events = () => {
    return (
        <>
            <section id="events" className="events">
                <div className="container mt-24" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Events</h2>
                        <p>Organize Your Events in our Restaurant</p>
                    </div>
                    <div className="events-slider swiper" data-aos="fade-up" data-aos-delay="100">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide mb-6">
                                <div className="row event-item">
                                    <div className="col-lg-6">
                                        <img src={eventBdy} className="img-fluid" alt="" />
                                    </div>
                                    <div className="col-lg-6 pt-4 pt-lg-0 content">
                                        <h3>Birthday Parties</h3>
                                        <div className="price">
                                            <p><span>$189</span></p>
                                        </div>
                                        <p className="fst-italic">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                            magna aliqua.
                                        </p>
                                        <ul>
                                            <li><i><FontAwesomeIcon icon={faCheckCircle} /></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                            <li><i><FontAwesomeIcon icon={faCheckCircle} /></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                            <li><i><FontAwesomeIcon icon={faCheckCircle} /></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                        </ul>
                                        <p>
                                            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                            velit esse cillum dolore eu fugiat nulla pariatur
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide mb-6">
                                <div className="row event-item">
                                    <div className="col-lg-6 pt-4 pt-lg-0 content">
                                        <h3>Private Parties</h3>
                                        <div className="price">
                                            <p><span>$290</span></p>
                                        </div>
                                        <p className="fst-italic">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                            magna aliqua.
                                        </p>
                                        <ul>
                                            <li><i><FontAwesomeIcon icon={faCheckCircle} /></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                            <li><i><FontAwesomeIcon icon={faCheckCircle} /></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                            <li><i><FontAwesomeIcon icon={faCheckCircle} /></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                        </ul>
                                        <p>
                                            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                            velit esse cillum dolore eu fugiat nulla pariatur
                                        </p>
                                    </div>
                                    <div className="col-lg-6">
                                        <img src={eventPrivet} className="img-fluid" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="row event-item">
                                    <div className="col-lg-6">
                                        <img src={eventImg} className="img-fluid" alt="" />
                                    </div>
                                    <div className="col-lg-6 pt-4 pt-lg-0 content">
                                        <h3>Custom Parties</h3>
                                        <div className="price">
                                            <p><span>$99</span></p>
                                        </div>
                                        <p className="fst-italic">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                            magna aliqua.
                                        </p>
                                        <ul>
                                            <li><i><FontAwesomeIcon icon={faCheckCircle} /></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                            <li><i><FontAwesomeIcon icon={faCheckCircle} /></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                            <li><i><FontAwesomeIcon icon={faCheckCircle} /></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                        </ul>
                                        <p>
                                            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                            velit esse cillum dolore eu fugiat nulla pariatur
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Events
