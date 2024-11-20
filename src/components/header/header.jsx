import { Outlet, Link } from "react-router-dom";
import './header.css'

const Header = () => {
    return (
        <header className="header">
      <h1 className="logo"><img src='/imagens/logo.png'/><Link to="/Home"></Link></h1>
      <nav>
        <ul className="nav">
          <li><Link to="/arte">Arte e Estetica</Link></li>
          <li><Link to="/pontosturisticos">Pontos turisticos</Link></li>
          <li><Link to="">Tradições e festivais</Link></li>
          <li><Link to="">Culinaria</Link></li>
          <li><Link to="">Cultura POP</Link></li>
          <li><Link to="">Login</Link></li>
        </ul>
      </nav>
      {/* <Outlet />  */}
    </header>
    );
}

export default Header