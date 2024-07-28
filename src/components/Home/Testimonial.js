import React from 'react'

import ClientsImg from '../../assets/images/homepage-3/testimonial-img.png'
import quoteImg from '../../assets/images/quotation/quotation.png'

const Testimonial = () => {
  return (
    <section className="section bg-light bg-map">
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <img className="img-fluid" src={ClientsImg} alt="clients" />
      </div>
      <div className="col-md-6">
        <p className="subtitle">testimonials</p>
        <h2 className="section-title mb-5">What Our Clients Says?</h2>
        <div className="testimonial-slider-single">
          <div className="slider-item">
            <img className="mb-5" src={quoteImg} alt="quote-icon" />
            <p className="font-italic mb-4">Lorem ipsum dolor sit amet consectetur adipicing elit sed do usmod tempor incididunt.enim ad minim veniam, quis nostrud exer citation ullamco laboris nisi ut aliquip commodo.
            </p>
            <h5 className="text-dark">Liam Hughes</h5>
            <h6 className="text-color">Happy client</h6>
          </div>
          <div className="slider-item">
            <img className="mb-5" src={quoteImg} alt="quote-icon" />
            <p className="font-italic mb-4">Lorem ipsum dolor sit amet consectetur adipicing elit sed do usmod tempor incididunt.enim ad minim veniam, quis nostrud exer citation ullamco laboris nisi ut aliquip commodo.
            </p>
            <h5 className="text-dark">Liam Hughes</h5>
            <h6 className="text-color">Happy client</h6>
          </div>
          <div className="slider-item">
            <img className="mb-5" src={quoteImg} alt="quote-icon" />
            <p className="font-italic mb-4">Lorem ipsum dolor sit amet consectetur adipicing elit sed do usmod tempor incididunt.enim ad minim veniam, quis nostrud exer citation ullamco laboris nisi ut aliquip commodo.
            </p>
            <h5 className="text-dark">Liam Hughes</h5>
            <h6 className="text-color">Happy client</h6>
          </div>
          <div className="slider-item">
            <img className="mb-5" src={quoteImg} alt="quote-icon" />
            <p className="font-italic mb-4">Lorem ipsum dolor sit amet consectetur adipicing elit sed do usmod tempor incididunt.enim ad minim veniam, quis nostrud exer citation ullamco laboris nisi ut aliquip commodo.
            </p>
            <h5 className="text-dark">Liam Hughes</h5>
            <h6 className="text-color">Happy client</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Testimonial