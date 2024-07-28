import React from 'react'
import img from '../assets/images/preloader.gif'

const Loading = () => {
  return (
    <div className="preloader">
      <img src={img} alt="preloader" className="img-fluid" />
    </div>

  )
}

export default Loading