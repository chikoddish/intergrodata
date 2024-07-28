import { Link } from "react-router-dom"

const Blog = (prop) => {

  return (
    <>
      <div className="col-lg-8">
        <div className="row">
          {prop.data.results.map(val =>{ 
            return <div className="col-sm-6 mb-4">
                <div className="card border-0 shadow rounded-lg">
                  <img src={val.bannerImage} className="img-fluid card-img-top rounded-top-lg" alt="post-thumb" />
                  <div className="card-body">
                    <p className="card-date">Dec 30, 2018</p>
                    <h5><Link className="text-dark" to={`/blog-detail/${val.id}`}>{val.title}</Link></h5>
                  </div>
                </div>
              </div>
          })}
        </div>
      </div>

    </>
  )
}

export default Blog