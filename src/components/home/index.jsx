import React, { useEffect } from 'react';
import specialItem1 from '../../assets/img/specials-1.png'
import specialItem2 from '../../assets/img/specials-2.png'
import specialItem3 from '../../assets/img/specials-3.png'
import specialItem4 from '../../assets/img/specials-4.png'
import specialItem5 from '../../assets/img/specials-5.png'
import testimonials1 from '../../assets/img/testimonials/testimonials-1.jpg'
import testimonials2 from '../../assets/img/testimonials/testimonials-2.jpg'
import testimonials3 from '../../assets/img/testimonials/testimonials-3.jpg'
import testimonials4 from '../../assets/img/testimonials/testimonials-4.jpg'
import testimonials5 from '../../assets/img/testimonials/testimonials-5.jpg'
import galary1 from '../../assets/img/gallery/gallery-1.jpg'
import galary2 from '../../assets/img/gallery/gallery-2.jpg'
import galary3 from '../../assets/img/gallery/gallery-3.jpg'
import galary4 from '../../assets/img/gallery/gallery-4.jpg'
import galary5 from '../../assets/img/gallery/gallery-5.jpg'
import galary6 from '../../assets/img/gallery/gallery-6.jpg'
import galary7 from '../../assets/img/gallery/gallery-7.jpg'
import galary8 from '../../assets/img/gallery/gallery-8.jpg'
import chefs1 from '../../assets/img/chefs/chefs-1.jpg'
import chefs2 from '../../assets/img/chefs/chefs-2.jpg'
import chefs3 from '../../assets/img/chefs/chefs-3.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faClock, faEnvelope, faMap } from '@fortawesome/free-regular-svg-icons';
import { faMobileAndroidAlt, faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const Hero = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      <section id="hero" className="d-flex align-items-center">
        <div className="container position-relative text-center text-lg-start">
          <div className="row">
            <div className="col-lg-8">
              <h1>Welcome to <span>Restaurantly</span></h1>
              <h2>Delivering great food for more than 18 years!</h2>
              <div className="btns">
                <a href="#menu" className="btn-menu animated fadeInUp scrollto no-underline">Our Menu</a>
                <a href="#book-a-table" className="btn-book animated fadeInUp scrollto no-underline">Book a Table</a>
              </div>
            </div>
            <div className="col-lg-4 d-flex align-items-center justify-content-center position-relative" data-aos="zoom-in" data-aos-delay="200">
              <a href="https://www.youtube.com/watch?v=u6BOC7CDUTQ" className="glightbox play-btn"></a>
            </div>
          </div>
        </div>
      </section>

      <section id="specials" className="specials bg-[#0c0b09]">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Specials</h2>
            <p>Check Our Specials</p>
          </div>
          <div className="row" data-aos="fade-up" data-aos-delay="100">
            <div className="col-lg-3">
              <ul className="nav nav-tabs flex-column">
                <li className="nav-item">
                  <a className="nav-link active show" data-bs-toggle="tab" href="#tab-1">Modi sit est</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#tab-2">Unde praesentium sed</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#tab-3">Pariatur explicabo vel</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#tab-4">Nostrum qui quasi</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#tab-5">Iusto ut expedita aut</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-9 mt-4 mt-lg-0">
              <div className="tab-content">
                <div className="tab-pane active show" id="tab-1">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h3>Architecto ut aperiam autem id</h3>
                      <p className="fst-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
                      <p>Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero</p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img src={specialItem1} alt="" className="img-fluid" />
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="tab-2">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h3>Et blanditiis nemo veritatis excepturi</h3>
                      <p className="fst-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
                      <p>Ea ipsum voluptatem consequatur quis est. Illum error ullam omnis quia et reiciendis sunt sunt est. Non aliquid repellendus itaque accusamus eius et velit ipsa voluptates. Optio nesciunt eaque beatae accusamus lerode pakto madirna desera vafle de nideran pal</p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img src={specialItem2} alt="" className="img-fluid" />
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="tab-3">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h3>Impedit facilis occaecati odio neque aperiam sit</h3>
                      <p className="fst-italic">Eos voluptatibus quo. Odio similique illum id quidem non enim fuga. Qui natus non sunt dicta dolor et. In asperiores velit quaerat perferendis aut</p>
                      <p>Iure officiis odit rerum. Harum sequi eum illum corrupti culpa veritatis quisquam. Neque necessitatibus illo rerum eum ut. Commodi ipsam minima molestiae sed laboriosam a iste odio. Earum odit nesciunt fugiat sit ullam. Soluta et harum voluptatem optio quae</p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img src={specialItem3} alt="" className="img-fluid" />
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="tab-4">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h3>Fuga dolores inventore laboriosam ut est accusamus laboriosam dolore</h3>
                      <p className="fst-italic">Totam aperiam accusamus. Repellat consequuntur iure voluptas iure porro quis delectus</p>
                      <p>Eaque consequuntur consequuntur libero expedita in voluptas. Nostrum ipsam necessitatibus aliquam fugiat debitis quis velit. Eum ex maxime error in consequatur corporis atque. Eligendi asperiores sed qui veritatis aperiam quia a laborum inventore</p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img src={specialItem4} alt="" className="img-fluid" />
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="tab-5">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h3>Est eveniet ipsam sindera pad rone matrelat sando reda</h3>
                      <p className="fst-italic">Omnis blanditiis saepe eos autem qui sunt debitis porro quia.</p>
                      <p>Exercitationem nostrum omnis. Ut reiciendis repudiandae minus. Omnis recusandae ut non quam ut quod eius qui. Ipsum quia odit vero atque qui quibusdam amet. Occaecati sed est sint aut vitae molestiae voluptate vel</p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img src={specialItem5} alt="" className="img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="book-a-table" className="book-a-table bg-[#0c0b09]">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Reservation</h2>
            <p>Book a Table</p>
          </div>
          <form method="post" role="form" className="php-email-form" data-aos="fade-up" data-aos-delay="100">
            <div className="row">
              <div className="col-lg-4 col-md-6 form-group">
                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                <div className="validate"></div>
              </div>
              <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                <div className="validate"></div>
              </div>
              <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
                <input type="text" className="form-control" name="phone" id="phone" placeholder="Your Phone" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                <div className="validate"></div>
              </div>
              <div className="col-lg-4 col-md-6 form-group mt-3">
                <input type="text" name="date" className="form-control" id="date" placeholder="Date" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                <div className="validate"></div>
              </div>
              <div className="col-lg-4 col-md-6 form-group mt-3">
                <input type="text" className="form-control" name="time" id="time" placeholder="Time" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                <div className="validate"></div>
              </div>
              <div className="col-lg-4 col-md-6 form-group mt-3">
                <input type="number" className="form-control" name="people" id="people" placeholder="# of people" data-rule="minlen:1" data-msg="Please enter at least 1 chars" />
                <div className="validate"></div>
              </div>
            </div>
            <div className="form-group mt-3">
              <textarea className="form-control" name="message" rows="5" placeholder="Message"></textarea>
              <div className="validate"></div>
            </div>
            <div className="mb-3">
              <div className="loading">Loading</div>
              <div className="error-message"></div>
              <div className="sent-message">Your booking request was sent. We will call back or send an Email to confirm your reservation. Thank you!</div>
            </div>
            <div className="text-center"><button type="submit">Book a Table</button></div>
          </form>
        </div>
      </section>


      <section id="testimonials" className="testimonials section-bg text-white">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Testimonials</h2>
            <p>What they're saying about us</p>
          </div>
          <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="testimonial-item">
                  <p>
                    <i className="quote-icon-left"><FontAwesomeIcon icon={faQuoteLeft} /></i>
                    Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                    <i className="quote-icon-right"><FontAwesomeIcon icon={faQuoteRight} /></i>
                  </p>
                  <img src={testimonials1} className="testimonial-img" alt="" />
                  <h3>Saul Goodman</h3>
                  <h4>Ceo &amp; Founder</h4>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="testimonial-item">
                  <p>
                    <i className="quote-icon-left"><FontAwesomeIcon icon={faQuoteLeft} /></i>
                    Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                    <i className="quote-icon-right"><FontAwesomeIcon icon={faQuoteRight} /></i>
                  </p>
                  <img src={testimonials2} className="testimonial-img" alt="" />
                  <h3>Sara Wilsson</h3>
                  <h4>Designer</h4>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="testimonial-item">
                  <p>
                    <i className="quote-icon-left"><FontAwesomeIcon icon={faQuoteLeft} /></i>
                    Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                    <i className="quote-icon-right"><FontAwesomeIcon icon={faQuoteRight} /></i>
                  </p>
                  <img src={testimonials3} className="testimonial-img" alt="" />
                  <h3>Jena Karlis</h3>
                  <h4>Store Owner</h4>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="testimonial-item">
                  <p>
                    <i className="quote-icon-left"><FontAwesomeIcon icon={faQuoteLeft} /></i>
                    Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                    <i className="quote-icon-right"><FontAwesomeIcon icon={faQuoteRight} /></i>
                  </p>
                  <img src={testimonials4} className="testimonial-img" alt="" />
                  <h3>Matt Brandon</h3>
                  <h4>Freelancer</h4>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="testimonial-item">
                  <p>
                    <i className="quote-icon-left"><FontAwesomeIcon icon={faQuoteLeft} /></i>
                    Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                    <i className="quote-icon-right"><FontAwesomeIcon icon={faQuoteRight} /></i>
                  </p>
                  <img src={testimonials5} className="testimonial-img" alt="" />
                  <h3>John Larson</h3>
                  <h4>Entrepreneur</h4>
                </div>
              </div>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </section>


      <section id="gallery" className="gallery bg-[#0c0b09]">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Gallery</h2>
            <p>Some photos from Our Restaurant</p>
          </div>
        </div>
        <div className="container-fluid" data-aos="fade-up" data-aos-delay="100">
          <div className="row g-0">
            <div className="col-lg-4 col-md-6">
              <div className="gallery-item">
                <a className="gallery-lightbox" data-gall="gallery-item">
                  <img src={galary1} alt="" className="img-fluid" />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="gallery-item">
                <a className="gallery-lightbox" data-gall="gallery-item">
                  <img src={galary2} alt="" className="img-fluid" />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="gallery-item">
                <a className="gallery-lightbox" data-gall="gallery-item">
                  <img src={galary3} alt="" className="img-fluid" />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="gallery-item">
                <a className="gallery-lightbox" data-gall="gallery-item">
                  <img src={galary4} alt="" className="img-fluid" />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="gallery-item">
                <a className="gallery-lightbox" data-gall="gallery-item">
                  <img src={galary5} alt="" className="img-fluid" />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="gallery-item">
                <a className="gallery-lightbox" data-gall="gallery-item">
                  <img src={galary6} alt="" className="img-fluid" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="chefs" className="chefs bg-[#0c0b09]">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Chefs</h2>
            <p>Our Proffesional Chefs</p>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="member" data-aos="zoom-in" data-aos-delay="100">
                <img src={chefs1} className="img-fluid" alt="" />
                <div className="member-info">
                  <div className="member-info-content">
                    <h4>Walter White</h4>
                    <span>Master Chef</span>
                  </div>
                  <div className="social">
                    <a href=""><i><FontAwesomeIcon icon={faXTwitter} /></i></a>
                    <a href=""><i><FontAwesomeIcon icon={faFacebook} /></i></a>
                    <a href=""><i><FontAwesomeIcon icon={faInstagram} /></i></a>
                    <a href=""><i><FontAwesomeIcon icon={faLinkedin} /></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="member" data-aos="zoom-in" data-aos-delay="200">
                <img src={chefs2} className="img-fluid" alt="" />
                <div className="member-info">
                  <div className="member-info-content">
                    <h4>Sarah Jhonson</h4>
                    <span>Patissier</span>
                  </div>
                  <div className="social">
                    <a href=""><i><FontAwesomeIcon icon={faXTwitter} /></i></a>
                    <a href=""><i><FontAwesomeIcon icon={faFacebook} /></i></a>
                    <a href=""><i><FontAwesomeIcon icon={faInstagram} /></i></a>
                    <a href=""><i><FontAwesomeIcon icon={faLinkedin} /></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="member" data-aos="zoom-in" data-aos-delay="300">
                <img src={chefs3} className="img-fluid" alt="" />
                <div className="member-info">
                  <div className="member-info-content">
                    <h4>William Anderson</h4>
                    <span>Cook</span>
                  </div>
                  <div className="social">
                    <a href=""><i><FontAwesomeIcon icon={faXTwitter} /></i></a>
                    <a href=""><i><FontAwesomeIcon icon={faFacebook} /></i></a>
                    <a href=""><i><FontAwesomeIcon icon={faInstagram} /></i></a>
                    <a href=""><i><FontAwesomeIcon icon={faLinkedin} /></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Hero;
