import CV from '../../asset/resume.pdf';
import './header.css';

const Cta = () => {
  return (
      <div className="cta">
        <a className='btn' href = {CV} download> Download Cv</a>
        <a className='btn btn-primary' href="https://alvo.chat/6dMu">Let's Talk</a>
      </div>    
  )
}
export default Cta;
