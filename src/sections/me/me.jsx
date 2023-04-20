import Nav from '../../components/navbar/nav'
import Points from '../../components/points/points'
import './me.scss'
import Profile from './assets/profilePhoto.png'
import Wave from './assets/wave.png' // Acá deberia haber un svg
import Linkedin from './assets/Linkedin.png'
import StackOverflow from './assets/StackOverflow.png'
import Instagram from './assets/Instagram.png'
import Github from './assets/Github.png'

const Me = props => {
    return (
      <section className="sections bg-color-1" id='Me'>
        <Nav href={props.index}/>
        <div className='container'>
          <div id='presentation'>
            <span><img src={Profile} alt="Jorge Peñaranda" /></span>
            <p>Hello, I’am <br/>Jorge<br/>Peñaranda<span>Web Developer</span></p>
          </div>
          <div id='media'>
            <a href="https://www.linkedin.com/in/JorgePeniaranda/"><img src={Linkedin} alt="Linkedin_icon" /></a>
            <a href="https://es.stackoverflow.com/users/323572/jorge-pe%c3%b1aranda"><img src={StackOverflow} alt="StackOverflow_icon" /></a>
            <a href="https://instagram.com/yoperoconinstagr4m?igshid=ZDdkNTZiNTM="><img src={Instagram} alt="Instagram_icon" /></a>
            <a href="https://github.com/jorgepeniaranda"><img src={Github} alt="Github_icon" /></a>
          </div>
          <Points href={props.index} step={1}/>
          <img src={Wave} alt="wave" id="wave"/>
        </div>
      </section>
    );
  }
  
  export default Me;