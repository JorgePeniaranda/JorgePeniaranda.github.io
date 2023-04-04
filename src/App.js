import {Main, Skills, About, Projects, Contact} from './sections/index';
import './generalStyles/app.css';

function App() {
  return (
    <div className="App">
      <Main/>
      <Skills/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
