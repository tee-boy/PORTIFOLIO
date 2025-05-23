import React from 'react';
import './nav.css';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { BiMessageSquareDetail } from 'react-icons/bi';

const nav = () => {

  return (
    <nav>
      <a href="#" className = 'active'> <AiOutlineHome /></a>
      <a href="#about_section"><AiOutlineUser /></a>
      <a href="#experience_section"><BiBook /></a>
      <a href="#service_section"><RiServiceLine /></a>
      <a href="#contact_section"><BiMessageSquareDetail /></a>
    </nav>
  )  
}

export default nav;