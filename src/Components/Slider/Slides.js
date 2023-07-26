import React from 'react';
import './Slides.css';

const Slides = ({ backgroundImage }) => {
    
    const divStyle = {
        background: `url(${process.env.PUBLIC_URL}${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    };
  return (
      <section className="banner p-0" id="home">
          <div className="swiper mySwiper" >
              <div className="swiper-wrapper">
                  <div className="swiper-slide"
                      style={divStyle}>
                      <div className="slide-text text-center">
                          <div>
                              <h1>ADVENTURE AWAITS</h1>
                              <p>On this vacation, fly with us to your favorite destination</p>
                          </div>

                      </div>
                  </div>

              </div>
              
          </div>
      </section>
  )
}

export default Slides;
