import React from "react";
import "../styles/Franquias.css";

function Franquias() {
  return (
    <div>
      <div className="franquia-container">
        <div className="franquia-content">
          <div className="franquia-banner">
            <img src="/img/edi-banner.png" alt="franquia" />
          </div>
          <div className="franquia-content-text"> 
            <h1>SEJA UM <br />FRANQUEADO <br /> OU REVENDEDOR!</h1>
            <h4>Você também!</h4>
            <button>Entre em Contato!</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Franquias;