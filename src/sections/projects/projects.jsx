import Nav from '../../components/navbar/nav'
import Points from '../../components/points/points'

const main = () => {
    return (
      <section className="sections bg-color-4" id='Projects'>
        <Nav darkMode={true}/>
        <Points darkMode={true} step={4}/>
      </section>
    );
  }
  
  export default main;