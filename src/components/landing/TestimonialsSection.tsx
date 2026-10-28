'use client';

import { useState } from 'react';
import { testimonials } from '@/data/landingData';

export function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  return (
    <section className="leading-businesses-sec py-8 lg:py-20" id="leading-businesses-sec">
      <div className="container m-auto">
        <div className="grid grid-cols-1 items-center gap-5 md:grid-cols-2 xl:items-end">
          <div className="leading-businesses-left">
            <h2 className="heading-left-bottom-border">Trusted By Thousands Of Leading Businesses</h2>
            <ul className="tabs-nav pt-6 xl:pt-12" id="tabs-nav-businesses" role="tablist">
              {testimonials.map((item, i) => (
                <li key={item.id} className={i === active ? 'active' : ''} role="presentation">
                  <button
                    type="button"
                    role="tab"
                    className="w-full border-0 bg-transparent p-0 text-left text-inherit"
                    onClick={() => setActive(i)}
                  >
                    <div className="tabs-nav-main">
                      <div className="tabs-nav-image">
                        <img src={item.navImg} alt={item.navTitle} />
                      </div>
                      <div className="tabs-nav-desc">
                        <h4>{item.navTitle}</h4>
                        <p>{item.navSub}</p>
                      </div>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="leading-businesses-right">
            <div id="tabs-content-businesses">
              <div className="tab-content block">
                <div className="tab-content-inner">
                  <div className="tab-content-inner-image">
                    <img src={t.navImg} alt={t.title} />
                  </div>
                  <h4>{t.title}</h4>
                  <p>{t.subtitle}</p>
                </div>
                <div className="tab-content-inner-image-quote">
                  <img src={t.quoteImg} alt="" />
                </div>
                <div className="tab-content-subinner">
                  <p>{t.quote}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
