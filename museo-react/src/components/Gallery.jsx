import React from 'react';
import Card from './Card';
import { motion, AnimatePresence } from 'framer-motion';

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
      <motion.h2 
        key={filter}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-center mb-4" 
        id="titulo-seccion"
      >
        {getTitle()}
      </motion.h2>
      <div id="museos-container" className="row g-4">
        <AnimatePresence mode='popLayout'>
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
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className='text-center w-100'
            >
              No se encontraron resultados. ❤️
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
};

export default Gallery;
