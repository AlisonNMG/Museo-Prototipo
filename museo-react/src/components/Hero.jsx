import React from 'react';

const Hero = ({ onExplore }) => {
  return (
    <section id="inicio" className="hero-section d-flex align-items-center justify-content-center text-center text-white">
      <div className="container">
        <h1 className="display-1 fw-bold">Bogotá es Arte</h1>
        <p className="fs-4 mb-4">Descubre la riqueza cultural de la capital.</p>
        <button className="btn btn-success btn-lg px-5 py-3 rounded-pill shadow" onClick={onExplore}>
          Explorar Museos Ahora
        </button>
      </div>
    </section>
  );
};

export default Hero;
