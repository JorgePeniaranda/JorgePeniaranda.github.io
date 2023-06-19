import Points from '../../components/points/points'
import './about.scss'
import { Fade } from 'react-reveal'
import CV from "./assets/Jorge Peñaranda - Curriculum Vitae.pdf"

const About = props => {
    return (
      <section className="sections" id='About'>
        <h1>About me</h1>
        <Fade right>
          <div className="infoContainer">
            <p>Hi, I'm Jorge Peñaranda, a passionate web developer focused on creating innovative solutions for my clients. I love teamwork and constantly improving my programming skills by learning from others. I'm always exploring new technologies and tools to offer high-quality services.</p>
            <table>
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>:</td>
                  <td>Jorge Peñaranda</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>:</td>
                  <td>contact@jorgepeniaranda.me</td>
                </tr>
                <tr>
                  <td>Birthday</td>
                  <td>:</td>
                  <td>May 31, 2005</td>
                </tr>
                <tr>
                  <td>Languages</td>
                  <td>:</td>
                  <td>Spanish, English</td>
                </tr>
                <tr>
                  <td>Education</td>
                  <td>:</td>
                  <td>Currently in high school tech program for computer science</td>
                </tr>
              </tbody>
            </table>
            <div className="buttons">
              <a id='more' href="https://linktr.ee/jorgepeniaranda" target='_blank' rel="noreferrer">More about me</a>
              <a id='cv' href={CV} download target='_blank' rel="noreferrer">Download CV</a>
            </div>
          </div>
        </Fade>
        <Fade left>
          <img src="https://i.pinimg.com/564x/5d/32/47/5d3247875e2ca9b0cb7c915172c4cc10.jpg" alt="Jorge Peñaranda" />
        </Fade>
        <Points href={props.index} step={2} lightMode/>
      </section>
    );
  }
  
  export default About;