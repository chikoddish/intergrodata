import React from 'react'

import logo1 from "../../assets/images/partner/client-logo-1-alt.png"
import logo2 from "../../assets/images/partner/client-logo-2-alt.png"
import logo3 from "../../assets/images/partner/client-logo-3-alt.png"
import logo4 from "../../assets/images/partner/client-logo-4-alt.png"
import logo5 from "../../assets/images/partner/client-logo-5-alt.png"

const Download = () => {
  return (
    <section className="section bg-gradient-purple bg-triangles position-relative">
  <div className="container">
    <div className="row">
      <div className="col-lg-9 mx-auto text-center">
        <h2 className="section-title text-white">Download Integrodata Now</h2>
        <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ut enim ad minim veniam quis nostrud exercitation ullamco laboris aliquip commodo consequat</p>
      </div>
      <div className="col-12 section border-bottom border-gray mb-80">
        <div className="pulse-container">
          <div className="pulse-box">
            <a className="venobox play-icon icon-center" data-autoplay="true" data-vbtype="video" href="https://www.youtube.com/watch?v=jrkvirglgaQ"><i className="fa fa-play text-secondary" /></a>
            <svg className="pulse-svg" width="90px" height="90px" viewBox="0 0 50 50" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <circle className="circle first-circle" fill="#fff" cx={25} cy={25} r={25} />
              <circle className="circle second-circle" fill="#fff" cx={25} cy={25} r={25} />
              <circle className="circle third-circle" fill="#fff" cx={25} cy={25} r={25} />
              <circle className="circle" fill="#fff" cx={25} cy={25} r={25}> </circle>
            </svg>
          </div>
        </div>
      </div>
      {/* parthner */}
      <div className="col-12">
        <ul className="list-inline d-flex justify-content-between align-items-center position-relative zindex-1">
          <li className="list-inline-item"><img className="img-fluid p-2" src={logo1} alt="partner-1" /></li>
          <li className="list-inline-item"><img className="img-fluid p-2" src={logo2} alt="partner-2" /></li>
          <li className="list-inline-item"><img className="img-fluid p-2" src={logo3} alt="partner-3" /></li>
          <li className="list-inline-item"><img className="img-fluid p-2" src={logo4} alt="partner-4" /></li>
          <li className="list-inline-item"><img className="img-fluid p-2" src={logo5} alt="partner-5" /></li>
        </ul>
      </div>
      {/* parthner */}
    </div>
  </div>
</section>

  )
}

export default Download