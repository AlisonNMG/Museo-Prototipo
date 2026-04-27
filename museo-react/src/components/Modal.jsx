import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Modal = ({ item, onClose, onNext, onPrev }) => {
  return (
    <AnimatePresence>
      {item && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          id="miModal" 
          className="modal-custom" 
          onClick={onClose}
        >
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="modal-content-custom text-center position-relative" 
            onClick={e => e.stopPropagation()}
          >
            <span className="close-btn" onClick={onClose}>&times;</span>
            
            <div className="d-flex align-items-center justify-content-between gap-2 mb-3">
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="btn btn-dark rounded-circle border-0 shadow-sm d-none d-md-flex align-items-center justify-content-center"
                onClick={onPrev}
                style={{ width: '40px', height: '40px', minWidth: '40px' }}
              >
                &#10094;
              </motion.button>

              <div className="flex-grow-1 overflow-hidden">
                <motion.img 
                  key={item.img}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  src={item.img} 
                  alt={item.nombre} 
                  className="img-fluid rounded shadow-sm w-100" 
                  style={{ maxHeight: '400px', objectFit: 'contain' }} 
                />
              </div>

              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="btn btn-dark rounded-circle border-0 shadow-sm d-none d-md-flex align-items-center justify-content-center"
                onClick={onNext}
                style={{ width: '40px', height: '40px', minWidth: '40px' }}
              >
                &#10095;
              </motion.button>
            </div>

            {/* Controles móviles (solo visibles en pantallas pequeñas) */}
            <div className="d-flex d-md-none justify-content-center gap-4 mb-3">
              <button className="btn btn-outline-dark btn-sm rounded-pill px-3" onClick={onPrev}>&#10094; Anterior</button>
              <button className="btn btn-outline-dark btn-sm rounded-pill px-3" onClick={onNext}>Siguiente &#10095;</button>
            </div>

            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <h2 id="tituloModal" className="h3 mb-1">{item.nombre}</h2>
              <span className={`badge mb-3 ${item.tipo === 'obra' ? 'bg-primary' : 'bg-success'}`}>
                {item.tipo === 'obra' ? 'Obra de Arte' : 'Museo'}
              </span>
              <h5 id="autorModal" className="text-muted mb-3">{item.autor}</h5>
              <p id="descModal" className="text-secondary small px-md-4">{item.desc}</p>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
