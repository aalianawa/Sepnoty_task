import React from 'react'
import cuate from "../../assets/images/cuate.svg"
import './styling.css'
const ScrollingImage = () => {
  return (
    <div className="wrapper">
    <div className='container'>

      <div className="row featurette">
      <h2 className="featurette-heading mt-4">From Idea -To-Development </h2>
        <div className="col-md-7">
      
          <p className="leading mt-4">We are a development agency focused on delivering top-tier solutions for web and mobile platforms using both established and cutting-edge technologies. Our team of experts possesses specialized knowledge and experience in digital marketing, SEO, software development, and web design, enabling us to consistently deliver high-quality work to our clients.</p>
        </div>
        <div className="col-md-5 mt-5 mb-4">
            <img src={cuate} height={400} width={500} alt="" className="shadow-image" />
        </div>
      </div>
    </div>
    </div>
  )
}

export default ScrollingImage