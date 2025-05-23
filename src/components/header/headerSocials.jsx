import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";

const headerSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://linkedin.com" target='--blank'><FaLinkedin /></a>
      <a href="https://github.com" target='--blank'><FaGithub /></a>
      <a href="https://twitter.com" target='--blank'><FaSquareXTwitter /></a>
    </div>
  )
}

export default headerSocials
