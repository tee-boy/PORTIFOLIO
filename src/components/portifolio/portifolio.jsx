import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import './portifolio.css';
import Modal from '../../commons/modal';
import PortOne from '../../asset/brarchitect.png';
import PortTwo from '../../asset/naccos.png';
import PortThree from '../../asset/voting.png';
import portFour from '../../asset/affix.png';
import portFive from '../../asset/eshop.png';
import portSix from '../../asset/gpa.png';

const Portifolio = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'center start']
  });

  const y = useSpring(
    useTransform(scrollYProgress, [0, 0.3, 1], [80, 0, 0]),
    { stiffness: 120, damping: 12, mass: 0.9 }
  );
  const scale = useSpring(
    useTransform(scrollYProgress, [0, 0.3, 1], [0.9, 1.05, 1]),
    { stiffness: 120, damping: 12, mass: 0.9 }
  );

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const projects = [
    { img: PortOne, title: "BR Architect - Engineering Company", desc: "Modern engineering company website.", git: "https://github.com/tee-boy/BR-ARCHITECT.COM", demo: "https://br-architect-com.vercel.app/" },
    { img: PortTwo, title: "Naccos Student's Database", desc: "Students DB with upcoming events.", git: "https://github.com/CodeWithNACOSDU/NACOS-DU-voting-system", demo: "http://nacos-du-voting-system.vercel.app/" },
    { img: PortThree, title: "Naccos DU Voting System", desc: "Voting system for NACOS DU.", git: "https://github.com/CodeWithNACOSDU/NACOS-DU-voting-system", demo: "http://nacos-du-voting-system.vercel.app/" },
    { img: portFour, title: "Affix Company", desc: "Business web application.", git: "https://github.com/tee-boy/AFFIX", demo: "https://affix-two.vercel.app/" },
    { img: portFive, title: "E-Shop - BuiltByTee", desc: "E-Commerce web app.", git: "https://github.com/tee-boy/e-shop", demo: "https://e-shop-indol-iota.vercel.app/" },
    { img: portSix, title: "GPA Calculator", desc: "Calculate your grades & units.", git: "https://github.com/tee-boy/GPA-CALCULATOR", demo: "https://gpa-calculator-beryl.vercel.app/" }
  ];

  return (
    <section id='portifolio_section' ref={sectionRef}>
      <h5>My Recent Work</h5>
      <h2>My Portifolio</h2>

      <div className="container portifolio_container">
        {projects.map((item, index) => (
          <motion.article 
            key={index}
            className="portifolio_item"
            style={{ y, scale }}
            onClick={() => openModal(item)}
          >
            <div className="portifolio_img">
              <img src={item.img} alt={item.title} />
            </div>
            <h3>{item.title}</h3>
            <div className="portifolio_cta">
              <a href={item.git} className='btn' target='_blank' rel="noreferrer">Github</a>
              <a href={item.demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
            </div>
          </motion.article>
        ))}
        <a href="https://github.com/tee-boy" className='btn more'>Show More...</a>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {modalContent && (
          <div>
            <img src={modalContent.img} alt={modalContent.title} style={{ width: '100%', borderRadius: '8px' }} />
            <h2>{modalContent.title}</h2>
            <p>{modalContent.desc}</p>
            <div style={{ marginTop: '10px' }}>
              <a href={modalContent.git} className='btn' target='_blank' rel="noreferrer">Github</a>
              <a href={modalContent.demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Portifolio;
