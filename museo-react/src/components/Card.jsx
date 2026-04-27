import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ item, isFavorite, onToggleFavorite, onOpenModal }) => {
  return (
    <motion.div 
      className="col-md-4"
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
    >
      <div className="card h-100 shadow-sm border-0 overflow-hidden">
        <motion.img 
          src={item.img} 
          alt={item.nombre} 
          onClick={() => onOpenModal(item)}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          style={{ cursor: 'pointer' }}
        />
        <div className="card-body text-center">
          <h3 className="h5">{item.nombre}</h3>
          <p className="text-muted small mb-2">{item.autor}</p>
          <motion.button 
            className="btn btn-outline-dark border-0 fs-3" 
            onClick={() => onToggleFavorite(item.id)}
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
          >
            {isFavorite ? '❤️' : '🤍'}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
