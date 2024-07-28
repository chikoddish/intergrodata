import React from 'react'

import integrationImg from '../../assets/images/integration/integration-2.png'
import integrationImg3 from '../../assets/images/integration/integration-3.png'

const Integration = () => {
  return (
    <>
    <div>
      <section className="section pb-0">
        <div className="container">
          <div className="row">
            <div className="col-md-6 pr-lg-5">
              <img src={integrationImg} className="img-fluid" alt="dashboard" data-aos="fade-right" />
            </div>
            <div className="col-md-6 pl-lg-5">
              <p className="subtitle" data-aos="fade-up">01</p>
              <h2 className="section-title" data-aos="fade-up" data-aos-delay={200}>Aspernatur aut odit fugit sed quia consetur.</h2>
              <p className="mb-4" data-aos="fade-up" data-aos-delay={400}>Lorem ipsum dolor sit amet consectetur adipicing elit sed do usmod tempor incididunt.enim ad minim veniam, quis nostrud exer citation ulla mco laboris nisi ut aliquip commodo.</p>
              <ul className="list-unstyled">
                <li className="d-flex mb-4" data-aos="fade-up" data-aos-delay={500}>
                  <div className="pr-3 pr-lg-5">
                    <i className="fa fa-check text-secondary bg-white shadow icon-sm" />
                  </div>
                  <div>
                    <h5>Extreme Security</h5>
                    <p>Lorem ipsum dolor sit amet consectetur elit sed do eiusmod tempor incididunt labore dolore magna.
                    </p>
                  </div>
                </li>
                <li className="d-flex" data-aos="fade-up" data-aos-delay={550}>
                  <div className="pr-3 pr-lg-5">
                    <i className="fa fa-check text-secondary bg-white shadow icon-sm" />
                  </div>
                  <div>
                    <h5>Extreme Security</h5>
                    <p>Lorem ipsum dolor sit amet consectetur elit sed do eiusmod tempor incididunt labore dolore magna.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="section overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="col-md-6 pr-lg-5">
              <p className="subtitle" data-aos="fade-up">02</p>
              <h2 className="section-title" data-aos="fade-up" data-aos-delay={200}>Eausmod tempor magna nostrud exercitation</h2>
              <p data-aos="fade-up" data-aos-delay={300}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi aliquip commodo consequat. duis aute.</p>
              <p className="mb-4" data-aos="fade-up" data-aos-delay={400}>Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident.</p>
              <a href="#" className="mb-4 btn btn-outline-primary" data-aos="fade-up" data-aos-delay={500}>read nore</a>
            </div>
            <div className="col-md-6 pl-lg-5">
              <img src={integrationImg3} className="img-fluid" alt="dashboard" data-aos="fade-left" data-aos-delay={200} />
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}

export default Integration