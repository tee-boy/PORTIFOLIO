import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const experience = () => {
  return (
    <section id='experience_section'>
      <h5>Get To Know</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
            <h3>Front-end Development</h3>

            <div className="experience_content">
              <article className="experience_article">
                <BsPatchCheckFill className="icon" />
                <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience_article">
                <BsPatchCheckFill className="icon" />
                <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience_article">
                <BsPatchCheckFill className="icon" />
               <div>
               <h4>JavaScript</h4>
               <small className="text-light">Experienced</small>
               </div>
              </article>
              <article className="experience_article">
                <BsPatchCheckFill className="icon" />
               <div>
               <h4>BootStrap</h4>
               <small className="text-light">Experienced</small>
               </div>
              </article>
              <article className="experience_article">
                <BsPatchCheckFill className="icon" />
               <div>
               <h4>TailWind</h4>
               <small className="text-light">Experienced</small>
               </div>
              </article>
              <article className="experience_article">
                <BsPatchCheckFill className="icon" />
                <div>
                <h4>React</h4>
                <small className="text-light">Experienced</small>
                </div>
              </article>
            </div>
        </div>

        <div className="experience_backend">
        <h3>Back-end Development</h3>

        <div className="experience_content">

          <article className="experience_article">
            <BsPatchCheckFill className="icon" />
            <div>
            <h4>Node</h4>
            <small className="text-light">Intermidiate</small>
            </div>
          </article>
          <article className="experience_article">
            <BsPatchCheckFill className="icon" />
           <div>
           <h4>Express</h4>
           <small className="text-light">Beginner</small>
           </div>
          </article>
          <article className="experience_article">
            <BsPatchCheckFill className="icon" />
            <div>
            <h4>Supabase</h4>
            <small className="text-light">Experienced</small>
            </div>
          </article>
          <article className="experience_article">
            <BsPatchCheckFill className="icon" />
            <div>
            <h4>PHP</h4>
            <small className="text-light">Beginner</small>
            </div>
          </article>
          <article className="experience_article">
            <BsPatchCheckFill className="icon" />
            <div>
            <h4>Python</h4>
            <small className="text-light">Intermidiate</small>
            </div>
          </article>
          <article className="experience_article">
            <BsPatchCheckFill className="icon" />
           <div>
           <h4>Web3</h4>
           <small className="text-light">Beginner</small>
           </div>
          </article>
        </div>
        </div>
      </div>

    </section>
  )
}

export default experience
