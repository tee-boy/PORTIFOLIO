import './testimonals.css';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Gmax from '../../asset/gmax logo.png';
import Ronnie from '../../asset/ronnie.png';
import FitMe from '../../asset/fit-me-removebg-preview.png';
import Zion from '../../asset/zion.jpg';

const testimonialsData = [
  { avatar: FitMe, name: "Fit Me", review: "Amazing work! Highly recommended, Working with Emmanuel was an absolute pleasure! He turned my vague ideas into a stunning, functional product that works perfectly on every device. His attention to detail and creativity really blew me away." },
  { avatar: Zion, name: "Olatunji Zion", review: "Great communication and delivery, Tee_Dev is not just a developer — he’s a partner in bringing visions to life. Fast delivery, clean code, and constant communication made the entire process smooth and stress-free. Highly recommended." },
  { avatar: Ronnie, name: "Adewole Ronald", review: "Outstanding results and creativity, I’ve collaborated with many developers, but Tochukwu stands out for his professionalism and passion. He combines great design sense with solid technical skills, and the end result exceeded my expectations." },
  { avatar: Gmax, name: "G-Max", review: "Loved the experience, thank you! Emmanuel took our project from concept to reality faster than we imagined. His problem-solving skills and creative approach helped us overcome challenges, and the final product looks and feels amazing!" },
];

const Testimonals = () => {
  const [index, setIndex] = useState(0);

  const nextTestimonial = () => {
    setIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setIndex((prev) =>
      prev === 0 ? testimonialsData.length - 1 : prev - 1
    );
  };

  return (
    <section id='testimonals_section'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <div className="carousel_container">
        <button onClick={prevTestimonial} className="carousel_btn">‹</button>

        <div className="carousel_slider">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={index}
              className="testimonial_main"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
            >
              <img src={testimonialsData[index].avatar} alt={testimonialsData[index].name} />
              <h5>{testimonialsData[index].name}</h5>
              <small>{testimonialsData[index].review}</small>
            </motion.div>
          </AnimatePresence>
        </div>

        <button onClick={nextTestimonial} className="carousel_btn">›</button>
      </div>
    </section>
  );
};

export default Testimonals;
