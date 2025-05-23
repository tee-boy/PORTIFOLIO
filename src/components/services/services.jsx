import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const services = () => {
  return (
    <section id='service_section'>
      <h5>What I Do</h5>
      <h2>My Services</h2>

      <div className="container services_container">
    <article className="service">
    <div className="services_head">
      <h3>UI/UX Deisgn</h3>
    </div>

    <ul className="service_list">
      <li>
      <BiCheck className='icon' />
      <p>Wire Frame.</p>
      </li>
      <li>
      <BiCheck className='icon' />
      <p>Web Design</p>
      </li>
      <li>
      <BiCheck className='icon' />
      <p>Branding</p>
      </li>
      <li>
      <BiCheck className='icon' />
      <p>Product Designs</p>
      </li>
      <li>
      <BiCheck className='icon' />
      <p>Web Prototype</p>
      </li>
      <li>
      <BiCheck className='icon' />
      <p>Online Banners</p>
      </li>
    </ul>
    </article>
    {/* ===== End Of UI/Ux */}
    
    <article className="service">
    <div className="services_head">
      <h3>Web Development</h3>
    </div>

    <ul className="service_list">
      <li>
      <BiCheck className='icon' />
      <p>Mobile - Web Applications.</p>
      </li>
      <li>
      <BiCheck className='icon' />
      <p>Web Application.</p>
      </li>
      <li>
      <BiCheck className='icon' />
      <p>Portifolio</p>
      </li>
      <li>
      <BiCheck className='icon' />
      <p>Web3 Web Applicatiions</p>
      </li>
      <li>
      <BiCheck className='icon' />
      <p>E-Commerce Web Application</p>
      </li>
      <li>
      <BiCheck className='icon' />
      <p>Booking System.</p>
      </li>
      <li>
      <BiCheck className='icon' />
      <p>Dash Board.</p>
      </li>
      {/* <li>
      <BiCheck className='icon' />
      <p>Lorem ipsum dolor sit amet consectetur.</p>
      </li> */}
    </ul>
    </article>
    {/* ===== End Of UI/Ux */}

    <article className="service">
    <div className="services_head">
      <h3>Content Creation</h3>
    </div>

    <ul className="service_list">
      <li>
      <BiCheck className='icon' />
      <p>Forex Trading.</p>
      </li>
      <li>
      <BiCheck className='icon' />
      <p>Gaming.</p>
      </li>
      <li>
      <BiCheck className='icon' />
      <p>You tubing.</p>
      </li>
      <li>
      <BiCheck className='icon' />
      <p>Beat Production.</p>
      </li>
      <li>
      <BiCheck className='icon' />
      <p>Instruments.</p>
      </li>
      <li>
      <BiCheck className='icon' />
      <p>FootBall.</p>
      </li>
    </ul>
    </article>
    {/* ===== End Of UI/Ux */}

      </div>
    </section>
  )
}

export default services
