import {Main, Skills, About, Projects, Contact} from './sections/index';
import './generalStyles/app.scss';

function App() {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
  return (
    <div className="App">
      <Main/>
      <About/>
    </div>
  );
}

export default App;
