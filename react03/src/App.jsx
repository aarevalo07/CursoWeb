import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Inicio from './pages/Inicio'
import Laptops from './pages/Laptops'
import Movil from './pages/Movil'
import Tienda from './pages/Tienda'
import Detalle from './pages/Detalle'

const App = () => {

  const actualizarLink = () => {
    const links = document.querySelectorAll('.nav-link');

    links.forEach(link => {
      link.addEventListener('click', () => {
        // Remover clase 'active' de todos los enlaces
        links.forEach(l => l.className.remove('active'));
        // Agregar clase 'active' solo al enlace clickeado
        link.className.add('active');
      });
    });
  };


  useEffect(() => {
    //actualizarLink();
  }, []);

  return (
    <BrowserRouter>
      <div className="app">
        <Header />

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/movil" element={<Movil />} />
          <Route path="/laptops" element={<Laptops />} />
          <Route path="/tienda" element={<Tienda />} />
          <Route path="/detalle/:id/:title" element={<Detalle />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App