import React from 'react'
import './About.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Known</h5>
      <h2>About Me</h2>

      <div className="container about__container">
          <div className="about__me">
              <div className="about__me-image">
                <img src={ME} alt="About Image" />
              </div>
          </div>

          <div className="about__content">
              <div className="about__cards">
                <article className='about__card'>
                    <FaAward className='about__icon' />
                    <h5>Experience</h5>
                    <small>3+ Years Experience</small>
                </article>

                <article className='about__card'>
                    <FiUsers className='about__icon' />
                    <h5>Clients</h5>
                    <small>200+ Worldwide</small>
                </article>

                <article className='about__card'>
                    <VscFolderLibrary className='about__icon' />
                    <h5>Projects</h5>
                    <small>80+ Complited</small>
                </article>

              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi obcaecati distinctio veniam? Nostrum, cumque illum saepe laboriosam quam aliquid, tempora omnis sapiente beatae ducimus cupiditate voluptas fugiat a labore eius.</p>
              <a href="#contact" className='btn btn-primary' >Let's Talk</a>
          </div>
      </div>
    </section >
  )
}

export default About