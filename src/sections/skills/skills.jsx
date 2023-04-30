import Points from '../../components/points/points'
import "./skills.scss"
import ProgressBar from 'react-animated-progress-bar';
import { Flip } from 'react-reveal'

const Skills = props => {
    return (
      <section id='Skills'>
        <h1>Skills</h1>
        <div className="container">
          <Flip right>
            <div className='endCont' id='frontEnd'>
              <h2>Front-End</h2>
              <div className="progressCont">
                <span>HTML</span>
                <span className='percentage'>70%</span>
                <ProgressBar rect percentage="70" rectBorderRadius/>
              </div>
              <div className="progressCont">
                <span>CSS</span>
                <span className='percentage'>60%</span>
                <ProgressBar rect percentage="60" rectBorderRadius/>
              </div>
              <div className="progressCont">
                <span>JAVASCRIPT</span>
                <span className='percentage'>80%</span>
                <ProgressBar rect percentage="80" rectBorderRadius/>
              </div>
              <div className="progressCont">
                <span>REACT</span>
                <span className='percentage'>70%</span>
                <ProgressBar rect percentage="70" rectBorderRadius/>
              </div>
            </div>
          </Flip>
          <Flip left>
            <div className='endCont' id='backEnd'>
              <h2>Back-End</h2>
              <div className="progressCont">
                <span>PHP</span>
                <span className='percentage'>60%</span>
                <ProgressBar rect percentage="60" rectBorderRadius/>
              </div>
              <div className="progressCont">
                <span>PHYTON</span>
                <span className='percentage'>30%</span>
                <ProgressBar rect percentage="30" rectBorderRadius/>
              </div>
              <div className="progressCont">
                <span>MYSQL</span>
                <span className='percentage'>45%</span>
                <ProgressBar rect percentage="45" rectBorderRadius/>
              </div>
              <div className="progressCont">
                <span>LARAVEL</span>
                <span className='percentage'>10%</span>
                <ProgressBar rect percentage="10" rectBorderRadius/>
              </div>
            </div>
          </Flip>
          <Points href={props.index} step={3} lightMode/>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1440 320">
          <path fill="0A0A0A" fill-opacity="1" d="M0,192L30,181.3C60,171,120,149,180,154.7C240,160,300,192,360,186.7C420,181,480,139,540,101.3C600,64,660,32,720,21.3C780,11,840,21,900,58.7C960,96,1020,160,1080,160C1140,160,1200,96,1260,64C1320,32,1380,32,1410,32L1440,32L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path>
        </svg>
      </section>
    );
  }
  
  export default Skills;
