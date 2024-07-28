import React from 'react'

const BlogDetailHeader = () => {
  return (
    <>
      <section className="page-title page-title-overlay bg-cover overflow-hidden" data-background="images/background/about.jpg">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <h1 className="text-white position-relative">Blog Details<span className="watermark-sm">Blog Details</span></h1>
              <p className="text-white pt-4 pb-4">Cupidatat non proident sunt culpa qui officia deserunt mollit <br /> anim idest laborum sed ut perspiciatis.</p>
            </div>
            <div className="col-lg-3 ml-auto align-self-end">
              <nav className="position-relative zindex-1" aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-lg-end bg-transparent mb-4 px-0">
                  <li className="breadcrumb-item"><a href="index.html" className="text-white">Home</a></li>
                  <li className="breadcrumb-item text-white fw-bold" aria-current="page">Blog Details</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BlogDetailHeader