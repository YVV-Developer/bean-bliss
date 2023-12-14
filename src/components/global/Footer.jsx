import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFontAwesome, faFacebook, faLinkedin, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link, NavLink } from 'react-router-dom';

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
                    <Link to="https://www.facebook.com/" className="facebook"><FontAwesomeIcon icon={faFacebook} /></Link>
                    <Link to="https://www.instagram.com/" className="instagram"><FontAwesomeIcon icon={faInstagram} /></Link>
                    <Link to="https://x.com/" className="twitter"><FontAwesomeIcon icon={faXTwitter} /></Link>
                    <Link to="https://www.linkedin.com/" className="linkedin"><FontAwesomeIcon icon={faLinkedin} /></Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li><i className="bx bx-chevron-right"></i><NavLink to="/" className="no-underline">Home</NavLink></li>
                  <li><i className="bx bx-chevron-right"></i><NavLink to="/about" className="no-underline">About</NavLink></li>
                  <li><i className="bx bx-chevron-right"></i><NavLink to="/gallery" className="no-underline">Gallery</NavLink></li>
                  <li><i className="bx bx-chevron-right"></i><NavLink to="/contact" className="no-underline">Contact</NavLink></li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li><i className="bx bx-chevron-right"></i><NavLink to="/booking" className="no-underline">Book Table</NavLink></li>
                  <li><i className="bx bx-chevron-right"></i><NavLink to="/menu" className="no-underline">Menu</NavLink></li>
                  <li><i className="bx bx-chevron-right"></i><NavLink to="/events" className="no-underline">Events</NavLink></li>
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
