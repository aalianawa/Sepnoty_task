import React from 'react'
import './Applogo.css'
import node from "../assets/images/Node.js_logo_2015 2.svg"
import python from "../assets/images/Python-Logo 2.svg"
import dj from "../assets/images/image 19.svg"
import NetM from "../assets/images/download 4.svg"
import larava from "../assets/images/download (2) 2.svg"
import php from "../assets/images/PhP.svg"
import symfony from "../assets/images/Symfony2 2.svg"

const SkillsLogo = () => {
  return (
    <section className='text-center align-items-center wrapper py-3'>
        <div className="containe container">
        <div className="row A-container ">
            <img src={node}  alt="" />
            <img src={python}  alt="" />
            <img src={dj} alt="" />
            <img src={NetM} alt="" />
            <img src={larava} alt="" />
            <img src={php} alt="" />
            <img src={symfony} alt="" />
        </div>
        </div>
    </section>
  )
}

export default SkillsLogo