// import React from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { BsWhatsapp } from  'react-icons/bs';
import { BsInstagram } from  'react-icons/bs';
import { useRef } from 'react';
import EmailJs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    EmailJs
      .sendForm('service_qlraxhc', 'template_4pyxn0l', form.current, {
        publicKey: 'AOUrr576y84N2sKQK',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


  return (
    <section id='contact_section'>
       <h5>Get In Tourch</h5>  
       <h2>Contact Me</h2>

       <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact-options-name' />
            <h4>Email</h4>
            <h5>tochukwuemmanuel690@ <br /> gmail.com</h5>
            <a href="mailto:tochukwuemmanuel690@gmail.com">Send a Message</a>

          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact-options-name' />
            <h4>Whatsapp</h4>
            <h5>+234 912 6195 688</h5>
            <a href="https://api.whatsapp.com/send?phone=+2349126195688">Send a Message</a>

          </article>
          <article className="contact__option">
            <BsInstagram className='contact-options-name' />
            <h4>Affix.io</h4>
            <h5>Instagram</h5>
            <a href="">Send a Message</a>

          </article>
        </div>

        {/* End of Contact options */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Message</button>
        </form>
       </div>
    </section>

  )
};

export default Contact;