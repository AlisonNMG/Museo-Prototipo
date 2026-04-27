import React from 'react';

const Modal = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div id="miModal" className="modal-custom" onClick={onClose}>
      <div className="modal-content-custom text-center" onClick={e => e.stopPropagation()}>
        <span className="close-btn" onClick={onClose}>&times;</span>
        <img id="imgModal" src={item.img} alt={item.nombre} className="img-fluid rounded mb-3" style={{ maxHeight: '300px' }} />
        <h2 id="tituloModal">{item.nombre}</h2>
        <h5 id="autorModal" className="text-success">{item.autor}</h5>
        <p id="descModal" className="text-muted">{item.desc}</p>
      </div>
    </div>
  );
};

export default Modal;
