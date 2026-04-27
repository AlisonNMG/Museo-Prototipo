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
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            className="modal-content-custom text-center position-relative" 
            onClick={e => e.stopPropagation()}
          >
            <span className="close-btn" onClick={onClose}>&times;</span>
            
            <div className="d-flex align-items-center justify-content-between mb-3">
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="btn btn-dark rounded-circle border-0 shadow-sm"
                onClick={onPrev}
                style={{ width: '45px', height: '45px', zIndex: 10 }}
              >
                &#10094;
              </motion.button>

              <div className="px-3" style={{ flex: 1 }}>
                <motion.img 
                  key={item.img}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  src={item.img} 
                  alt={item.nombre} 
                  className="img-fluid rounded shadow-sm" 
                  style={{ maxHeight: '400px', objectFit: 'contain' }} 
                />
              </div>

              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="btn btn-dark rounded-circle border-0 shadow-sm"
                onClick={onNext}
                style={{ width: '45px', height: '45px', zIndex: 10 }}
              >
                &#10095;
              </motion.button>
            </div>

            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
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
