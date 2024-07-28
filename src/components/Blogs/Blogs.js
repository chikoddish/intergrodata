import React, { useEffect, useState } from 'react'
import Blog from './Blog'
import Filter from './Filter'
import Subscription from '../Home/Subscription'
import Loading from '../Loading'
import axios from 'axios'

const Blogs = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [blogs, setBlogs] = useState(null)

  // const token = JSON.parse(localStorage.user).tokens.access.token;
  
  useEffect(() => {
    async function getRes(){
      try {
        const res = await axios({
          method: "GET",
          withCredentials: false,
          url: `${process.env.REACT_APP_BASE_URL}/blogs/getBlogs`,
        })
        setBlogs(res.data)
        console.log(blogs, "-")
        setIsLoading(false)
      } catch (error) {
       console.log(error) 
      }
    } 
    getRes()
  }, []);
  
  return (
    <> {
      isLoading ? <Loading /> : 
      <> 
        <section className="page-title page-title-overlay bg-cover overflow-hidden" data-background="images/background/about.jpg">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <h1 className="text-white position-relative">Blog<span className="watermark-sm">Blog</span></h1>
                <p className="text-white pt-4 pb-4">Cupidatat non proident sunt culpa qui officia deserunt mollit <br /> anim idest laborum sed ut perspiciatis.</p>
              </div>
              <div className="col-lg-3 ml-auto align-self-end">
                <nav className="position-relative zindex-1" aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-lg-end bg-transparent mb-4 px-0">
                    <li className="breadcrumb-item"><a href="index.html" className="text-white">Home</a></li>
                    <li className="breadcrumb-item text-white fw-bold" aria-current="page">Blog</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </section>

        <section class="section section-lg-bottom">
          <div class="container">
              <div class="row">
                <Blog data={blogs}/>
                <Filter />
              </div>
          </div>
        </section>
        <Subscription />
      </>}
    </>
  )
}

export default Blogs