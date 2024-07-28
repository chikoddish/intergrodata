import React from 'react'
import { Link } from 'react-router-dom'

const Service = (props) => {
  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <p className="subtitle" data-aos="fade-up">Services</p>
            <h2 className="section-title" data-aos="fade-up" data-aos-delay={200}>Our Expertise</h2>
          </div>
          <div className="col-lg-3 col-sm-6 mb-4" data-aos="fade-up" data-aos-delay={0}>
            <Link style={{textDecoration: "none"}} to="/services" state={{ key: "DataEngineering" }} className="card border-0 shadow rounded-xs pt-5">
              <div className="card-body">
                <i className="fa fa-object-ungroup icon-lg icon-primary icon-bg-primary icon-bg-circle mb-3" />
                <h4 className="mt-4 mb-3">Data Engineering</h4><br />
                <p>Ensure data is effectively collected, processed, and utilized to scale business, enhance user experience, and support strategic decisions.</p>
              </div>
            </Link>
          </div>
          <div className="col-lg-3 col-sm-6 mb-4" data-aos="fade-up" data-aos-delay={200}>
            <Link style={{textDecoration: "none"}} to="/services" state={{ key: "CloudSolutions" }} className="card border-0 shadow rounded-xs pt-5">
              <div className="card-body">
                <i className="fa fa-users icon-lg icon-yellow icon-bg-yellow icon-bg-circle mb-3" />
                <h4 className="mt-4 mb-3">Cloud Offering</h4><br />
                <p>Helping organizations reduce costs by eliminating the need for physical infrastructure, improve scalability, and increase operational efficiency</p>
              </div>
            </Link>
          </div>
          <div className="col-lg-3 col-sm-6 mb-4" data-aos="fade-up" data-aos-delay={400}>
            <Link style={{textDecoration: "none"}} to="/services" state={{ key: "WebsiteAndAppDevelopment" }} className="card border-0 shadow rounded-xs pt-5">
              <div className="card-body">
                <i className="fa fa-desktop icon-lg icon-purple icon-bg-purple icon-bg-circle mb-3" />
                <h4 className="mt-4 mb-3">Website & App Development</h4>
                <p>Focuses on designing and building responsive, user-friendly websites that effectively represent a business or service online.</p>
              </div>
            </Link>
          </div>
          <div className="col-lg-3 col-sm-6 mb-4" data-aos="fade-up" data-aos-delay={600}>
            <Link style={{textDecoration: "none"}} to="/services" state={{ key: "DigitalAnalyticsAndCustomerExperience" }} className="card border-0 shadow rounded-xs pt-5">
              <div className="card-body">
                <i className="fa fa-cloud icon-lg icon-cyan icon-bg-cyan icon-bg-circle mb-3" />
                <h4 className="mt-4 mb-3">Digital Analytics & Customer Experience</h4>
                <p>Creating and maintaining digital platforms to enhance user engagement and business functionality.</p>
              </div>
            </Link>
          </div>
          {/* <div className="col-lg-3 col-sm-6 mb-4" data-aos="fade-up" data-aos-delay={0}>
            <div className="card border-0 shadow rounded-xs pt-5">
              <div className="card-body">
                <i className="fa fa-comments icon-lg icon-red icon-bg-red icon-bg-circle mb-3" />
                <h4 className="mt-4 mb-3">Consulting</h4>
                <p>Lorem ipsum dolor sit amet consectetur elit sed do</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 mb-4" data-aos="fade-up" data-aos-delay={200}>
            <div className="card border-0 shadow rounded-xs pt-5">
              <div className="card-body">
                <i className="fa fa-search-plus icon-lg icon-green icon-bg-green icon-bg-circle mb-3" />
                <h4 className="mt-4 mb-3">SEO Optimization</h4>
                <p>Lorem ipsum dolor sit amet consectetur elit sed do</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 mb-4" data-aos="fade-up" data-aos-delay={400}>
            <div className="card border-0 shadow rounded-xs pt-5">
              <div className="card-body">
                <i className="fa fa-line-chart icon-lg icon-orange icon-bg-orange icon-bg-circle mb-3" />
                <h4 className="mt-4 mb-3">Usability Testing</h4>
                <p>Lorem ipsum dolor sit amet consectetur elit sed do</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 mb-4" data-aos="fade-up" data-aos-delay={600}>
            <div className="card border-0 shadow rounded-xs pt-5">
              <div className="card-body">
                <i className="fa fa-wpexplorer icon-lg icon-blue icon-bg-blue icon-bg-circle mb-3" />
                <h4 className="mt-4 mb-3">UX Prototyping</h4>
                <p>Lorem ipsum dolor sit amet consectetur elit sed do</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>

  )
}

export default Service