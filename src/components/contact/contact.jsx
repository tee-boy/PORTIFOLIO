import './contact.css';
import { BsWhatsapp, BsLinkedin, BsInstagram } from 'react-icons/bs';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import EmailJs from '@emailjs/browser';
import MagneticButton from '../../commons/CursorMagnetic';

const Contact = () => {
  const form = useRef();
  const [sentMessage, setSentMessage] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    EmailJs
      .sendForm('service_qlraxhc', 'template_4pyxn0l', form.current, {
        publicKey: 'AOUrr576y84N2sKQK',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset();
          setSentMessage(true);
          setTimeout(() => setSentMessage(false), 3000);
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <section id='contact_section'>
      <motion.h5
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Get In Touch
      </motion.h5>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Me
      </motion.h2>

      <div className="container contact__container">
        <motion.div
          className="contact__options"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <article className="contact__option">
            <BsLinkedin className='contact-options-name' />
            <h4>LinkedIn</h4>
            <h5>Tochukwu Emmanuel</h5>
            <a href="http://www.linkedin.com/in/emmanuel-tochukwu-a447b9273">Send a Message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact-options-name' />
            <h4>Whatsapp</h4>
            <h5>+234 912 6195 688</h5>
            <a href="https://alvo.chat/6dMu">Send a Message</a>
          </article>
          <article className="contact__option">
            <BsInstagram className='contact-options-name' />
            <h4>Affix.io</h4>
            <h5>Instagram</h5>
            <a href="https://msng.link/o?Affix.io=ig">Send a Message</a>
          </article>
        </motion.div>

        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>

          <MagneticButton>
            <button type='submit' className='btn btn-primary'>Message</button>
          </MagneticButton>
        </motion.form>

        {sentMessage && (
          <motion.div
            className="success-popup"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            Message sent!
            <div className="line"></div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Contact;
