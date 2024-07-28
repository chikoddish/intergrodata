import React from 'react'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import post1 from "../../assets/images/blog/blog-post-1.jpg"
import post2 from "../../assets/images/blog/blog-post-2.jpg"
import post3 from "../../assets/images/blog/blog-post-3.jpg"
import post4 from "../../assets/images/blog/blog-post-1.jpg"

const News = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <>
      <section className="section section-lg-bottom">
        {/* blog */}
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p className="subtitle">latest news</p>
              <h2 className="section-title">Learn Form Integrodata</h2>
            </div>
            <div className="col-12">
              <Slider {...settings} className="blog-slider">
                <div className="px-3 mb-5">
                  <div className="card border-0 shadow rounded-xs">
                    <img src={post1} className="img-fluid card-img-top" alt="post-thumb" />
                    <div className="card-body">
                      <p className="card-date">Dec 30, 2018</p>
                      <h5><a className="text-dark" href="blog-details.html">Cupidat non proident sunt officia deserunt mollit
                          anim.</a></h5>
                    </div>
                  </div>
                </div>
                <div className="px-3 mb-5">
                  <div className="card border-0 shadow rounded-xs">
                    <img src={post2} className="img-fluid card-img-top" alt="post-thumb" />
                    <div className="card-body">
                      <p className="card-date">Dec 30, 2018</p>
                      <h5><a className="text-dark" href="blog-details.html">Cupidat non proident sunt officia deserunt mollit
                          anim.</a></h5>
                    </div>
                  </div>
                </div>
                <div className="px-3 mb-5">
                  <div className="card border-0 shadow rounded-xs">
                    <img src={post3} className="img-fluid card-img-top" alt="post-thumb" />
                    <div className="card-body">
                      <p className="card-date">Dec 30, 2018</p>
                      <h5><a className="text-dark" href="blog-details.html">Cupidat non proident sunt officia deserunt mollit
                          anim.</a></h5>
                    </div>
                  </div>
                </div>
                <div className="px-3 mb-5">
                  <div className="card border-0 shadow rounded-xs">
                    <img src={post4} className="img-fluid card-img-top" alt="post-thumb" />
                    <div className="card-body">
                      <p className="card-date">Dec 30, 2018</p>
                      <h5><a className="text-dark" href="blog-details.html">Cupidat non proident sunt officia deserunt mollit
                          anim.</a></h5>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
        {/* blog */}
      </section>
    </>
  )
}

export default News