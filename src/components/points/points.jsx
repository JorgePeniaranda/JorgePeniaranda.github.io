import { Fade } from 'react-reveal';
import './points.scss'

const Points = param => {
    return (
      <Fade right>
        <div id='points' className={(param.lightMode) ? 'light' : ''}>
          <a href={param.href[0]} aria-label={param.href[0]} className={((param.step === 1) ? 'active' : '') + " point"}>1</a>
          <div className="line"/>
          <a href={param.href[1]} aria-label={param.href[1]} className={((param.step === 2) ? 'active' : '') + " point"}>2</a>
          <div className="line"/>
          <a href={param.href[2]} aria-label={param.href[2]} className={((param.step === 3) ? 'active' : '') + " point"}>3</a>
          <div className="line"/>
          <a href={param.href[3]} aria-label={param.href[3]} className={((param.step === 4) ? 'active' : '') + " point"}>4</a>
          <div className="line"/>
          <a href={param.href[4]} aria-label={param.href[4]} className={((param.step === 5) ? 'active' : '') + " point"}>5</a>
        </div>
      </Fade>
    );
  }
  
  export default Points;