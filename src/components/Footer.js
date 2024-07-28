import React from 'react'

import Logo from "../assets/images/logo/logo.png"

const Footer = () => {
  return (
    <footer className="bg-secondary pt-lg-5">
  <section className="section border-bottom border-color">
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-md-5 mb-4 mb-md-0">
          {/* <img src={Logo} className="mb-4" alt="Integrodata" /> */}
          <h3 style={{color: '#007bff'}}>Integrodata</h3>
          <p className="text-light mb-4">Lorem ipsum dolor amet consectetur adipisicing elit sed eiusm tempor incididunt ut labore dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamaboris nisi ut aliquip.exea commodo consequat. Duis aute irure dolor
            in reprehenderit.</p>
          {/* <ul className="list-inline social-icons">
            <li className="list-inline-item"><a target="_blank"><i className="fa fa-facebook" /></a></li>
            <li className="list-inline-item"><a target="_blank"><i className="fa fa-twitter" /></a></li>
            <li className="list-inline-item"><a target="_blank"><i className="fa fa-youtube" /></a></li>
            <li className="list-inline-item"><a target="_blank"><i className="fa fa-github" /></a></li>
          </ul> */}
        </div>
        <div className="col-md-3 col-sm-6">
          {/* <h4 className="text-white mb-4">Services</h4> */}
          <ul className="list-styled list-hover-underline">
            {/* <li className="mb-3 text-light"><a href="about.html" className="text-light">Company History</a></li>
            <li className="mb-3 text-light"><a href="about.html" className="text-light">About us</a></li>
            <li className="mb-3 text-light"><a href="contact.html" className="text-light">Contact us</a></li> */}
            {/* <li className="mb-3 text-light"><a href="services.html" className="text-light">Services</a></li>
            <li className="mb-3 text-light"><a className="text-light">Privacy Policy</a></li> */}
          </ul>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <h4 className="text-white mb-4">Contact Info</h4>
          <p className="text-light">1947, Sector-2, Faridabad,Haryana-121004 </p>

          <p>203,Mahaveer Ranches, Hosa Road, Electronic City, Bengaluru, Karnataka- 560100</p>
          <ul className="list-unstyled">
            <li className="mb-3"><a className="text-light" href="tel:+211234565523">+91 9650655119</a></li>
            <li className="mb-3"><a className="text-light" href="mailto:info@Integrodata.com">reach@integrodatatech.com</a></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  {/* footer part end */}
  {/* copyright part start */}
  <section className="py-4">
    <div className="container">
      <div className="row">
        <div className="col-md-6 text-center text-md-left mb-3 mb-md-0">
          {/* <p className="mb-0 text-light">Copyright ©
            a theme by <a href="https://themefisher.com">themefisher.com</a></p> */}
        </div>
        <div className="col-md-6 text-md-right text-center">
          <ul className="list-inline">
            {/* <li className="list-inline-item"><a href="#" className="text-light">Terms of Service</a></li>
            <li className="list-inline-item">| &nbsp;<a href="#" className="text-light">Privacy Policy</a></li> */}
          </ul>
        </div>
      </div>
    </div>
  </section>
  {/* copyright part end */}
</footer>

  )
}

export default Footer