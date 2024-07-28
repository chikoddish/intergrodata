import React from 'react'
import gplayWhite from '../../assets/images/icon/google-play-white.png'
import banner from '../../assets/images/banner/banner-5.avif'
// import banner from '../../assets/images/banner/new-banner.jpg'
import bannerShaper from '../../assets/images/homepage-3/banner-shape.png'

const Banner = () => {
  return (
    <section className="hero-area hero-area-lg position-relative">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 text-center text-lg-left mb-4 mb-lg-0">
          <h1 className="text-dark position-relative">Crafting  <br></br><br></br><br></br>solutions for <br></br>Tomorrow<span className="watermark">Digital</span></h1>
          <p className="text-dark mb-4">Commitment to designing and implementing data solutions that not only<br /> address current needs but also anticipate future challenges and opportunities </p>
          <ul className="list-inline">
            <li className="list-inline-item mx-1 my-2">
              {/* <a href="#" className="btn btn-primary">
                <img src={gplayWhite} className="img-fluid mr-2 rounded" alt="play-store" /> Google Play</a> */}
            </li>
            <li className="list-inline-item mx-1 my-2">
              {/* <a href="#" className="btn btn-outline-primary"><i className="fa fa-apple text-secondary mr-3 transition" />App
                Store</a> */}
            </li>
          </ul>
        </div>
        <div className="col-lg-6">
          <img src={banner} className="img-fluid w-100 shadow rounded-lg" alt="app-interface" data-aos="fade-left" data-aos-delay={1000} />
        </div>
      </div>
    </div>
    <img src={bannerShaper} className="img-fluid bg-shape-4" alt="shape" />
  </section>
  )
}

export default Banner