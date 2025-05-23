import React from 'react';
import CV from '../../asset/resume.pdf';

const cta = () => {
  return (
      <div className="cta">
        <a className='btn' href = {CV} download> Download Cv</a>
        <a className='btn btn-primary' href="">Let's Talk</a>

      </div>    
  )
}

export default cta
