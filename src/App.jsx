// App.js
import React, { useState } from 'react';
import AgregarTarea from './AgregarTarea';
import EditarTarea from './EditarTarea';

const App = () => {
  const [tareas, setTareas] = useState([]);
  const [tareaEditando, setTareaEditando] = useState(null);

  const agregarTarea = (titulo) => {
    const nuevaTarea = { id: Date.now(), titulo };
    setTareas([...tareas, nuevaTarea]);
  };

  const eliminarTarea = (id) => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
    setTareas(tareasActualizadas);
  };

  const iniciarEdicion = (tarea) => {
    setTareaEditando(tarea);
  };

  const editarTarea = (id, nuevoTitulo) => {
    const tareasActualizadas = tareas.map(tarea => 
      tarea.id === id ? { ...tarea, titulo: nuevoTitulo } : tarea
    );
    setTareas(tareasActualizadas);
    setTareaEditando(null); // Cerrar el editor
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <AgregarTarea agregarTarea={agregarTarea} />
      {tareaEditando ? (
        <EditarTarea tarea={tareaEditando} editarTarea={editarTarea} />
      ) : null}
      <ul>
        {tareas.map((tarea) => (
          <li key={tarea.id}>
            {tarea.titulo}
            <button onClick={() => iniciarEdicion(tarea)}>Editar</button>
            <button onClick={() => eliminarTarea(tarea.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
