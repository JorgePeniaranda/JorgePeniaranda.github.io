import Points from '../../components/points/points'
import "./projects.scss"

const Projects = props => {
    return (
      <section id='Projects'>
        <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1440 320">
          <path fill="0A0A0A" fill-opacity="1" d="M0,192L30,181.3C60,171,120,149,180,154.7C240,160,300,192,360,186.7C420,181,480,139,540,101.3C600,64,660,32,720,21.3C780,11,840,21,900,58.7C960,96,1020,160,1080,160C1140,160,1200,96,1260,64C1320,32,1380,32,1410,32L1440,32L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path>
        </svg>
        <h1>Projects</h1>
        <div className="container">
          <div id="timeLine">
            <div className="left cardsContainer">
              <div className="card">
                <b>2021</b>
                <span>Golden Duck</span>
                <p>Una banca online donde podrá, no solo gestionar su dinero, sino que incluso invertirlo. Siempre llevando un registro de cuanto dinero es ingresado y cuanto dinero es gastado, contando con categorías para saber en qué lo gasta.</p>
              </div>
              <div className="card">
                <b>2021</b>
                <span>Golden Duck</span>
                <p>Una banca online donde podrá, no solo gestionar su dinero, sino que incluso invertirlo. Siempre llevando un registro de cuanto dinero es ingresado y cuanto dinero es gastado, contando con categorías para saber en qué lo gasta.</p>
              </div>
            </div>
            <span id="line"/>
            <div className="right cardsContainer">
              <div className="card">
                <b>2021</b>
                <span>Golden Duck</span>
                <p>Una banca online donde podrá, no solo gestionar su dinero, sino que incluso invertirlo. Siempre llevando un registro de cuanto dinero es ingresado y cuanto dinero es gastado, contando con categorías para saber en qué lo gasta.</p>
              </div>
              <div className="card">
                <b>2021</b>
                <span>Golden Duck</span>
                <p>Una banca online donde podrá, no solo gestionar su dinero, sino que incluso invertirlo. Siempre llevando un registro de cuanto dinero es ingresado y cuanto dinero es gastado, contando con categorías para saber en qué lo gasta.</p>
              </div>
            </div>
          </div>
          <Points href={props.index} step={4}/>
        </div>
      </section>
    );
  }
  
  export default Projects;