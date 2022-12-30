import React from 'react'

/* React Icons */
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FaItchIo} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='HeaderSocials'>
        <a href="https://www.linkedin.com/in/youssef-abdelmalak-355362259/" target="_blank">< BsLinkedin /> </a>
        <a href="https://github.com/Y0ussef-dev" target="_blank"> < BsGithub /> </a>
        <a href="https://filosofiqal.itch.io/" target="_blank"> <FaItchIo /> </a>
    </div>
  )
}

export default HeaderSocials