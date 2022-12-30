import React from 'react'
import './Portfolio.css'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Most Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolioContainer">
        <article className='portfolioItem'>
          <div className="portfolioItem-image"></div>
          <h3>This is a portfolio item title</h3>
        </article>
      </div>
    </section>
  )
}

export default Portfolio