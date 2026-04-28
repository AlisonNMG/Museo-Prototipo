import React, { useState } from 'react';

const Navbar = ({ onFilter, onHome, filter, favoritesCount }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (action) => {
    action();
    setIsOpen(false); // Cierra el menú al hacer click en un link
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" href="#" onClick={() => handleNavClick(onHome)}>🏛️ Bogotá Virtual</a>
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="navbarNav" 
          aria-expanded={isOpen} 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className={`nav-link ${!filter ? 'active' : ''}`} href="#" onClick={() => handleNavClick(onHome)}>Inicio</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${filter === 'museo' ? 'active' : ''}`} href="#" onClick={() => handleNavClick(() => onFilter('museo'))}>Museos</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${filter === 'obra' ? 'active' : ''}`} href="#" onClick={() => handleNavClick(() => onFilter('obra'))}>Obras de Arte</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link text-warning ${filter === 'favoritos' ? 'active' : ''}`} href="#" onClick={() => handleNavClick(() => onFilter('favoritos'))}>
                Favoritos ❤️ (<span id="fav-count-nav">{favoritesCount}</span>)
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contacto" onClick={() => setIsOpen(false)}>Contáctanos</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
