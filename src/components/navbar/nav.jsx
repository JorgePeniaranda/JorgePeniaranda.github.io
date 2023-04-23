import Logo from '../../assets/img/logo.svg'
import './nav.scss'

const Navbar = param => {
  return (
    <nav className={(param.lightMode) ? 'light' : ''}>
      <div id='img'>
        <img src={Logo} className='logo' alt="Logo"/>
      </div>
      <ul>
        <li><a href={param.href[0]}>Me</a></li>
        <li><a href={param.href[1]}>About me</a></li>
        <li><a href={param.href[2]}>Skills</a></li>
        <li><a href={param.href[3]}>Projects</a></li>
        <li><a href={param.href[4]}>Contact</a></li>
      </ul>
    </nav>
  );
  }
  
  export default Navbar;