import Points from '../../components/points/points'
import "./contact.scss"

const Contact = props => {
  return(
    <section id='Contact'>
      <h1>Contact</h1>
      <div className="container">
        <form onsubmit="event.preventDefault();" method='get'>
          <input type="text" placeholder='Your Name...' name="name" id="name" required/>
          <input type="email" placeholder='Your Email...' name="mail" id="mail" required/>
          <textarea placeholder='Your Message...' name="message" id="message" cols="30" rows="10" spellcheck="true" required></textarea>
          <input type="submit" />
        </form>
        <Points href={props.index} step={5}/>
      </div>
    </section>
    );
}

export default Contact;
