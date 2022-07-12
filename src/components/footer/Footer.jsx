import React from 'react'
import './Footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {FaLinkedin} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">ZAMIR</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonial</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com/zamir2003"><FaFacebookF /></a>
        <a href="https://instagram.com/the.zamir"><BsInstagram /></a>
        <a href="https://linkedin.com/in/zamirguliyev"><FaLinkedin /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; ZAMIR Tutorials. All rights reserved.</small>
      </div>
    </footer> 
  )
}

export default Footer