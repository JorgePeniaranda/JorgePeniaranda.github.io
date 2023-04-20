import Nav from '../../components/navbar/nav'
import Points from '../../components/points/points'
import './main.scss'
import Profile from './assets/profilePhoto.png'
import Wave from './assets/wave.png' // Acá deberia haber un svg
import Linkedin from './assets/Linkedin.png'
import StackOverflow from './assets/StackOverflow.png'
import Instagram from './assets/Instagram.png'
import Github from './assets/Github.png'

const Main = () => {
    return (
      <section className="sections bg-color-1" id='Main'>
        <Nav/>
        <div className='container'>
          <div id='presentation'>
            <span><img src={Profile} alt="Jorge Peñaranda" /></span>
            <p>Hello, I’am <br/>Jorge<br/>Peñaranda<span>Web Developer</span></p>
          </div>
          <div id='media'>
            <img src={Linkedin} alt="Linkedin_icon" />
            <img src={StackOverflow} alt="StackOverflow_icon" />
            <img src={Instagram} alt="Instagram_icon" />
            <img src={Github} alt="Github_icon" />
          </div>
          <Points step={1}/>
          <img src={Wave} alt="wave" id="wave"/>
        </div>
      </section>
    );
  }
  
  export default Main;