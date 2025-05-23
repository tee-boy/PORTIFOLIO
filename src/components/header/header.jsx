import React from 'react';
import CTA from './cta';
import HeaderSocials from './headerSocials';
import ME from '../../asset/me.png';
import './header.css';

const header = () => {
  return (
    <header>
      <div className ='container header_container'>
        <h5>Hello I'm</h5>
        <h1>Tochukwu Emmanuel</h1>
        <h5 className="text-light">Front-End Developer</h5>
        <CTA />

        <HeaderSocials />
        <a href="#contact_section" className="scroll_down"> Scroll Down </a>
        <div className="me">
        <img src = {ME} alt="me" />
        </div>
      </div>
    </header>
  )
}

export default header
