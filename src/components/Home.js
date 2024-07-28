import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import Banner from './Home/Banner';
import Feature from './Home/Feature';
import Integration from './Home/Integration';
import Counter from './Home/Counter';
import Download from './Home/Download';
import Testimonial from './Home/Testimonial';
import News from './Home/News';
import Subscription from './Home/Subscription';
import Service from './About/Service';

const Home = () => {
  useEffect(() => {
    AOS.init({
      
    });
  }, []);

  return (
    <>
      <Banner />
      {/* <Feature /> */}
      {/* <Integration /> */}
      <Counter />
      <Service />
      {/* <Download /> */}
      {/* <Testimonial /> */}
      {/* <News /> */}
      <Subscription />
    </>
  )
}

export default Home