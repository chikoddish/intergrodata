import React, { useEffect } from 'react'
import FindJob from './FindJob'
import BestJobs from './BestJobs'
import Subscription from '../Home/Subscription'
import Aos from 'aos'

const Career = () => {
  useEffect(() => {
    Aos.init({
      
    });
  }, []);
  return (
    <>
      <section className="page-title page-title-overlay bg-cover overflow-hidden" data-background="images/background/about.jpg">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <h1 className="text-white position-relative">Career<span className="watermark-sm">Career</span></h1>
              <p className="text-white pt-4 pb-4">Cupidatat non proident sunt culpa qui officia deserunt mollit <br /> anim idest laborum sed ut perspiciatis.</p>
            </div>
            <div className="col-lg-3 ml-auto align-self-end">
              <nav className="position-relative zindex-1" aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-lg-end bg-transparent mb-4 px-0">
                  <li className="breadcrumb-item"><a href="index.html" className="text-white">Home</a></li>
                  <li className="breadcrumb-item text-white fw-bold" aria-current="page">Career</li>
              </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <FindJob />
      <BestJobs />
      <Subscription />
    </>
  )
}

export default Career