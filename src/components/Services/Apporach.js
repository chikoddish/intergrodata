import React from 'react'

const Apporach = (props) => {
  const classes = ["icon-red icon-bg-red", "icon-green icon-bg-green", "icon-orange icon-bg-orange", "icon-primary icon-bg-primary"];
  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            {/* <p className="subtitle" data-aos="fade-up">Services</p> */}
            <h2 className="section-title" data-aos="fade-up" data-aos-delay={200}>Our Approach</h2>
          </div>
          {Object.keys(props.data.Approach).map((keyName, i) => {
            let random = Math.floor(Math.random() * classes.length)
            return <div className="col-lg-3 col-sm-6 mb-4" data-aos="fade-up" data-aos-delay={0}>
              <div className="card border-0 shadow rounded-xs pt-5">
                <div className="card-body">
                  <i className={`fa fa-object-ungroup icon-lg icon-bg-circle mb-3 ${classes[random]} `} />
                  <h4 className="mt-4 mb-3">{keyName}</h4>
                  <p>{props.data.Approach[keyName]}</p>
                </div>
              </div>
            </div>
          })}
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

export default Apporach