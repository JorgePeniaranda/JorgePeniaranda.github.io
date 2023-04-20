import {Me, Skills, About, Projects, Contact} from './sections/index';
import './generalStyles/app.scss';

function App() {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
  const index = ["#Me", "#About", "#Skills", "#Projects", "#Contact"];
  return (
    <div className="App">
      <Me index={index}/>
      <About index={index}/>
    </div>
  );
}

export default App;
