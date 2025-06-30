import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import './experience.css';
import { BsPatchCheckFill } from 'react-icons/bs';

const Experience = () => {
  const expRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: expRef,
    offset: ["start end", "center start"]
  });

  // Frontend: bounce from top-left
  const rawFrontendX = useTransform(scrollYProgress, [0, 0.3, 1], [-60, 0, 0]);
  const rawFrontendY = useTransform(scrollYProgress, [0, 0.3, 1], [-60, 0, 0]);
  const frontendX = useSpring(rawFrontendX, { stiffness: 180, damping: 12, mass: 0.8 });
  const frontendY = useSpring(rawFrontendY, { stiffness: 180, damping: 12, mass: 0.8 });
  const frontendScale = useSpring(
    useTransform(scrollYProgress, [0, 0.3, 1], [0.95, 1.05, 1]),
    { stiffness: 180, damping: 12, mass: 0.8 }
  );

  // Backend: bounce from top-right
  const rawBackendX = useTransform(scrollYProgress, [0, 0.3, 1], [60, 0, 0]);
  const rawBackendY = useTransform(scrollYProgress, [0, 0.3, 1], [-60, 0, 0]);
  const backendX = useSpring(rawBackendX, { stiffness: 180, damping: 12, mass: 0.8 });
  const backendY = useSpring(rawBackendY, { stiffness: 180, damping: 12, mass: 0.8 });
  const backendScale = useSpring(
    useTransform(scrollYProgress, [0, 0.3, 1], [0.95, 1.05, 1]),
    { stiffness: 180, damping: 12, mass: 0.8 }
  );

  return (
    <section id='experience_section' ref={expRef}>
      <h5>Get To Know</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <motion.div 
          className="experience_frontend"
          style={{ x: frontendX, y: frontendY, scale: frontendScale }}
        >
          <h3>Front-end Development</h3>
          <div className="experience_content">
            <article className="experience_article">
              <BsPatchCheckFill className="icon" />
              <div><h4>HTML</h4><small className="text-light">Experienced</small></div>
            </article>
            <article className="experience_article">
              <BsPatchCheckFill className="icon" />
              <div><h4>CSS</h4><small className="text-light">Experienced</small></div>
            </article>
            <article className="experience_article">
              <BsPatchCheckFill className="icon" />
              <div><h4>JavaScript</h4><small className="text-light">Experienced</small></div>
            </article>
            <article className="experience_article">
              <BsPatchCheckFill className="icon" />
              <div><h4>Next.Js</h4><small className="text-light">Experienced</small></div>
            </article>
            <article className="experience_article">
              <BsPatchCheckFill className="icon" />
              <div><h4>TailWind</h4><small className="text-light">Experienced</small></div>
            </article>
            <article className="experience_article">
              <BsPatchCheckFill className="icon" />
              <div><h4>React</h4><small className="text-light">Experienced</small></div>
            </article>
          </div>
        </motion.div>

        <motion.div 
          className="experience_backend"
          style={{ x: backendX, y: backendY, scale: backendScale }}
        >
          <h3>Back-end Development</h3>
          <div className="experience_content">
            <article className="experience_article">
              <BsPatchCheckFill className="icon" />
              <div><h4>Node</h4><small className="text-light">Intermediate</small></div>
            </article>
            <article className="experience_article">
              <BsPatchCheckFill className="icon" />
              <div><h4>Express</h4><small className="text-light">Beginner</small></div>
            </article>
            <article className="experience_article">
              <BsPatchCheckFill className="icon" />
              <div><h4>Supabase</h4><small className="text-light">Experienced</small></div>
            </article>
            <article className="experience_article">
              <BsPatchCheckFill className="icon" />
              <div><h4>PHP</h4><small className="text-light">Beginner</small></div>
            </article>
            <article className="experience_article">
              <BsPatchCheckFill className="icon" />
              <div><h4>Python</h4><small className="text-light">Intermediate</small></div>
            </article>
            <article className="experience_article">
              <BsPatchCheckFill className="icon" />
              <div><h4>Web3</h4><small className="text-light">Beginner</small></div>
            </article>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
