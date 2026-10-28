'use client';

import Slider from 'react-slick';
import { blogPosts } from '@/data/landingData';

export function BlogSection() {
  const settings = {
    dots: true,
    infinite: blogPosts.length > 3,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    centerMode: false,
    variableWidth: false,
    adaptiveHeight: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1, infinite: blogPosts.length > 3 } },
      { breakpoint: 821, settings: { slidesToShow: 2, slidesToScroll: 1, infinite: blogPosts.length > 2 } },
      { breakpoint: 639, settings: { slidesToShow: 1, slidesToScroll: 1, infinite: true } },
    ],
  };

  return (
    <section className="lastes-blogs py-8 lg:py-20" id="blog">
      <div className="container m-auto">
        <div className="fig-tip-title text-center">
          <h2 className="heading-center-bottom-border">
            Our <span>Blog</span>
          </h2>
        </div>
        <Slider {...settings} className="blog-slider-sec">
          {blogPosts.map((post) => (
            <div key={post.href}>
              <div className="lastes-blogs-main">
                <div className="lastes-blogs-desc">
                  <div className="lastes-blogs-content">
                    <span>{post.num}</span>
                    <p>
                      <a className="lastes-blogs-readmore" href={post.href}>
                        {post.title}
                      </a>
                    </p>
                    <ul className="lastes-blogs-cate-date">
                      <li>{post.date}</li>
                    </ul>
                  </div>
                </div>
                <div className="lastes-blogs-img">
                  <img src={post.image} alt="" />
                  <a className="view-blog-sec" href={post.href}>
                    <span>{post.cta}</span>
                    {' ->'}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
