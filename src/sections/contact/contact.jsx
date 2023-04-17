import Nav from '../../components/navbar/nav'
import Points from '../../components/points/points'
import $ from 'jquery';

const main = () => {
  $('#asdawd').on('click', function(){
    $(".sections").css("position", "relative");
    $('#Skills').get(0).scrollIntoView();
    $(".sections").css("position", "sticky").delay(200);
  });
  return (
    <section className="sections bg-color-5" id='Contact'>
      <Nav/>
      <button id='asdawd'>asdas</button>
      <Points step={5}/>
    </section>
  );
}
  
export default main;