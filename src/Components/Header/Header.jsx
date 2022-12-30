import React from 'react'
import './Header.css'
import CTA from './CTA'
import Me from '../../assets/Me2.png'
import HeaderSocials from './HeaderSocials'



const Header = () => {
  return (
    <header>

      <div className="container headerContainer">
        <h5>Hello I'm</h5>
        <h1>Youssef Abdelmalak</h1>
        <h5 className="textLight">Software Engineer, Full-Stack Developer, Game Developer</h5>
        <CTA />

        <HeaderSocials />

        <div className="me">
          <img src={Me} alt="Me" />
        </div>
      
        <a href="#contact" className='scrollDown' >Scroll Down</a>
      </div>

    </header>
  )
}

export default Header