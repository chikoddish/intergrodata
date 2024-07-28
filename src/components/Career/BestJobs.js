import React from 'react'

import jobLogo from "../../assets/images/career/logo-1.png"
import jobLogo2 from "../../assets/images/career/logo-2.png"
import jobLogo3 from "../../assets/images/career/logo-3.png"
import jobLogo4 from "../../assets/images/career/logo-4.png"
import jobLogo5 from "../../assets/images/career/logo-5.png"

const BestJobs = () => {
  return (
    <>  
      <section className="section section-lg-bottom bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <p className="subtitle" data-aos="fade-up">Best Jobs</p>
              <h2 className="section-title" data-aos="fade-up" data-aos-delay={100}>Featured Jobs</h2>
            </div>
            <div className="col-12 bg-white p-4 rounded shadow my-3" data-aos="fade-up">
              <div className="media align-items-center flex-column flex-sm-row">
                <img src={jobLogo} className="mr-sm-3 mb-4 mb-sm-0 border rounded p-2" alt="logo-1" />
                <div className="media-body text-center text-sm-left mb-4 mb-sm-0">
                  <h6 className="mt-0">Web Project Manager - Team of PHP MySQL Developers</h6>
                  <p className="mb-0 text-gray">MySQL Developer I West New York, USA I Full Time I 2 Days Ago</p>
                </div>
                <a href="career-details.html" className="btn btn-outline-primary">Apply Now</a>
              </div>
            </div>
            <div className="col-12 bg-white p-4 rounded shadow my-3" data-aos="fade-up">
              <div className="media align-items-center flex-column flex-sm-row">
                <img src={jobLogo2} className="mr-sm-3 mb-4 mb-sm-0 border rounded p-2" alt="logo-1" />
                <div className="media-body text-center text-sm-left mb-4 mb-sm-0">
                  <h6 className="mt-0">Web Project Manager - Team of PHP MySQL Developers</h6>
                  <p className="mb-0 text-gray">MySQL Developer I West New York, USA I Full Time I 2 Days Ago</p>
                </div>
                <a href="career-details.html" className="btn btn-outline-primary">Apply Now</a>
              </div>
            </div>
            <div className="col-12 bg-white p-4 rounded shadow my-3" data-aos="fade-up">
              <div className="media align-items-center flex-column flex-sm-row">
                <img src={jobLogo3} className="mr-sm-3 mb-4 mb-sm-0 border rounded p-2" alt="logo-1" />
                <div className="media-body text-center text-sm-left mb-4 mb-sm-0">
                  <h6 className="mt-0">Web Project Manager - Team of PHP MySQL Developers</h6>
                  <p className="mb-0 text-gray">MySQL Developer I West New York, USA I Full Time I 2 Days Ago</p>
                </div>
                <a href="career-details.html" className="btn btn-outline-primary">Apply Now</a>
              </div>
            </div>
            <div className="col-12 bg-white p-4 rounded shadow my-3" data-aos="fade-up">
              <div className="media align-items-center flex-column flex-sm-row">
                <img src={jobLogo4} className="mr-sm-3 mb-4 mb-sm-0 border rounded p-2" alt="logo-1" />
                <div className="media-body text-center text-sm-left mb-4 mb-sm-0">
                  <h6 className="mt-0">Web Project Manager - Team of PHP MySQL Developers</h6>
                  <p className="mb-0 text-gray">MySQL Developer I West New York, USA I Full Time I 2 Days Ago</p>
                </div>
                <a href="career-details.html" className="btn btn-outline-primary">Apply Now</a>
              </div>
            </div>
            <div className="col-12 bg-white p-4 rounded shadow my-3" data-aos="fade-up">
              <div className="media align-items-center flex-column flex-sm-row">
                <img src={jobLogo5} className="mr-sm-3 mb-4 mb-sm-0 border rounded p-2" alt="logo-1" />
                <div className="media-body text-center text-sm-left mb-4 mb-sm-0">
                  <h6 className="mt-0">Web Project Manager - Team of PHP MySQL Developers</h6>
                  <p className="mb-0 text-gray">MySQL Developer I West New York, USA I Full Time I 2 Days Ago</p>
                </div>
                <a href="career-details.html" className="btn btn-outline-primary">Apply Now</a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default BestJobs