import React from 'react'
import './footer.css';
import { BsDiscord, BsTwitter, BsInstagram } from  'react-icons/bs';


const footer = () => {
  return (
    <div>
      <footer> 
        <a href="#" className='footer_logo'>#TOP dev</a>
        <ul className='permalinks'>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portifolio">Portifolio</a></li>
          <li><a href="#testimonals">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="footer__socials bg-green--600">
          <a href="https://instagram"><BsInstagram /></a>
          <a href="https://discord"><BsDiscord /></a>
          <a href="https://Twitter"><BsTwitter /></a>
        </div>

        <div className="footer__copyright">
          <small>&copy; Affix.io. All Rights Reserved.</small>
        </div>
      </footer>
    </div>
  )
}

export default footer
