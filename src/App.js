/* import {Me, Skills, About, Projects, Contact} from './sections/index'; */
import {Me, About} from './sections/index';
import './generalStyles/app.scss';

function App() {
  const index = ["#Me", "#About", "#Skills", "#Projects", "#Contact"];
  return (
    <div className="App">
      <Me index={index}/>
      <About index={index}/>
    </div>
  );
}

export default App;
