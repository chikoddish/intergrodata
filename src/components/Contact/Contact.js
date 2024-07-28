import React, { useEffect } from 'react'
import Map from '../Career/Map'
import Message from '../About/Message'
import Subscription from '../Home/Subscription'
import Aos from 'aos'
import { Link } from 'react-router-dom'

const Contact = () => {
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
              <h1 className="text-white position-relative">Contact<span className="watermark-sm">Contact</span></h1>
              {/* <p className="text-white pt-4 pb-4">Cupidatat non proident sunt culpa qui officia deserunt mollit <br /> anim idest laborum sed ut perspiciatis.</p> */}
            </div>
            <div className="col-lg-3 ml-auto align-self-end">
              <nav className="position-relative zindex-1" aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-lg-end bg-transparent mb-4 px-0">
                  <li className="breadcrumb-item"><Link to="/" className="text-white">Home</Link></li>
                  <li className="breadcrumb-item text-white fw-bold" aria-current="page">Contact</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <Map />
      <Message />
      <Subscription />
    </>
  )
}

export default Contact