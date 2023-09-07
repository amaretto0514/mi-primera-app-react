import React from "react";
import "../hojas-de-estilo/Testimonio.css";

function Testimonio(props){
  return (
    <div className="contenedor-testimonio">
      <img className="imagen-testimonio"
      src={require(`../imagenes/testimonio-${props.imagen}.png`)} alt="Fotografia 1"/>

      <div className="contenedor-texto-testimonios">
        <p className="nombre-testimonios">
          <strong>{props.nombre}</strong> en {props.pais}
        </p>
        <p className="cargo-testimonio">
          {props.cargo} en <strong>{props.empresa}</strong>
        </p>
        <p className="texto-testimonio">
        "{props.testimonio}"

        </p>
      </div>
    </div>
  )
}

export default Testimonio;