import Nav from '../../components/navbar/nav'
import Points from '../../components/points/points'
import './me.scss'
/* import Profile from './assets/profilePhoto.png' */
import Linkedin from './assets/Linkedin.svg'
import StackOverflow from './assets/StackOverflow.svg'
import Instagram from './assets/Instagram.svg'
import Github from './assets/Github.svg'
import { Flip, Bounce, Fade } from 'react-reveal'
import Pulse from 'react-reveal/Pulse';

const Me = props => {
    return (
      <section className="sections" id='Me'>
        <Nav href={props.index}/>
        <div className='container'>
          <div id='presentation'>
            <Bounce top><span><img src="https://i.pinimg.com/564x/5d/32/47/5d3247875e2ca9b0cb7c915172c4cc10.jpg" alt="Jorge Peñaranda" /></span></Bounce>
            <Fade top><p>Hello, I’am <br/>Jorge<br/>Peñaranda<Pulse delay={700} duration={500}><span>Web Developer</span></Pulse></p></Fade>
          </div>
          <div id='media'>
            <Flip right delay={300}><a href="https://www.linkedin.com/in/JorgePeniaranda/" target='_blank' rel="noreferrer"><img src={Linkedin} alt="Linkedin_icon" /></a></Flip>
            <Flip right delay={250}><a href="https://es.stackoverflow.com/users/323572/jorge-pe%c3%b1aranda" target='_blank' rel="noreferrer"><img src={StackOverflow} alt="StackOverflow_icon" /></a></Flip>
            <Flip right delay={200}><a href="https://instagram.com/yoperoconinstagr4m?igshid=ZDdkNTZiNTM=" target='_blank' rel="noreferrer"><img src={Instagram} alt="Instagram_icon" /></a></Flip>
            <Flip right><a href="https://github.com/jorgepeniaranda" target='_blank' rel="noreferrer"><img src={Github} alt="Github_icon" /></a></Flip>
          </div>
          <Points href={props.index} step={1}/>
          <div id="wave">
            <svg width="1920" preserveAspectRatio="none" height="178" viewBox="0 0 1920 178" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M-5 82L59.1667 98C123.333 114 251.667 146 380 140.7C508.333 135 636.667 93 765 92.7C893.333 93 1021.67 135 1150 119.3C1278.33 103 1406.67 29 1535 7.29998C1663.33 -14 1791.67 18 1855.83 34L1920 50V178H1855.83C1791.67 178 1663.33 178 1535 178C1406.67 178 1278.33 178 1150 178C1021.67 178 893.333 178 765 178C636.667 178 508.333 178 380 178C251.667 178 123.333 178 59.1667 178H-5V82Z" fill="#0A0A0A"/>
            </svg>
          </div>
        </div>
      </section>
    );
  }
  
  export default Me;