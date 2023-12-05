import { Link, useLocation } from 'react-router-dom';
import stag from '../assets/stag.png'


function Nav() {
  const currentPage = useLocation().pathname;
 
  return(
  <div>
    <nav className="navbar">
  <div className="container-fluid">
    
      <a className="navbar-brand" href="#"><img src={stag} id='stag'></img>StagCrest Creations</a>
        <li className="nav-link active"><Link to="/" className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>Home</Link></li>
        <li className="nav-link"><Link to="/About" className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}>About</Link></li>
        <li className="nav-link"><Link to="/Projects" className={currentPage === '/Projects' ? 'nav-link active' : 'nav-link'}>Projects</Link></li>
        <li className="nav-link"><Link to="/Contact" className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}>Contact</Link></li>
     </div>
</nav>
  </div>
  )}

  export default Nav
