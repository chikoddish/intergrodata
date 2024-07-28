import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

import url from '../../../url'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios({
        method: "POST",
        data: {
          email,
          password
        },
        withCredentials: false,
        url: `${url.REACT_APP_BASE_URL}/auth/login`,
      })
      localStorage.setItem("user", JSON.stringify(res.data))
      navigate("/add-blog")
    } catch (error) {
     console.log(error) 
    }
    
  }

  return (
    <section className="section section-lg-bottom bg-light">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <p className="subtitle">Login to continue</p>
            {/* <h2 className="section-title">Leave A Message</h2> */}
          </div>
          <div className="col-12 text-center">
            <form onSubmit={handleSubmit} className="row">
              <div className="col-lg-6">
                <input type="text" name="email" className="form-control mb-4" placeholder="Your email" onChange={e => setEmail(e.target.value)} />
              </div>
              <div className="col-lg-6">
                <input type="password" name="password" className="form-control mb-4" placeholder="Password" onChange={e => setPassword(e.target.value)} />
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login