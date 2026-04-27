import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ nombre: '', email: '' });
  const [errors, setErrors] = useState({ nombre: false, email: false });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const newErrors = {
      nombre: formData.nombre.length < 3,
      email: !regexEmail.test(formData.email)
    };

    setErrors(newErrors);

    if (!newErrors.nombre && !newErrors.email) {
      setSuccess(true);
      setFormData({ nombre: '', email: '' });
      setTimeout(() => setSuccess(false), 3000);
    }
  };

  return (
    <section id="contacto" className="my-5 p-4 bg-white rounded shadow-sm">
      <div style={{ maxWidth: '500px', margin: '0 auto', textAlign: 'center' }}>
        <h2>📩 Contáctanos</h2>
        <form id="form-contacto" className="mt-4 text-start" style={{ maxWidth: '500px', margin: 'auto' }} onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Nombre completo</label>
            <input 
              type="text" 
              id="nombre" 
              className="form-control" 
              placeholder="Ej: Juan Pérez" 
              value={formData.nombre}
              onChange={handleChange}
            />
            {errors.nombre && <div id="error-nombre" className="text-danger small">Mínimo 3 caracteres.</div>}
          </div>
          <div className="mb-3">
            <label className="form-label">Correo Electrónico</label>
            <input 
              type="email" 
              id="email" 
              className="form-control" 
              placeholder="correo@ejemplo.com" 
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <div id="error-email" className="text-danger small">Email inválido.</div>}
          </div>
          <button type="submit" className="btn btn-dark w-100 rounded-pill py-2">Enviar Mensaje</button>
        </form>
        {success && <div id="mensaje-exito" className="mt-3 text-success fw-bold">¡Mensaje enviado con éxito!</div>}
      </div>
    </section>
  );
};

export default ContactForm;
