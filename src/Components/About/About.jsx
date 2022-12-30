import React from 'react'
import './About.css'

import Me from '../../assets/Me4.png'
import {FaAward} from 'react-icons/fa'
import {IoMdAlbums} from 'react-icons/io'

const About = () => {
  return (
    <section id="about">
      <h5>Want to know</h5>
      <h2>About me?</h2>


      <div className="container aboutContainer">

        <div className="aboutMe">

          <div className="aboutMeImage">
            <img src={Me} alt="Me" />
          </div>


        </div>

        <div className="aboutContent">
          <div className="aboutCards">
              
              <article className="aboutCard">
                < FaAward className='aboutIcon'/>
                <h5>Experience</h5>
                <small>2+ Years Working Experience</small>
              </article>

              <article className="aboutCard">
                < IoMdAlbums className='aboutIcon'/>
                <h5>Projects</h5>
                <small>20+ Completed Projects</small>
              </article>

              <p>I am a full-stack developer and game developer with a passion for creating innovative and immersive software experiences. I have a strong foundation in programming and a track record of successfully delivering projects on time and to specification.</p>

              <a href="" className="button">Let's Talk</a>

            </div>
        </div>
          
      </div>
    </section>
  )
}

export default About