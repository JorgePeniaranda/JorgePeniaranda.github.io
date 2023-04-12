import Nav from '../../components/navbar/nav'
import Points from '../../components/points/points'

const main = () => {
    return (
      <section className="sections bg-color-2" id='Skills'>
        <Nav/>
        <Points step={2}/>
      </section>
    );
  }
  
  export default main;