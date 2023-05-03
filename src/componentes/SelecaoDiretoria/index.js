import React from 'react';
import './SelecaoDiretoria.css';

const SelecaoDiretoria = ({ times, obrigatorio, valor, aoAlterado }) => {
  return (
    <div className="lista-suspensa">
      <select required={obrigatorio} value={valor} onChange={(evento) => aoAlterado(evento.target.value)}>
        <option />
        {times.map((time) => (
          <option key={time}>{time}</option>
        ))}
      </select>
    </div>
  );
};

export default SelecaoDiretoria;
