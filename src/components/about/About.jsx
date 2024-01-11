import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FiAward} from 'react-icons/fi';
import {FiUsers} from 'react-icons/fi';
import {AiFillFolderOpen} from 'react-icons/ai';


const About = () => {
  return (
   <section id='about'>
<h5>Get To Know</h5>
<h2>About Me</h2>
<div className='container about_container'>
<div className='about_me'>
  <div className='about_me-image'>
<img src={ME} alt="About Image">
</img>
  </div>
  </div>
  <div className='about_content'>
    <div className='about_cards'>
      <article className='about_card'>
<FiAward className='about_icon'/>      
        <h4>Experiences</h4>
<small>1.5 years Working</small>  
      </article>
      
      <article className='about_card'>
<AiFillFolderOpen className='about_icon'/>      
        <h4>Projects</h4>
<small>3+  projects</small>  
      </article>
    </div>
    <p>

    With approximately two years of experience, including one year as an HTML developer and current
engagement as a React developer, I am a highly skilled front-end developer. Proficient in HTML, CSS,
JavaScript, and React, I have demonstrated success in delivering exceptional results.
</p>
<a href='#contact' className='btn btn-primary'>Let's Talk</a>

  </div>
  
</div>
   </section>
  )
}

export default About