import Nav from '../../components/navbar/nav'
import Points from '../../components/points/points'
import $ from 'jquery';


function asdqawdw() {
  window.scroll({
    top: 0, 
    left: 0, 
    behavior: 'smooth' 
   });
  console.log("Asdas");
}

const main = () => {
    return (
      <section className="sections bg-color-5" id='Contact'>
        <Nav/>
        <button onClick={asdqawdw}>asdas</button>
        <Points step={5}/>
      </section>
    );
  }
  
  export default main;