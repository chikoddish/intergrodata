import React from 'react'
import parse from 'html-react-parser';

const BlogDetailBody = (prop) => {
  const parse = require('html-react-parser').default;
  return (
    <>
      <section className="section section-lg-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 rounded-sm pr-5">
              <img src={prop.blog?.bannerImage} className="rounded-sm img-fluid w-100 mb-5" alt="post-thumb" />
              <p className="text-color card-date position-relative d-inline-block">BY <span className="text-dark font-weight-bold">{prop.blog?.createdBy.name}</span> / ON <span className="text-dark font-weight-bold">{prop.blog?.createdAt}</span></p>
              <h3 className="mb-3 text-dark">{prop.blog?.title}</h3>
              {parse(prop.blog?.description ? prop.blog?.description : "")}
              {/* <div className="my-5">
                <h5 className="d-inline-block mr-3">Share:</h5>
                <ul className="list-inline d-inline-block">
                  <li className="list-inline-item"><a href="#" className="text-color"><i className="fa fa-facebook" /></a>
                  </li>
                  <li className="list-inline-item"><a href="#" className="text-color"><i className="fa fa-twitter" /></a>
                  </li>
                  <li className="list-inline-item"><a href="#" className="text-color"><i className="fa fa-linkedin" /></a>
                  </li>
                  <li className="list-inline-item"><a href="#" className="text-color"><i className="fa fa-google-plus" /></a>
                  </li>
                </ul>
              </div>
              <h5 className="text-dark">Comments 03</h5>
              <div className="media border-bottom py-4">
                <img src="images/men/sm-img-4.jpg" className="img-fluid align-self-start rounded-circle mr-3" alt />
                <div className="media-body">
                  <h5 className="mt-0">Carole Marvin.</h5>
                  <p>15 january 2015 At 10:30 pm</p>
                  <p>Ne erat velit invidunt his. Eum in dicta veniam interesset, harum fuisset te nam ea cu lupta definitionem.
                  </p>
                  <a href="#" className="btn btn-light btn-sm">Reply</a>
                  <div className="media my-5">
                    <img src="images/men/sm-img-5.jpg" className="img-fluid align-self-start rounded-circle mr-3" alt />
                    <div className="media-body">
                      <h5 className="mt-0">Jaquan Rolfson.</h5>
                      <p>15 january 2015 At 10:30 pm</p>
                      <p>Ne erat velit invidunt his. Eum in dicta veniam interesset, harum fuisset te nam ea cu lupta definitionem.
                      </p>
                      <a href="#" className="btn btn-light btn-sm">Reply</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="media py-4 mb-70">
                <img src="images/men/sm-img-6.jpg" className="img-fluid align-self-start rounded-circle mr-3" alt />
                <div className="media-body">
                  <h5 className="mt-0">Bruce Bernier.</h5>
                  <p>15 january 2015 At 10:30 pm</p>
                  <p>Ne erat velit invidunt his. Eum in dicta veniam interesset, harum fuisset te nam ea cu lupta definitionem.
                  </p>
                  <a href="#" className="btn btn-light btn-sm">Reply</a>
                </div>
              </div>
              <h5 className="mb-4">Leave a Comment</h5>
              <form action="#" className="row">
                <div className="col-lg-6 mb-4">
                  <input type="text" className="form-control font-italic shadow-sm rounded" placeholder="Name *" name="name" id="name" />
                </div>
                <div className="col-lg-6 mb-4">
                  <input type="text" className="form-control font-italic shadow-sm rounded" placeholder="Email *" name="mail" id="mail" />
                </div>
                <div className="col-12 mb-4">
                  <textarea name="comment" id="comment" placeholder="Message" className="font-italic shadow-sm form-control rounded" defaultValue={""} />
                </div>
                <div className="col-12 mb-4">
                  <button type="submit" className="btn btn-primary">Send Message</button>
                </div>
              </form> */}
            </div>
            {/* <div className="col-lg-4">
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
                      <img src="images/men/sm-img-1.jpg" className="rounded-sm mr-3" alt="post-thumb" />
                      <div className="media-body">
                        <h6 className="mt-0"><a href="blog-details.html" className="text-dark">Aiusmod tempor did labore dolory</a></h6>
                        <p className="mb-0 text-color">Aug 02, 2018</p>
                      </div>
                    </li>
                    <li className="media border-bottom py-3">
                      <img src="images/men/sm-img-2.jpg" className="rounded-sm mr-3" alt="post-thumb" />
                      <div className="media-body">
                        <h6 className="mt-0"><a href="blog-details.html" className="text-dark">Aiusmod tempor did labore dolory</a></h6>
                        <p className="mb-0 text-color">Aug 02, 2018</p>
                      </div>
                    </li>
                    <li className="media border-bottom py-3">
                      <img src="images/men/sm-img-3.jpg" className="rounded-sm mr-3" alt="post-thumb" />
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
            </div> */}
          </div>
        </div>
      </section>

    </>
  )
}

export default BlogDetailBody