import React from 'react'

const Message = () => {
  return (
    <section className="section section-lg-bottom bg-light">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <p className="subtitle">Message</p>
            <h2 className="section-title">Leave A Message</h2>
          </div>
          <div className="col-12 text-center">
            <form action="#" className="row">
              <div className="col-lg-6">
                <input type="text" className="form-control mb-4" placeholder="Your email" />
              </div>
              <div className="col-lg-6">
                <input type="text" className="form-control mb-4" placeholder="Your Name" />
              </div>
              <div className="col-12">
                <input type="text" className="form-control mb-4" placeholder="Subject" />
              </div>
              <div className="col-12">
                <textarea name="message" className="form-control mb-4" placeholder="Message" defaultValue={""} />
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-primary">Submit Now</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Message