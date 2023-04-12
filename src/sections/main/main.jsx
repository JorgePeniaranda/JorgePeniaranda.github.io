import Nav from '../../components/navbar/nav'
import Points from '../../components/points/points'

const Main = () => {
    return (
      <section className="sections bg-color-1" id='Main'>
        <Nav/>
        <Points step={1}/>
      </section>
    );
  }
  
  export default Main;