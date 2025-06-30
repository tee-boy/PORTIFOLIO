import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './services.css';
import { BiCheck } from 'react-icons/bi';

const Services = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'center start']
  });

  // Left card transforms
  const leftX = useTransform(scrollYProgress, [0, 0.4], [-80, 0]);
  const leftY = useTransform(scrollYProgress, [0, 0.4], [-80, 0]);
  const leftScale = useTransform(scrollYProgress, [0, 0.4], [0.8, 1]);
  const leftRotate = useTransform(scrollYProgress, [0, 0.4], [-8, 0]);

  // Middle card transforms
  const middleY = useTransform(scrollYProgress, [0, 0.4], [-80, 0]);
  const middleScale = useTransform(scrollYProgress, [0, 0.4], [0.8, 1]);
  const middleRotate = useTransform(scrollYProgress, [0, 0.4], [-5, 0]);

  // Right card transforms
  const rightX = useTransform(scrollYProgress, [0, 0.4], [80, 0]);
  const rightY = useTransform(scrollYProgress, [0, 0.4], [-80, 0]);
  const rightScale = useTransform(scrollYProgress, [0, 0.4], [0.8, 1]);
  const rightRotate = useTransform(scrollYProgress, [0, 0.4], [8, 0]);

  return (
    <section id='service_section' ref={sectionRef}>
      <h5>What I Do</h5>
      <h2>My Services</h2>

      <div className="container services_container">
        <motion.article 
          className="service"
          style={{ 
            x: leftX, 
            y: leftY, 
            scale: leftScale, 
            rotate: leftRotate 
          }}
        >
          <div className="services_head">
            <h3>UI/UX Design</h3>  
          </div>
          <ul className="service_list">
            <li><BiCheck className='icon' /><p>Wire Frame.</p></li>
            <li><BiCheck className='icon' /><p>Web Design</p></li>
            <li><BiCheck className='icon' /><p>Branding</p></li>
            <li><BiCheck className='icon' /><p>Product Designs</p></li>
            <li><BiCheck className='icon' /><p>Web Prototype</p></li>
            <li><BiCheck className='icon' /><p>Online Banners</p></li>
          </ul>
        </motion.article>

        <motion.article 
          className="service"
          style={{ 
            y: middleY, 
            scale: middleScale, 
            rotate: middleRotate 
          }}
        >
          <div className="services_head">
            <h3>Web Development</h3>
          </div>
          <ul className="service_list">
            <li><BiCheck className='icon' /><p>Mobile - Web Applications.</p></li>
            <li><BiCheck className='icon' /><p>Web Application.</p></li>
            <li><BiCheck className='icon' /><p>Portifolio</p></li>
            <li><BiCheck className='icon' /><p>Web3 Web Applications</p></li>
            <li><BiCheck className='icon' /><p>E-Commerce Web Application</p></li>
            <li><BiCheck className='icon' /><p>Booking System.</p></li>
            <li><BiCheck className='icon' /><p>Dashboard.</p></li>
          </ul>
        </motion.article>

        <motion.article 
          className="service"
          style={{ 
            x: rightX, 
            y: rightY, 
            scale: rightScale, 
            rotate: rightRotate 
          }}
        >
          <div className="services_head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service_list">
            <li><BiCheck className='icon' /><p>Forex Trading.</p></li>
            <li><BiCheck className='icon' /><p>Gaming.</p></li>
            <li><BiCheck className='icon' /><p>YouTubing.</p></li>
            <li><BiCheck className='icon' /><p>Beat Production.</p></li>
            <li><BiCheck className='icon' /><p>Instruments.</p></li>
            <li><BiCheck className='icon' /><p>Football.</p></li>
          </ul>
        </motion.article>
      </div>
    </section>
  );
};

export default Services;
