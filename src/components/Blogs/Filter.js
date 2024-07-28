import React from 'react'

import blogImg from "../../assets/images/men/sm-img-1.jpg"
import blogImg2 from "../../assets/images/men/sm-img-2.jpg"
import blogImg3 from "../../assets/images/men/sm-img-3.jpg"

const Filter = () => {
  return (
    <>
      <div className="col-lg-4">
        <div className="rounded-sm shadow bg-white pb-4">
          <div className="widget">
            <h4>Search</h4>
            <form action="#">
              <div className="position-relative">
                <input type="text" placeholder="Search here" className="border-bottom form-control rounded-0 px-0" />
                <button className="search-btn" type="submit"><i className="fa fa-search" /></button>
              </div>
            </form>
          </div>
          <div className="widget">
            <h4>Category</h4>
            <ul className="list-styled list-bordered">
              <li><a className="text-color d-block py-3" href="blog-details.html">Investment Planning</a></li>
              <li><a className="text-color d-block py-3" href="blog-details.html">Valuable Idea</a></li>
              <li><a className="text-color d-block py-3" href="blog-details.html">Market Strategy</a></li>
              <li><a className="text-color d-block py-3" href="blog-details.html">development Maping</a></li>
              <li><a className="text-color d-block py-3" href="blog-details.html">Afiliated Marketing</a></li>
              <li><a className="text-color d-block py-3" href="blog-details.html">Targated Marketing</a></li>
            </ul>
          </div>
          <div className="widget">
            <h4>Latest Article</h4>
            <ul className="list-unstyled list-bordered">
              <li className="media border-bottom py-3">
                <img src={blogImg} className="rounded-sm mr-3" alt="post-thumb" />
                <div className="media-body">
                  <h6 className="mt-0"><a href="blog-details.html" className="text-dark">Aiusmod tempor did labore dolory</a></h6>
                  <p className="mb-0 text-color">Aug 02, 2018</p>
                </div>
              </li>
              <li className="media border-bottom py-3">
                <img src={blogImg2} className="rounded-sm mr-3" alt="post-thumb" />
                <div className="media-body">
                  <h6 className="mt-0"><a href="blog-details.html" className="text-dark">Aiusmod tempor did labore dolory</a></h6>
                  <p className="mb-0 text-color">Aug 02, 2018</p>
                </div>
              </li>
              <li className="media border-bottom py-3">
                <img src={blogImg3} className="rounded-sm mr-3" alt="post-thumb" />
                <div className="media-body">
                  <h6 className="mt-0"><a href="blog-details.html" className="text-dark">Aiusmod tempor did labore dolory</a></h6>
                  <p className="mb-0 text-color">Aug 02, 2018</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="widget">
            <h4>Tags</h4>
            <ul className="list-inline tag-list mt-4">
              <li className="list-inline-item mb-3"><a href="blog-details.html" className="text-color shadow">Business</a></li>
              <li className="list-inline-item mb-3"><a href="blog-details.html" className="text-color shadow">Market Analysis</a></li>
              <li className="list-inline-item mb-3"><a href="blog-details.html" className="text-color shadow">Consultancy</a></li>
              <li className="list-inline-item mb-3"><a href="blog-details.html" className="text-color shadow">Marketing</a></li>
              <li className="list-inline-item mb-3"><a href="blog-details.html" className="text-color shadow">Finance</a></li>
            </ul>
          </div>
        </div>
      </div>

    </>
  )
}

export default Filter