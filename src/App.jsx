import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Arte from './components/arteEstetica/arte';
import Home from './components/logoHome/Home';
// import './logoHome/Home.css';
import Header from './components/header/header';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Header/>} />
      <Route path="/Home" element={<Home />} />
      <Route path="/arte" element={<Arte />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App
