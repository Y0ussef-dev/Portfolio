import React from 'react'
import './Experience.css'

/* React Icons */
import {BsFillPatchCheckFill} from 'react-icons/bs'


const Experience = () => {
  return (
    <section id='experience'>
      <h5>What did I learn?</h5>
      <h2>My skills</h2>

      <div className="container experienceContainer">

        <div className="experienceFrontend">
          <h3>Frontend Development</h3>
          <div className="experienceContent">

            <article className='experienceDetails'> 
            <BsFillPatchCheckFill className='experienceDetials-icon'/> 

            <div>
              <h4>HTMl</h4>
              <small className='textLight'>Experienced</small>
            </div>

            </article>

            <article className='experienceDetails'> 
            <BsFillPatchCheckFill className='experienceDetials-icon'/> 

            <div>
              <h4>CSS</h4>
              <small className='textLight'>Experienced</small>
            </div>

            </article>

            <article className='experienceDetails'> 
            <BsFillPatchCheckFill className='experienceDetials-icon'/> 

            <div>
              <h4>JavaScript</h4>
              <small className='textLight'>Intermediate</small>
            </div>

            </article>

            <article className='experienceDetails'> 
            <BsFillPatchCheckFill className='experienceDetials-icon'/> 

            <div>
              <h4>React</h4>
              <small className='textLight'>Intermediate</small>
            </div>

            </article>
        
            

          </div>

        </div>

        <div className="experienceGameDev">
          <h3>Game Development</h3>
          <div className="experienceContent">

            <article className='experienceDetails'> 
            <BsFillPatchCheckFill className='experienceDetials-icon'/> 
            
          <div>
            <h4>Unity</h4>
            <small className='textLight'>Intermediate</small>
          </div>

            </article>

            <article className='experienceDetails'> 
            <BsFillPatchCheckFill className='experienceDetials-icon' /> 

          <div>
            <h4>Unreal</h4>
            <small className='textLight'>Beginner</small>
          </div>

            </article>

            <article className='experienceDetails'> 
            <BsFillPatchCheckFill className='experienceDetials-icon'/> 

          <div>
            <h4>C#</h4>
            <small className='textLight'>Intermediate</small>
          </div>

            </article>

            <article className='experienceDetails'> 
            <BsFillPatchCheckFill className='experienceDetials-icon'/> 

          <div>
            <h4>C++</h4>
            <small className='textLight'>Intermediate</small>
          </div>

            </article>

            <article className='experienceDetails'> 
            <BsFillPatchCheckFill className='experienceDetials-icon'/> 

          <div>
            <h4>Python</h4>
            <small className='textLight'>Advanced</small>
          </div>

            </article>


        
            

          </div>

        </div>

        


        


      </div>
    </section>
  )
}

export default Experience