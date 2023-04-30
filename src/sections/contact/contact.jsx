import Points from '../../components/points/points'
import "./contact.scss"

const Contact = props => {
  return(
    <section id='Contact'>
      <h1>Contact</h1>
      <div className="container">
        <form>
          <input type="text" placeholder='Your Name...' name="name" id="name" />
          <input type="text" placeholder='Your Email...' name="mail" id="mail" />
          <textarea placeholder='Your Message...' name="message" id="message" cols="30" rows="10" spellcheck="true"></textarea>
          <input type="submit" />
        </form>
        <Points href={props.index} step={5}/>
      </div>
    </section>
    );
}

export default Contact;
