import './card.scss'
import { Fade } from 'react-reveal';
import CountUp from 'react-countup';

const Card = props => {
    return (
      <Fade left>
        <div className="cardContainer">
          <span className='icon'>
            {props.icon}
          </span>
          <CountUp end={props.number} startOnMount={false} enableScrollSpy scrollSpyOnce={false} suffix={(props.plus) ? "+" : ""}/>
          <p>{props.text}</p>
        </div>
      </Fade>
    );
  }
  
  export default Card;