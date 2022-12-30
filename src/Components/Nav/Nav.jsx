import React from 'react'
import './Nav.css'
import { useState } from 'react'

/* Icons */
import {AiOutlineHome} from 'react-icons/ai'
import {FaUserCircle} from 'react-icons/fa'
import {FaFlask} from 'react-icons/fa'
import {AiOutlineMessage} from 'react-icons/ai'
import {FaGamepad} from 'react-icons/fa'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}> <AiOutlineHome /> </a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}> <FaUserCircle /> </a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}> <FaFlask /> </a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><FaGamepad /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}> <AiOutlineMessage /> </a>
    </nav>
  )
}

export default Nav