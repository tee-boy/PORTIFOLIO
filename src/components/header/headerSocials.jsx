import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";

const headerSocials = () => {
  return (
    <div className='header__socials'>
      <a href="http://www.linkedin.com/in/emmanuel-tochukwu-a447b9273"><FaLinkedin /></a>
      <a href="https://github.com/tee-boy"><FaGithub /></a>
      <a href="https://x.com/Tee__Dev"><FaSquareXTwitter /></a>
    </div>
  )
}

export default headerSocials
