import React, { useEffect } from 'react';
import aboutImg from '../../assets/img/about.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      <section id="hero" class="d-flex align-items-center">
        <div class="container position-relative text-center text-lg-start">
          <div class="row">
            <div class="col-lg-8">
              <h1>Welcome to <span>Restaurantly</span></h1>
              <h2>Delivering great food for more than 18 years!</h2>
              <div class="btns">
                <a href="#menu" class="btn-menu animated fadeInUp scrollto">Our Menu</a>
                <a href="#book-a-table" class="btn-book animated fadeInUp scrollto">Book a Table</a>
              </div>
            </div>
            <div class="col-lg-4 d-flex align-items-center justify-content-center position-relative" data-aos="zoom-in" data-aos-delay="200">
              <a href="https://www.youtube.com/watch?v=u6BOC7CDUTQ" class="glightbox play-btn"></a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" class="about">
        <div class="container" data-aos="fade-up">

          <div class="row">
            <div class="col-lg-6 order-1 order-lg-2" data-aos="zoom-in" data-aos-delay="100">
              <div class="about-img">
                <img src={aboutImg} alt="" />
              </div>
            </div>
            <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
              <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
              <p class="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua.
              </p>
              <ul>
                <li><i class="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                <li><i class="bi bi-check-circle"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                <li><i class="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
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
    </>
  )
}

export default Hero;
