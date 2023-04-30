import Points from '../../components/points/points'
import "./skills.scss"
import ProgressBar from 'react-animated-progress-bar';

const Skills = props => {
    return (
      <section id='Skills'>
        <h1>Skills</h1>
        <div className="container">
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
          <Points href={props.index} step={3} lightMode/>
        </div>
      </section>
    );
  }
  
  export default Skills;
