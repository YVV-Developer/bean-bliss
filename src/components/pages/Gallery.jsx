import React from 'react';
import gallery1 from '../../assets/img/gallery/gallery-1.jpg'
import gallery2 from '../../assets/img/gallery/gallery-2.jpg'
import gallery3 from '../../assets/img/gallery/gallery-3.jpg'
import gallery4 from '../../assets/img/gallery/gallery-4.jpg'
import gallery5 from '../../assets/img/gallery/gallery-5.jpg'
import gallery6 from '../../assets/img/gallery/gallery-6.jpg'
import gallery7 from '../../assets/img/gallery/gallery-7.jpg'
import gallery8 from '../../assets/img/gallery/gallery-8.jpg'
import { Helmet } from 'react-helmet';

const Gallery = () => {
  const galleryItems = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
    gallery7,
    gallery8,
  ];

  return (
    <>
      <Helmet>
        <title>Gallery - BeanBliss</title>
      </Helmet>
      <section id="gallery" className="section-bg gallery">
        <div className="container aos-init aos-animate mt-24" data-aos="fade-up">
          <div className="section-title">
            <h2>Gallery</h2>
            <p>Photos from Our Restaurant</p>
          </div>
        </div>

        <div className="container-fluid aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
          <div className="row g-0">
            {galleryItems.map((item, index) => (
              <div key={index} className="col-lg-6 col-md-6">
                <div className="gallery-item">
                  <a href={item} className="gallery-lightbox" data-gall={`gallery-item-${index}`}>
                    <img src={item} alt={`Gallery ${index + 1}`} className="img-fluid" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Gallery;
