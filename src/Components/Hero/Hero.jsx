import React from 'react'
import './Hero.css'
import profile_img from '../../assets/Sumit_image.png'

const Hero = () => {
  return (
    <div className='hero'>
      <img src={profile_img} alt="" />
      <h1><span>I'm Sumit Chaira,</span> Full Stack Developer based in India</h1>
      <p>AI & ML Engineer | Full Stack Developer | B.Tech CSE (AI & ML) @ UEM Kolkata | Passionate about Python, Web Development & Innovative Tech Solutions 🚀</p>
      <div className="hero-action">
        <div className="hero-connect">Connnect With Me</div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  )
}

export default Hero