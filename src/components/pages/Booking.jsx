import React, { useState } from 'react';
import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';

const Booking = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        people: '',
        message: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        // Save data to localStorage
        localStorage.setItem('bookingFormData', JSON.stringify(formData));

        // Display success message
        iziToast.success({
            title: 'Success',
            message: 'Your booking request was sent. We will call back or send an Email to confirm your reservation. Thank you!',
            position: 'topCenter',
        });

        // Clear form data
        setFormData({
            name: '',
            email: '',
            phone: '',
            date: '',
            time: '',
            people: '',
            message: '',
        });
    };

    const validateForm = () => {
        const { name, email, phone, date, time, people } = formData;

        if (!name.trim() || !email.trim() || !phone.trim() || !date.trim() || !time.trim() || !people.trim()) {
            // Display errors using iziToast
            iziToast.error({
                title: 'Error',
                message: 'Please fill in all the required fields correctly.',
                position: 'topCenter',
            });
            return false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            // Display errors using iziToast
            iziToast.error({
                title: 'Error',
                message: 'Please enter a valid email address.',
                position: 'topCenter',
            });
            return false;
        }

        return true;
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <section id="book-a-table" className="book-a-table bg-[#0c0b09]">
            <div className="container mt-24" data-aos="fade-up">
                <div className="section-title">
                    <h2>Reservation</h2>
                    <p>Book a Table</p>
                </div>
                <form
                    method="post"
                    role="form"
                    className="php-email-form"
                    data-aos="fade-up"
                    data-aos-delay="100"
                    onSubmit={handleSubmit}
                >
                     <div className="row">
                        <div className="col-lg-4 col-md-6 form-group">
                            <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars"  value={formData.name} onChange={handleChange}/>
                            <div className="validate"></div>
                        </div>
                        <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
                            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email"  value={formData.email} onChange={handleChange}/>
                            <div className="validate"></div>
                        </div>
                        <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
                            <input type="text" className="form-control" name="phone" id="phone" placeholder="Your Phone" data-rule="minlen:4" data-msg="Please enter at least 4 chars"  value={formData.phone} onChange={handleChange}/>
                            <div className="validate"></div>
                        </div>
                        <div className="col-lg-4 col-md-6 form-group mt-3">
                            <input type="date" name="date" className="form-control" id="date" placeholder="Date" data-rule="minlen:4" data-msg="Please enter at least 4 chars"  value={formData.date} onChange={handleChange}/>
                            <div className="validate"></div>
                        </div>
                        <div className="col-lg-4 col-md-6 form-group mt-3">
                            <input type="time" className="form-control" name="time" id="time" placeholder="Time" data-rule="minlen:4" data-msg="Please enter at least 4 chars"  value={formData.time} onChange={handleChange}/>
                            <div className="validate"></div>
                        </div>
                        <div className="col-lg-4 col-md-6 form-group mt-3">
                            <input type="number" className="form-control" name="people" id="people" placeholder="# of people" data-rule="minlen:1" data-msg="Please enter at least 1 chars" value={formData.people} onChange={handleChange}/>
                            <div className="validate"></div>
                        </div>
                    </div>
                    <div className="form-group mt-3">
                        <textarea
                            className="form-control"
                            name="message"
                            rows="5"
                            placeholder="Message"
                            value={formData.message}
                            onChange={handleChange}
                        ></textarea>
                        <div className="validate"></div>
                    </div>
                    <div className="mb-3">
                        <div className="loading">Loading</div>
                        <div className="error-message"></div>
                        <div className="sent-message">
                            Your booking request was sent. We will call back or send an Email to confirm your reservation.
                            Thank you!
                        </div>
                    </div>
                    <div className="text-center">
                        <button type="submit">Book a Table</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Booking;
