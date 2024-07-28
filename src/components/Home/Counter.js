import React from 'react'

const Counter = () => {
  return (
    <section className="bg-light py-5">
  <div className="container">
    <div className="row">
      <div className="col-md-3 col-sm-6 mb-4 mb-md-0 text-center">
        <p className="h2 text-dark"><span className="counter" data-count={8}>0</span>K+</p>
        <h6 className="text-dark font-weight-normal">Downloads per day</h6>
      </div>
      <div className="col-md-3 col-sm-6 mb-4 mb-md-0 text-center">
        <p className="h2 text-dark"><span className="counter" data-count={20}>0</span>+</p>
        <h6 className="text-dark font-weight-normal">Design awards</h6>
      </div>
      <div className="col-md-3 col-sm-6 mb-4 mb-md-0 text-center">
        <p className="h2 text-dark"><span className="counter" data-count={25}>0</span>K+</p>
        <h6 className="text-dark font-weight-normal">Totally satisfied users</h6>
      </div>
      <div className="col-md-3 col-sm-6 mb-4 mb-md-0 text-center">
        <p className="h2 text-dark"><span className="counter" data-count={30}>0</span>+</p>
        <h6 className="text-dark font-weight-normal">People behind this app</h6>
      </div>
    </div>
  </div>
</section>

  )
}

export default Counter