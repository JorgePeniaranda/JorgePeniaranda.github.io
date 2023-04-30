import {Me, About, Skills, Projects, Contact} from './sections/index';
import Middle from './components/middleCard/middle';
import './generalStyles/app.scss';

function App() {
  const index = ["#Me", "#About", "#Skills", "#Projects", "#Contact"];
  return (
    <div className="App">
      <Me index={index}/>
      <About index={index}/>
      <Middle/>
      <Skills index={index}/>
      <Projects index={index}/>
      <Contact index={index}/>
    </div>
  );
}

export default App;
