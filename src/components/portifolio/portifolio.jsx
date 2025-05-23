import React from 'react'
import './portifolio.css'
import  PortOne  from '../../asset/FedEx.jpg'
import  PortTwo  from '../../asset/port.jpg'
import  PortThree  from '../../asset/site.jpg'

const portifolio = () => {
  return (
<section id='portifolio_section'>
    <h5>My Recent Work</h5>  
    <h2>My Portifolio</h2>

    <div className="container portifolio_container">
    <article className="portifolio_item">
      <div className="portifolio_img"> 
        <img src= {PortOne} alt="" />
      </div>
      <h3>This is a Portifolio Item</h3>
      <div className="portifolio_cta">
      <a href="" className='btn'>Github</a>
      <a href="" className='btn btn-primary'>Live Demo</a>
    </div>
    </article>

    <article className="portifolio_item">
      <div className="portifolio_img">
        <img src= {PortTwo} alt="" />
      </div>
      <h3>This is a Portifolio Item</h3>
      <div className="portifolio_cta">
      <a href="https://github.com" className='btn' target='_blank'>Github</a>
      <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
    </div>
    </article>

    <article className="portifolio_item">
      <div className="portifolio_img">
        <img src= {PortThree} alt="" />
      </div>
      <h3>This is a Portifolio Item</h3>
      <div className="portifolio_cta">
      <a href="https://github.com" className='btn' target='_blank'>Github</a>
      <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
    </div>
    </article>

    <article className="portifolio_item">
      <div className="portifolio_img">
        <img src= {PortTwo} alt="" />
      </div>
      <h3>This is a Portifolio Item</h3>
      <div className="portifolio_cta">
      <a href="https://github.com" className='btn' target='_blank'>Github</a>
      <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
    </div>
    </article>

    <article className="portifolio_item">
      <div className="portifolio_img">
        <img src= {PortTwo} alt="" />
      </div> 
      <h3>This is a Portifolio Item</h3>
      <div className="portifolio_cta">
      <a href="https://github.com" className='btn' target='_blank'>Github</a>
      <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
    </div>
    </article>

    <article className="portifolio_item">
      <div className="portifolio_img">
        <img src= {PortOne} alt="" />
      </div>
      <h3>This is a Portifolio Item</h3>
      <div className="portifolio_cta">
      <a href="https://github.com" className='btn' target='_blank'>Github</a>
      <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
    </div>
    </article>

    </div>

     
</section> 
  )
}

export default portifolio
