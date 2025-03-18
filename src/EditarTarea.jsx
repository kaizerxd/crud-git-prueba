// EditarTarea.js
import React, { useState } from 'react';

const EditarTarea = ({ tarea, editarTarea }) => {
  const [nuevoTitulo, setNuevoTitulo] = useState(tarea.titulo);

  const manejarCambio = (e) => {
    setNuevoTitulo(e.target.value);
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (nuevoTitulo.trim()) {
      editarTarea(tarea.id, nuevoTitulo);
    }
  };

  return (
    <form onSubmit={manejarEnvio}>
      <input
        type="text"
        value={nuevoTitulo}
        onChange={manejarCambio}
        placeholder="Editar tarea"
      />
      <button type="submit">Guardar Cambios</button>
    </form>
  );
};

export default EditarTarea;
