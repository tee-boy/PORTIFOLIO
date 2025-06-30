import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import './about.css';
import ME from '../../asset/teedevv.jpg';
import { FiUsers } from 'react-icons/fi';
import { FaAward } from 'react-icons/fa6';
import { BiFolder } from 'react-icons/bi';

const About = () => {
  const aboutRef = useRef(null);

  // Track scroll progress relative to this section
  const { scrollYProgress } = useScroll({
    target: aboutRef,
    offset: ["start end", "end start"]
  });

  // Make scale flow from scroll
  const rawScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.1, 0.9]);

  // Use useSpring to slow down / add delay
  const scale = useSpring(rawScale, {
    stiffness: 80,   // lower stiffness = slower response
    damping: 20,     // higher damping = less bounce
    mass: 0.5        // higher mass = more lag/delay
  });

  // Subtle opacity effect
  const rawOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useSpring(rawOpacity, {
    stiffness: 100,
    damping: 30,
    mass: 0.3
  });

  return (
    <motion.section 
      id='about_section'
      ref={aboutRef}
      style={{ scale, opacity }}
    >
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

          <p>
            A creative and passionate full stack developer with 2+ years of experience, aiming to build the best web applications for investors, business owners, and self-employed clients.
          </p>

          <a href="#contact_section" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
