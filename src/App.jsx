// App.js
import React, { useState } from 'react';
import AgregarTarea from './AgregarTarea';

const App = () => {
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (titulo) => {
    const nuevaTarea = { id: Date.now(), titulo };
    setTareas([...tareas, nuevaTarea]);
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <AgregarTarea agregarTarea={agregarTarea} />
      <ul>
        {tareas.map((tarea) => (
          <li key={tarea.id}>{tarea.titulo}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
