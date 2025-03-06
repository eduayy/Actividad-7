import React from 'react';
import { Link } from 'react-router-dom';
import './menu.css';

function Menu() {
  return (
    <div className="Home">
      <header className="Header">
        <nav className="NavBar">
          <ul className="NavList NavList-left">
            <li className="NavItem"><Link to="/estudiantes">Estudiantes</Link></li>
            <li className="NavItem"><Link to="/investigadores">Investigadores</Link></li>
            <li className="NavItem"><Link to="/herramientas">Herramientas</Link></li>
            <li className="NavItem"><Link to="/proyectos">Proyectos</Link></li>
          </ul>
          <ul className="NavList NavList-right">
            <li className="NavItem"><Link to="/">Cerrar Sesión</Link></li>
          </ul>
        </nav>
      </header>
      <main className="MainContent">
        <h1>Bienvenidos a la Página de Inicio</h1>
        <p>Explora nuestras opciones en el menú para más información.</p>
      </main>
    </div>
  );
}

export default Menu;
