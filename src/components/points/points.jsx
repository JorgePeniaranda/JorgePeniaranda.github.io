import './points.scss'

const Points = param => {
    return (
      <div id='points' className={(param.lightMode) ? 'light' : ''}>
        <a href={param.href[0]} className="point" id={(param.step === 1) ? 'active' : ''}/>
        <div className="line"/>
        <a href={param.href[1]} className="point" id={(param.step === 2) ? 'active' : ''}/>
        <div className="line"/>
        <a href={param.href[2]} className="point" id={(param.step === 3) ? 'active' : ''}/>
        <div className="line"/>
        <a href={param.href[3]} className="point" id={(param.step === 4) ? 'active' : ''}/>
        <div className="line"/>
        <a href={param.href[4]} className="point" id={(param.step === 5) ? 'active' : ''}/>
      </div>
    );
  }
  
  export default Points;