import React from "react";
import "./Components.css"



const EventModal = ({evento, onClose}) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{evento.title}</h2>
        <p>{evento.desc}</p>
        <p>Inicio: {evento.start.toString()}</p>
        <p>Fin: {evento.end.toString()}</p>
        <button onClick={onClose}> Fechar </button>
      </div>

    </div>
  )
}

export default EventModal;