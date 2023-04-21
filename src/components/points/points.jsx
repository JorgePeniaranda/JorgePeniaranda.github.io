import { Fade } from 'react-reveal';
import './points.scss'

const Points = param => {
    return (
      <Fade right>
        <div id='points' className={(param.lightMode) ? 'light' : ''}>
          <a href={param.href[0]} aria-label={param.href[0]} className="point" id={(param.step === 1) ? 'active' : ''}>1</a>
          <div className="line"/>
          <a href={param.href[1]} aria-label={param.href[1]} className="point" id={(param.step === 2) ? 'active' : ''}>2</a>
          <div className="line"/>
          <a href={param.href[2]} aria-label={param.href[2]} className="point" id={(param.step === 3) ? 'active' : ''}>3</a>
          <div className="line"/>
          <a href={param.href[3]} aria-label={param.href[3]} className="point" id={(param.step === 4) ? 'active' : ''}>4</a>
          <div className="line"/>
          <a href={param.href[4]} aria-label={param.href[4]} className="point" id={(param.step === 5) ? 'active' : ''}>5</a>
        </div>
      </Fade>
    );
  }
  
  export default Points;