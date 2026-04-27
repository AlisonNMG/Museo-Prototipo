import React from 'react';
import Card from './Card';

const Gallery = ({ items, favorites, onToggleFavorite, onOpenModal, filter }) => {
  const getTitle = () => {
    switch (filter) {
      case 'museo': return "Nuestros Museos";
      case 'obra': return "Colecciones de Arte";
      case 'favoritos': return "Mis Favoritos ❤️";
      default: return "";
    }
  };

  return (
    <main id="contenido-principal" className="container mt-5 pt-5">
      <h2 className="text-center mb-4" id="titulo-seccion">{getTitle()}</h2>
      <div id="museos-container" className="row g-4">
        {items.length > 0 ? (
          items.map(item => (
            <Card 
              key={item.id} 
              item={item} 
              isFavorite={favorites.includes(item.id)}
              onToggleFavorite={onToggleFavorite}
              onOpenModal={onOpenModal}
            />
          ))
        ) : (
          <p className='text-center w-100'>No tienes favoritos aún. ❤️</p>
        )}
      </div>
    </main>
  );
};

export default Gallery;
