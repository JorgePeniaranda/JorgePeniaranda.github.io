import Points from '../../components/points/points'
import "./projects.scss"
import { Fade, Slide } from 'react-reveal'

const Projects = props => {
    return (
      <section id='Projects'>
        <h1>Projects</h1>
        <div className="container">
          <div id="timeLine">
            <div className="left cardsContainer">
              <Slide left>
                <a href="https://xdmoment.netlify.app/" className="card" target='_blank' rel="noreferrer">
                  <b>2020</b>
                  <span>Jildam</span>
                  <p>Jildam is a password management application with a focus on customizing the user experience. In addition to allowing you to manage and generate passwords securely, it also offers the possibility of customizing your profile with information such as your name, surname, biography, and profile picture.</p>
                </a>
              </Slide>
              <Slide left>
                <a href="https://xdmoment.netlify.app/" className="card" target='_blank' rel="noreferrer">
                  <b>2022</b>
                  <span>Namatbe</span>
                  <p>Namatbe is a store that sells natural items such as seeds, nuts, and other healthy foods, allowing customers to easily purchase them from anywhere online. Additionally, customers can enjoy the convenience of receiving their products directly at home, avoiding visits to the physical store.</p>
                </a>
              </Slide>
            </div>
            <Fade><span id="line"/></Fade>
            <div className="right cardsContainer">
              <Slide right>
                <a href="https://xdmoment.netlify.app/" className="card" target='_blank' rel="noreferrer">
                  <b>2021</b>
                  <span>Golden Duck</span>
                  <p>Una banca online donde podrá, no solo gestionar su dinero, sino que incluso invertirlo. Siempre llevando un registro de cuanto dinero es ingresado y cuanto dinero es gastado, contando con categorías para saber en qué lo gasta.</p>
                </a>
              </Slide>
              <Slide right>
                <a href="https://xdmoment.netlify.app/" className="card" target='_blank' rel="noreferrer">
                  <b>2023</b>
                  <span>Cómo Como?</span>
                  <p>"Cómo como?" helps nutrition clinic patients improve their health and achieve their nutrition goals through food tracking, communication with expert nutritionists, and the use of personalized recipes.</p>
                </a>
              </Slide>
            </div>
          </div> {/* EL BOTON */}
          <Points href={props.index} step={4}/>
        </div>
      </section>
    );
  }
  
  export default Projects;