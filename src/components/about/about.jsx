import React from 'react';
import './about.css';
import ME from '../../asset/me-about.jpg';
import { FiUsers } from 'react-icons/fi';
import { FaAward } from 'react-icons/fa6';
import { BiFolder } from 'react-icons/bi';

const about = () => {  
  return (
    <section id='about_section'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>


      <div className="container about_container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={ME} alt="Me About" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>

            <article className="about_card myCard">
              <FiUsers className="about_icon" />
              <h5>Clients</h5>
              <small>50+ Nation Wide</small>
            </article>

            <article className="about_card">
              <BiFolder className="about_icon" />
              <h5>Projects</h5>
              <small>30+ Completed</small>
            </article>
          </div>

      <div className="about_content">
      <p>
      A Creative and passionate full stack developer, with 2 years + Eperience, with a goal to be there for all of you investors, bussiness owners, and self employed clients with the best web applications that suites your Idea.
      </p>

      <a href="#contact_section" className='btn btn-primary'>Let's Talk</a>
      </div>
        </div>
      </div>
    </section> 
  )
};

export default about;