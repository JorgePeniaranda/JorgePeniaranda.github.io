import Nav from '../../components/navbar/nav'
import Points from '../../components/points/points'
import './me.scss'
import Profile from './assets/profilePhoto.png'
import Wave from './assets/wave.png' // Acá deberia haber un svg
import Linkedin from './assets/Linkedin.png'
import StackOverflow from './assets/StackOverflow.png'
import Instagram from './assets/Instagram.png'
import Github from './assets/Github.png'
import { Flip, Bounce, Fade } from 'react-reveal'
import Pulse from 'react-reveal/Pulse';

const Me = props => {
    return (
      <section className="sections" id='Me'>
        <Nav href={props.index}/>
        <div className='container'>
          <div id='presentation'>
            <Bounce top><span><img src={Profile} alt="Jorge Peñaranda" /></span></Bounce>
            <Fade top><p>Hello, I’am <br/>Jorge<br/>Peñaranda<Pulse delay={700} duration={500}><span>Web Developer</span></Pulse></p></Fade>
          </div>
          <div id='media'>
            <Flip right delay={300}><a href="https://www.linkedin.com/in/JorgePeniaranda/" target='_blank' rel="noreferrer"><img src={Linkedin} alt="Linkedin_icon" /></a></Flip>
            <Flip right delay={250}><a href="https://es.stackoverflow.com/users/323572/jorge-pe%c3%b1aranda" target='_blank' rel="noreferrer"><img src={StackOverflow} alt="StackOverflow_icon" /></a></Flip>
            <Flip right delay={200}><a href="https://instagram.com/yoperoconinstagr4m?igshid=ZDdkNTZiNTM=" target='_blank' rel="noreferrer"><img src={Instagram} alt="Instagram_icon" /></a></Flip>
            <Flip right><a href="https://github.com/jorgepeniaranda" target='_blank' rel="noreferrer"><img src={Github} alt="Github_icon" /></a></Flip>
          </div>
          <Points href={props.index} step={1}/>
          <img src={Wave} alt="wave" id="wave"/>
        </div>
      </section>
    );
  }
  
  export default Me;