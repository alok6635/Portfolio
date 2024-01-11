import React from 'react'
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Calculator',
    github: 'https://github.com/alok6635/calculator',
    demo: 'https://alok6635.github.io/calculator/'
  },
  {
    id: 1,
    image: IMG2,
    title: 'To-do-app',
    github: 'https://github.com/alok6635/to-do-with-reducer',
    demo: 'https://alok6635.github.io/to-do-with-reducer/'
  },
  {
    id: 1,
    image: IMG3,
    title: 'Social media',
    github: 'https://github.com/alok6635/social-media',
    demo: 'https://alok6635.github.io/social-media/'
  },
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5> My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio_container'>
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className='portfolio_item'>
                <div className='portfolio_item-image'>
                  <img src={image} alt={title} ></img>
                </div>
                <h3>{title}</h3>
                <div className='portfolio_item-cta'>
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio;