import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFontAwesome, faFacebook, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  
  return (
    <>
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="footer-info">
                  <h3>BeanBliss</h3>
                  <p>
                    A108 Adam Street <br />
                    NY 535022, USA<br /><br />
                    <strong>Phone:</strong> +1 5589 55488 55<br />
                    <strong>Email:</strong> info@example.com<br />
                  </p>
                  <div className="social-links mt-3">
                    <a href="#" className="twitter"><FontAwesomeIcon icon={faTwitter} /></a>
                    <a href="#" className="facebook"><FontAwesomeIcon icon={faFacebook} /></a>
                    <a href="#" className="instagram"><FontAwesomeIcon icon={faInstagram} /></a>
                    <a href="#" className="google-plus"><FontAwesomeIcon icon={faFontAwesome} /></a>
                    <a href="#" className="linkedin"><FontAwesomeIcon icon={faLinkedin} /></a>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li><i className="bx bx-chevron-right"></i> <NavLink to="/">Home</NavLink></li>
                  <li><i className="bx bx-chevron-right"></i> <NavLink to="/about">About</NavLink></li>
                  <li><i className="bx bx-chevron-right"></i> <NavLink to="/gallery">Gallery</NavLink></li>
                  <li><i className="bx bx-chevron-right"></i> <NavLink to="/contact">Contact</NavLink></li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li><i className="bx bx-chevron-right"></i> <NavLink to="/booking">Book Table</NavLink></li>
                  <li><i className="bx bx-chevron-right"></i> <NavLink to="/menu">Menu</NavLink></li>
                  <li><i className="bx bx-chevron-right"></i> <NavLink to="/events">Events</NavLink></li>
                </ul>
              </div>

              <div className="col-lg-4 col-md-6 footer-newsletter">
                <h4>Our Newsletter</h4>
                <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                <form action="" method="post">
                  <input type="email" name="email" />
                  <input type="submit" value="Subscribe" />
                </form>
              </div>

            </div>
          </div>
        </div>

        <div className="container">
          <div className="copyright">
            © Copyright <strong><span>BeanBliss</span></strong>. All Rights Reserved
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
