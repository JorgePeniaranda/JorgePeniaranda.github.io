import Nav from '../../components/navbar/nav'
import Points from '../../components/points/points'

const main = () => {
    return (
      <section className="sections bg-color-3" id='About'>
        <Nav/>
        <Points step={3}/>
      </section>
    );
  }
  
  export default main;