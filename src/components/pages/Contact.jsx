import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faEnvelope, faMap } from '@fortawesome/free-regular-svg-icons';
import { faMobileAndroidAlt } from '@fortawesome/free-solid-svg-icons';
import iziToast from 'izitoast';
import { Helmet } from 'react-helmet';

import 'izitoast/dist/css/iziToast.min.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
            // Display errors using iziToast
            iziToast.error({
                title: 'Error',
                message: 'Please fill in all the required fields correctly.',
                position: 'topCenter',
            });
        } else {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                // Display errors using iziToast
                iziToast.error({
                    title: 'Error',
                    message: 'Please enter a valid email address.',
                    position: 'topCenter',
                });
            } else {
                console.log("dd");
                // Save data to localStorage
                localStorage.setItem('contactFormData', JSON.stringify(formData));

                // Display success message
                iziToast.success({
                    title: 'Success',
                    message: 'Form submitted successfully!',
                    position: 'topCenter',
                });

                // Clear form data
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: '',
                });
            }
        }
    };


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    return (
        <>
            <Helmet>
                <title>Contact Us - BeanBliss</title>
            </Helmet>
            <section id="contact" className="contact bg-[#0c0b09] text-white">
                <div className="container mt-24" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Contact</h2>
                        <p>Contact Us</p>
                    </div>
                </div>
                
                <div className="container" data-aos="fade-up">
                    <div className="row mt-5">
                        <div className="col-lg-4">
                            <div className="info">
                                <div className="address">
                                    <i><FontAwesomeIcon icon={faMap} /></i>
                                    <h4>Location:</h4>
                                    <p>A108 Adam Street, New York, NY 535022</p>
                                </div>
                                <div className="open-hours">
                                    <i><FontAwesomeIcon icon={faClock} /></i>
                                    <h4>Open Hours:</h4>
                                    <p>
                                        Monday-Saturday:<br />
                                        11:00 AM - 2300 PM
                                    </p>
                                </div>
                                <div className="email">
                                    <i><FontAwesomeIcon icon={faEnvelope} /></i>
                                    <h4>Email:</h4>
                                    <p>info@example.com</p>
                                </div>
                                <div className="phone">
                                    <i><FontAwesomeIcon icon={faMobileAndroidAlt} /></i>
                                    <h4>Call:</h4>
                                    <p>+1 5589 55488 55s</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-8 mt-5 mt-lg-0">
                            <form action="" method="post" role="form" className="php-email-form">
                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                                    </div>
                                    <div className="col-md-6 form-group mt-3 mt-md-0">
                                        <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
                                </div>
                                <div className="form-group mt-3">
                                    <textarea className="form-control" name="message" rows="8" placeholder="Message" value={formData.messege} onChange={handleChange} required></textarea>
                                </div>
                                <div className="my-3">
                                    <div className="loading">Loading</div>
                                    <div className="error-message"></div>
                                    <div className="sent-message">Your message has been sent. Thank you!</div>
                                </div>
                                <div className="text-center"><button onClick={handleSubmit} type='submit'>Send Message</button></div>
                            </form>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up" className='mt-5'>
                    <iframe style={{ border: '0', width: '100%', height: '350px' }} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameBorder="0" allowFullScreen></iframe>
                </div>
            </section>
        </>
    )
}

export default Contact
