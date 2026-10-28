'use client';

import Slider from 'react-slick';
import { businessLogos } from '@/data/landingData';

export function BusinessesSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, infinite: true, dots: true } },
      { breakpoint: 600, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <section className="businesses py-8 lg:py-20">
      <div className="container m-auto">
        <div className="businesses-heading text-center">
          <h2>Trusted By The Biggest Businesses.</h2>
        </div>
        <Slider {...settings} className="businesses-slider-main">
          {businessLogos.map((logo) => (
            <div key={logo.alt} className="businesses-item">
              <div className="businesses-item-img">
                <img src={logo.src} alt={logo.alt} />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
