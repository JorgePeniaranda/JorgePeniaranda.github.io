import Logo from './assets/img/logo.png'
import './nav.scss'

const Navbar = param => {
  return (
    <nav className={(param.lightMode) ? 'light' : ''}>
      <div id='img'>
        <img src={Logo} className='logo' alt="Logo"/>
      </div>
      <ul>
        <li><a href="#Main">Me</a></li>
        <li><a href="#About">About me</a></li>
        <li><a href="#Skills">Skills</a></li>
        <li><a href="#Projects">Projects</a></li>
        <li><a href="#Contact">Contact</a></li>
      </ul>
    </nav>
  );
  }
  
  export default Navbar;