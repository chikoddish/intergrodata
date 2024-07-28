import React from 'react'

import backDot from '../../assets/images/dot/dot-1.png'
import backShape from '../../assets/images/shape/shape-bg.png'


const Feature = () => {
  return (
  <section className="position-relative">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0" data-aos="fade-right" data-aos-duration={1000} data-aos-delay={0}>
          <div className="card border-0 shadow rounded-xs pt-5">
            <div className="card-body">
              <i className="fa fa-desktop icon-lg icon-blue icon-bg-blue icon-bg-circle mb-3" />
              <h4 className="mt-4 mb-3">Data Engineering</h4>
              <p>Ensure data is effectively collected, processed, and utilized to scale business, enhance user experience, and support strategic decisions.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0" data-aos="fade-right" data-aos-duration={1000} data-aos-delay={100}>
          <div className="card border-0 shadow rounded-xs pt-5">
            <div className="card-body">
              <i className="fa fa-gears icon-lg icon-orange icon-bg-orange icon-bg-circle mb-3" />
              <h4 className="mt-4 mb-3">Easy Customize</h4>
              <p>Lorem ipsum dolor sit amet consectetur elit sed do</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0" data-aos="fade-right" data-aos-duration={1000} data-aos-delay={200}>
          <div className="card border-0 shadow rounded-xs pt-5">
            <div className="card-body">
              <i className="fa fa-shield icon-lg icon-purple icon-bg-purple icon-bg-circle mb-3" />
              <h4 className="mt-4 mb-3">Extreme Security</h4>
              <p>Lorem ipsum dolor sit amet consectetur elit sed do</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0" data-aos="fade-right" data-aos-duration={1000} data-aos-delay={300}>
          <div className="card border-0 shadow rounded-xs pt-5">
            <div className="card-body">
              <i className="fa fa-clock-o icon-lg icon-green icon-bg-green icon-bg-circle mb-3" />
              <h4 className="mt-4 mb-3">24 Hour Service</h4>
              <p>Lorem ipsum dolor sit amet consectetur elit sed do</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <img src={backDot} className="img-fluid feature-bg-shape-1" alt="background-dots" />
    <img src={backShape} className="img-fluid feature-bg-shape-2" alt="background-shape" />
  </section>

  )
}

export default Feature