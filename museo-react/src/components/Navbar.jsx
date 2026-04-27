import React from 'react';

const Navbar = ({ onFilter, onHome, filter, favoritesCount }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" href="#" onClick={onHome}>🏛️ Bogotá Virtual</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item"><a className={`nav-link ${!filter ? 'active' : ''}`} href="#" onClick={onHome}>Inicio</a></li>
            <li className="nav-item"><a className={`nav-link ${filter === 'museo' ? 'active' : ''}`} href="#" onClick={() => onFilter('museo')}>Museos</a></li>
            <li className="nav-item"><a className={`nav-link ${filter === 'obra' ? 'active' : ''}`} href="#" onClick={() => onFilter('obra')}>Obras de Arte</a></li>
            <li className="nav-item">
              <a className={`nav-link text-warning ${filter === 'favoritos' ? 'active' : ''}`} href="#" onClick={() => onFilter('favoritos')}>
                Favoritos ❤️ (<span id="fav-count-nav">{favoritesCount}</span>)
              </a>
            </li>
            <li className="nav-item"><a className="nav-link" href="#contacto">Contáctanos</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
