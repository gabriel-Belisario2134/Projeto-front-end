import './App.css'
import Arte from './components/arteEstetica/arte';

function App() {
  return (
    <header className="header">
      <h1 className="logo"><img src='/imagens/logo.png'/><a href='#'></a></h1>
      <nav>
        <ul className="nav">
          <li><a href="#">Arte e Estetica</a></li>
          <li><a href="#">Pontos turisticos</a></li>
          <li><a href="#">Tradições e festivais</a></li>
          <li><a href="#">Culinaria</a></li>
          <li><a href="#">Cultura POP</a></li>
          <li><a href="#">Login</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default App
