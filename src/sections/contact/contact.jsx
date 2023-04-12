import Nav from '../../components/navbar/nav'
import Points from '../../components/points/points'

const main = () => {
    return (
      <section className="sections bg-color-5" id='Contact'>
        <Nav/>
        <Points step={5}/>
      </section>
    );
  }
  
  export default main;