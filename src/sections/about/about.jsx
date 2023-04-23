import Points from '../../components/points/points'
import './about.scss'
import Card from './components/card/card'
import { Fade, Flip } from 'react-reveal';

const About = props => {
    return (
      <section className="sections" id='About'>
        <h1>About me</h1>
        <div className="infoContainer">
          <table>
            <tbody>
              <tr>
                <Flip left><td>Full Name</td></Flip>
                <td>:</td>
                <Fade delay={400}><td>Jorge Peñaranda</td></Fade>
              </tr>
              <tr>
                <Flip left><td>Age</td></Flip>
                <td>:</td>
                <Fade delay={400}><td>17</td></Fade>
              </tr>
              <tr>
                <Flip left><td>Birthday</td></Flip>
                <td>:</td>
                <Fade delay={400}><td>May 31, 2005</td></Fade>
              </tr>
              <tr>
                <Flip left><td>Nationality</td></Flip>
                <td>:</td>
                <Fade delay={400}><td>Argentine</td></Fade>
              </tr>
              <tr>
                <Flip left><td>Languages</td></Flip>
                <td>:</td>
                <Fade delay={400}><td>Spanish, English</td></Fade>
              </tr>
              <tr>
                <Flip left><td>Education</td></Flip>
                <td>:</td>
                <Fade delay={400}><td>Currently in high school tech program for computer science</td></Fade>
              </tr>
              <tr>
                <Flip left><td>Email</td></Flip>
                <td>:</td>
                <Fade delay={400}><td>contacto@jorgepeniaranda.com</td></Fade>
              </tr>
            </tbody>
          </table>
          <Fade bottom>
            <a href="https://linktr.ee/jorgepeniaranda" target='_blank' rel="noreferrer">More about me</a>
          </Fade>
        </div>
        <div className='cardList'>
          <Card number={3} plus={true} text="Years Experience"/>
          <Card number={5} plus={true} text="Happy Clients"/>
          <Card number={10} plus={true} text="Projects"/>
          <Card number={72} text="Number of times I've forgotten a semicolon"/>
        </div>
        <Points href={props.index} step={2} lightMode/>
      </section>
    );
  }
  
  export default About;