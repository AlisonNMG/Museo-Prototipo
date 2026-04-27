import React from 'react';

const Card = ({ item, isFavorite, onToggleFavorite, onOpenModal }) => {
  return (
    <div className="col-md-4">
      <div className="card h-100 shadow-sm">
        <img src={item.img} alt={item.nombre} onClick={() => onOpenModal(item)} />
        <div className="card-body text-center">
          <h3>{item.nombre}</h3>
          <p className="text-muted small">{item.autor}</p>
          <button 
            className="btn btn-outline-dark border-0 fs-3" 
            onClick={() => onToggleFavorite(item.id)}
          >
            {isFavorite ? '❤️' : '🤍'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
