import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import slugify from 'react-slugify';

import 'react-quill/dist/quill.snow.css';

import "quill/dist/quill.core.css";
import QuillToolbar, { modules, formats } from "./QuillToolbar";
import axios from 'axios';


const Blog = () => {
  const [value, setValue] = useState('');
  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);
  const token = JSON.parse(localStorage.user).tokens.access.token;
  const createdBy = JSON.parse(localStorage.user).user.id;
  
  const handleFile = (event) => {
    setImage(event.target.files[0])
    console.log(event.target.files[0])
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios({
        method: "POST",
        headers : {authentication : `Bearer ${token}`, 'Content-Type': 'multipart/form-data'},
        data: {
          description: value,
          title,
          image,
          slug: slugify(title),
          createdBy
        },
        withCredentials: false,
        url: `${process.env.REACT_APP_BASE_URL}/blogs/add`,
      })
    } catch (error) {
     console.log(error) 
    }
  }

  return (
    <>
      <section className="section section-lg-bottom bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <p className="subtitle">Add Blog</p>
              <h2 className="section-title">Add New Blog</h2>
            </div>
            <div className="col-12 text-center">
              <form onSubmit={handleSubmit} className="row">
                <div className="col-lg-12">
                  <input type="text" className="form-control mb-4" name="blog" onChange={e => setTitle(e.target.value)} placeholder="Title" />
                </div>
                <div className="col-lg-12">
                  <input type="file" className="form-control mb-4" name="image" onChange={handleFile} placeholder="Title" />
                </div>
                <div className="col-12">
                  <QuillToolbar className="form-control mb-4"/>
                  <ReactQuill className="form-control mb-4" style={{width:'100%', height: '300px', marginBottom: '30px'}} theme="snow" value={value} onChange={setValue} modules={modules} formats={formats}/>
                </div>

                {/* <div className="col-lg-6">
                  <input type="text" className="form-control mb-4" placeholder="Your Name" />
                </div>
                <div className="col-12">
                  <input type="text" className="form-control mb-4" placeholder="Subject" />
                </div>
                <div className="col-12">
                  <textarea name="message" className="form-control mb-4" placeholder="Message" defaultValue={""} />
                </div> */}
                <div className="col-12">
                  <button type="submit" className="btn btn-primary">Publish Now</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Blog