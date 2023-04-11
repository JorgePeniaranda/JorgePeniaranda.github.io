import Logo from './assets/img/logo.png'
import './nav.scss'

const main = param => {
    return (
      <nav className={(param.darkMode) ? 'dark' : ''}>
        <img src={Logo} className='logo' alt="Logo"/>
        <ul>
          <li><a href="#Main">Me</a></li>
          <li><a href="#Skills">Skills</a></li>
          <li><a href="#About">About me</a></li>
          <li><a href="#Projects">Projects</a></li>
          <li><a href="#Contact">Contact</a></li>
        </ul>
      </nav>
    );
  }
  
  export default main;