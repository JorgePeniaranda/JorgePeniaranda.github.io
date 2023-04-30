import './card.scss'
import { Flip } from 'react-reveal';
import CountUp from 'react-countup';

const Card = props => {
    return (
      <Flip top>
        <div className="cardContainer">
          <span className='icon'>
            {props.icon}
          </span>
          <CountUp end={props.number} startOnMount={false} enableScrollSpy scrollSpyOnce={false} suffix={(props.plus) ? "+" : ""}/>
          <p>{props.text}</p>
        </div>
      </Flip>
    );
  }
  
  export default Card;