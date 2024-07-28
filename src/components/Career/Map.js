import React from 'react'

const Map = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="row">
        <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3789.4317994185876!2d77.33352757222106!3d28.351531898586103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1ssector%203%20community%20center%20faridabad!5e0!3m2!1sen!2sin!4v1720231260038!5m2!1sen!2sin" className="col-lg-8 rounded-xs mobile-height mb-5 mb-lg-0" id="map_canvas" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

          {/* <div className="col-lg-8 rounded-xs mobile-height mb-5 mb-lg-0" id="map_canvas" data-latitude="51.507351" data-longitude="-0.127758" data-marker="images/marker.png" /> */}
          <div className="col-lg-4">
            <div className="p-5 rounded-xs shadow">
              <h3 className="text-dark">Keep in Touch</h3>
              <p className="border-bottom pb-4">Lorem ipsum dolor sit amet consectetur elit sed do eiusmod tempor</p>
              <ul className="list-unstyled">
                <li className="d-flex mb-4" data-aos="fade-up" data-aos-delay={100}>
                  <i className="fa fa-map-o icon-primary" />
                  <div className="pl-3">
                    <h6 className="text-dark">Address</h6>
                    <ul className="list-unstyled">
                      <li>📍 1947, Sector-2, Faridabad,Haryana-121004</li>
                      <li>📍 203, Mahaveer Ranches, Bangalore</li>
                    </ul>
                  </div>
                </li>
                <li className="d-flex mb-4" data-aos="fade-up" data-aos-delay={200}>
                  <i className="fa fa-envelope-o icon-primary" />
                  <div className="pl-3">
                    <h6 className="text-dark">Email</h6>
                    <ul className="list-unstyled">
                      {/* <li>hello@Integrodata.com</li> */}
                      <li>reach@integrodatatech.com</li>
                    </ul>
                  </div>
                </li>
                <li className="d-flex mb-4" data-aos="fade-up" data-aos-delay={300}>
                  <i className="fa fa-phone icon-primary" />
                  <div className="pl-3">
                    <h6 className="text-dark">Mobile</h6>
                    <ul className="list-unstyled">
                      <li>(+91) 9650655119</li>
                      <li>(+91) 9650655119</li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Map