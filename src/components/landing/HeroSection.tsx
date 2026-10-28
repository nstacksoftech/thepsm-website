'use client';

import { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import { heroSlides, LINKS } from '@/data/landingData';

export function HeroSection() {
  const [nav1, setNav1] = useState<Slider | null>(null);
  const [nav2, setNav2] = useState<Slider | null>(null);
  const s1 = useRef<Slider>(null);
  const s2 = useRef<Slider>(null);

  useEffect(() => {
    setNav1(s1.current);
    setNav2(s2.current);
  }, []);

  const textSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: nav2 || undefined,
  };

  const imageSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: nav1 || undefined,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <section className="hero-sec grey-background-sec relative py-8 lg:py-20" id="hero">
      <div className="container m-auto">
        <div className="grid grid-cols-1 items-center gap-5 md:flex xl:gap-16">
          <div className="hero-sec-left md:w-6/12 lg:w-5/12">
            <Slider ref={s1} {...textSettings} className="hero-sec-for">
              {heroSlides.map((slide) => (
                <div key={slide.title} className="hero-sec-for-items">
                  <h1>{slide.title}</h1>
                  <p>{slide.body}</p>
                  <a href={LINKS.signup} target="_blank" rel="noreferrer" className="btn-style3">
                    {slide.cta}
                  </a>
                </div>
              ))}
            </Slider>
          </div>
          <div className="hero-sec-right md:w-6/12 lg:w-7/12">
            <Slider ref={s2} {...imageSettings} className="hero-sec-nav">
              {heroSlides.map((slide) => (
                <div key={slide.image} className="hero-sec-nav-items">
                  <div className="hero-sec-nav-item-img">
                    <img src={slide.image} alt={slide.imageAlt} />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}
