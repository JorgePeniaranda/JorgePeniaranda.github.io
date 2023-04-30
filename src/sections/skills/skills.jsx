import Points from '../../components/points/points'
import "./skills.scss"

const Skills = props => {
    return (
      <section id='Skills'>
        <div id='frontEnd'>
          <h2>Front-End</h2>
          <div className="progressBar">
            <span>html</span>
            <span className="progressbar"></span>
          </div>
          <div className="progressBar">
            <span>html</span>
            <span className="progressbar"></span>
          </div>
          <div className="progressBar">
            <span>html</span>
            <span className="progressbar"></span>
          </div>
          <div className="progressBar">
            <span>html</span>
            <span className="progressbar"></span>
          </div>
        </div>
        <div id='backEnd'>
          <h2>Back-End</h2>
          <div className="progressBar">
            <span>html</span>
            <span className="progressbar"></span>
          </div>
          <div className="progressBar">
            <span>html</span>
            <span className="progressbar"></span>
          </div>
          <div className="progressBar">
            <span>html</span>
            <span className="progressbar"></span>
          </div>
          <div className="progressBar">
            <span>html</span>
            <span className="progressbar"></span>
          </div>
        </div>
        <Points href={props.index} step={3}/>
      </section>
    );
  }
  
  export default Skills;
