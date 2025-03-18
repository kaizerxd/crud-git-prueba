// AgregarTarea.js
import React, { useState } from 'react';

const AgregarTarea = ({ agregarTarea }) => {
  const [titulo, setTitulo] = useState('');

  const manejarCambio = (e) => {
    setTitulo(e.target.value);
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (titulo.trim()) {
      agregarTarea(titulo);
      setTitulo('');
    }
  };

  return (
    <form onSubmit={manejarEnvio}>
      <input
        type="text"
        value={titulo}
        onChange={manejarCambio}
        placeholder="Agregar nueva tarea"
      />
      <button type="submit">Agregar Tarea</button>
    </form>
  );
};

export default AgregarTarea;
