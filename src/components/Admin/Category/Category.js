import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Flip, Slide, ToastContainer, toast } from 'react-toastify';
import PrimeTable from '../../Table/PrimeTable';

const Category = () => {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")

  const navigate = useNavigate();
  const token = JSON.parse(localStorage.user).tokens.access.token;
  const notify = (message) => toast(message, {
    position: "top-right",
    autoClose: 2000,
    // hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    // progress: undefined,
    theme: "light",
    transition: Flip,
    });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios({
        method: "POST",
        headers : {authentication : `Bearer ${token}`},
        data: {
          name, description,
          // token: token,
          // role: 'user'
        },
        withCredentials: false,
        url: `${process.env.REACT_APP_BASE_URL}/category/add`,
      })
      console.log(res)
      notify()
      // localStorage.setItem("user", JSON.stringify(res.data))
      // navigate("/dashboard")
    } catch (error) {
      notify(error.response.data.message)
     console.log(error) 
    }
    
  }

  return (
   <> <section className="section section-lg-bottom bg-light">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <p className="subtitle">Categories</p>
            <h2 className="section-title">Add a Category</h2>
          </div>
          <div className="col-12 text-center">
            <form onSubmit={handleSubmit} className="row">
              <div className="col-lg-6">
                <input type="text" name="name" className="form-control mb-4" placeholder="Name" onChange={e => setName(e.target.value)} />
              </div>
              <div className="col-lg-6">
                <input type="text" className="form-control mb-4" placeholder="Description" name="description" onChange={e => setDescription(e.target.value)} />
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-primary">Add</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </section>
    <PrimeTable />
    </>
  )
}

export default Category