import React from 'react'
import { useLocation } from 'react-router-dom';

import data from '../../services';
import Header from '../Header';
import Apporach from './Apporach';
import Subscription from '../Home/Subscription';
const Service = () => {
  const location = useLocation();
  let { key } = location.state;
  // if(key == undefined || key == null ) key = 'DataEngineering'
  // console.log(data[key], key, "key")
  return (
    <>
    <Header />
      <section className="page-title page-title-overlay bg-cover overflow-hidden" data-background="images/background/about.jpg">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <h1 className="text-white position-relative">{data[key].Title}<span className="watermark-sm">{data[key].Title}</span></h1>
              <p className="text-white pt-4 pb-4">{data[key].Description}</p>
            </div>
            <div className="col-lg-3 ml-auto align-self-end">
              <nav className="position-relative zindex-1" aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-lg-end bg-transparent mb-4 px-0">
                  {/* <li className="breadcrumb-item"><a href="index.html" className="text-white">Home</a></li> */}
                  {/* <li className="breadcrumb-item text-white fw-bold" aria-current="page">Our Team</li> */}
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <Apporach data={data[key]}/>
      <Subscription />
    </>
  )
}

export default Service