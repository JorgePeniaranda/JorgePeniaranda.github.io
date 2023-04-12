import './points.scss'

const points = param => {
    return (
      <div id='points' className={(param.darkMode) ? 'dark' : ''}>
        <div className="point" id={(param.step === 1) ? 'active' : ''}/>
        <div className="line"/>
        <div className="point" id={(param.step === 2) ? 'active' : ''}/>
        <div className="line"/>
        <div className="point" id={(param.step === 3) ? 'active' : ''}/>
        <div className="line"/>
        <div className="point" id={(param.step === 4) ? 'active' : ''}/>
        <div className="line"/>
        <div className="point" id={(param.step === 5) ? 'active' : ''}/>
      </div>
    );
  }
  
  export default points;