import React, { useEffect, useState } from 'react'
import BlogDetailHeader from './BlogDetailHeader'
import BlogDetailBody from './BlogDetailBody'
import axios from 'axios';
import { useParams } from 'react-router-dom';

const BlogDetail = () => {
  const {id} = useParams()
const [blog, setBlog] = useState(null)
  useEffect(() => {
    async function getRes(){
      try {
        const res = await axios({
          method: "GET",
          withCredentials: false,
          url: `${process.env.REACT_APP_BASE_URL}/blogs/${id}`,
        })
        setBlog(res.data)
        console.log(blog)
      } catch (error) {
       console.log(error) 
      }
    } 
    getRes()
  }, []);

  return (
    <>
      <BlogDetailHeader blog={blog}/>
      <BlogDetailBody blog={blog}/>
    </>
  )
}

export default BlogDetail