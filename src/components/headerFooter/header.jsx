import { Outlet, Link } from "react-router-dom";
import './header.css'

const Header = () => {
    return (
        <header className="header">
       <h1 className="logo">
        <Link to="/home">
          <img src='/imagens/logo.png' alt="Logo" />
        </Link>
      </h1>
      <nav>
        <ul className="nav">
          <li><Link to="/arte">Arte e Estetica</Link></li>
          <li><Link to="/pontosturisticos">Pontos turisticos</Link></li>
          <li><Link to="/tradicoesFestivais">Tradições e festivais</Link></li>
          <li><Link to="/culinaria">Culinaria</Link></li>
          <li><Link to="/login">Fórum</Link></li>
        </ul>
      </nav>
    </header>
    );
}

export default Header