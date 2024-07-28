import React, { useEffect } from 'react'

import videoBg from '../../assets/images/about/about-3.jpg'
import aboutImg4 from '../../assets/images/about/about-4.jpg'
import Aos from 'aos';
import Testimonial from '../Home/Testimonial';
import Counter from '../Home/Counter';
import Service from './Service';
import Team from './Team';
import Subscription from '../Home/Subscription';

const About = () => {
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
            <h1 className="text-white position-relative">About Us<span className="watermark-sm">About Us</span></h1>
            <p className="text-white pt-4 pb-4">Cupidatat non proident sunt culpa qui officia deserunt mollit <br /> anim idest laborum sed ut perspiciatis.</p>
          </div>
          <div className="col-lg-3 ml-auto align-self-end">
            <nav className="position-relative zindex-1" aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-lg-end bg-transparent mb-4 px-0">
                <li className="breadcrumb-item"><a href="index.html" className="text-white">Home</a></li>
                <li className="breadcrumb-item text-white fw-bold" aria-current="page">About Us</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="col-md-6 pr-lg-4 mb-4 mb-md-0">
            <div className="position-relative" data-aos="fade-right">
              <img src={videoBg} className="img-fluid rounded-sm" alt="video-bg" />
              <div className="floating-video overlay rounded-sm">
                <img src={aboutImg4} className="img-fluid rounded-sm" alt="video-thumb" />
                <a className="venobox play-icon icon-center" data-autoplay="true" data-vbtype="video" href="https://www.youtube.com/watch?v=jrkvirglgaQ">
                  <i className="fa fa-play text-secondary bg-white rounded-circle" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 align-self-center pl-lg-4">
            <p className="subtitle" data-aos="fade-up">About Integrodata</p>
            <h2 className="section-title" data-aos="fade-up" data-aos-delay={200}>Eausmod tempor magna nostrud exercitation</h2>
            <p data-aos="fade-up" data-aos-delay={400}>Lorem ipsum dolor sit amet consectetur adipicing elit sed do usmod tempor incididunt.enim ad minim veniam, quis nostrud exer citation ulla mco laboris nisi ut aliquip commodo.</p>
            <p data-aos="fade-up" data-aos-delay={500}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accu santium doloreque laudantum.</p>
            <a className="btn btn-primary" data-aos="fade-up" data-aos-delay={600}>Contact Us</a>
          </div>
        </div>
      </div>
    </section>
    <Counter />
    <Service page="about"/>
    <Testimonial />
    <Team />
    <Subscription />
    </>

  )
}

export default About