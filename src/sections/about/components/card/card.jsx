import './card.scss'

const Card = props => {
    return (
      <div className="cardContainer">
        <span>{props.number}{(props.plus) ? "+" : null}</span>
        <p>{props.text}</p>
      </div>
    );
  }
  
  export default Card;