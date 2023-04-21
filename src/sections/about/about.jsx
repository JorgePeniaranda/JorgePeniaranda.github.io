import Nav from '../../components/navbar/nav'
import Points from '../../components/points/points'
import './about.scss'
import Card from './components/card/card'

const About = props => {
    return (
      <section className="sections" id='About'>
        <h1>About me</h1>
        <div className='cardList'>
          <Card number={3} plus={true} text="Years Experience"/>
          <Card number={5} plus={true} text="Happy Clients"/>
          <Card number={10} plus={true} text="Projects"/>
          <Card number={72} text="Number of times I've forgotten a semicolon"/>
        </div>
        <div className="infoContainer">
          {/* <ul>
            <li><span>Full Name:</span> Jorge Peñaranda</li>
            <li><span>Age:</span> 17</li>
            <li><span>Birthday:</span> May 31, 2005</li>
            <li><span>Nationality:</span> Argentine</li>
            <li><span>Languages:</span> Spanish, English</li>
            <li><span>Education:</span> Currently in high school tech program for computer science.</li>
            <li><span>Email:</span> contact@jorgepeniaranda.com</li>
          </ul> */}
          <tbody>
            <tr>
              <td>Full Name</td>
              <td>:</td>
              <td>Jorge Peñaranda</td>
            </tr>
            <tr>
              <td>Age</td>
              <td>:</td>
              <td>17</td>
            </tr>
            <tr>
              <td>Birthday</td>
              <td>:</td>
              <td>May 31, 2005</td>
            </tr>
            <tr>
              <td>Nationality</td>
              <td>:</td>
              <td>Argentine</td>
            </tr>
            <tr>
              <td>Languages</td>
              <td>:</td>
              <td>Spanish, English</td>
            </tr>
            <tr>
              <td>Education</td>
              <td>:</td>
              <td>Currently in high school tech program for computer science.</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>:</td>
              <td>contacto@jorgepeniaranda.com</td>
            </tr>
          </tbody>
          <a href="https://linktr.ee/jorgepeniaranda" target='_blank' rel="noreferrer">More about me</a>
        </div>
        <Points href={props.index} step={2} lightMode={true}/>
      </section>
    );
  }
  
  export default About;