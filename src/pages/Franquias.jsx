import React from "react";
import "../styles/Franquias.css";

function Franquias() {
  return (
    <div id="franquias">
      <div className="franquia-container">
        <div className="franquia-banner">
          <img src="/img/edi-banner.png" alt="franquia" />
          <div className="franquia-content-text">
            <h1>
              SEJA UM <br />FRANQUEADO <br /> OU REVENDEDOR!
            </h1>
            <h4>Você também!</h4>
            <button
              onClick={() =>
                window.location.href =
                  "https://api.whatsapp.com/send?phone=5574999822323&text=Ol%C3%A1%20gostaria%20de%20ser%20um%20Franqueado!!%20%F0%9F%98%80%F0%9F%98%8B"
              }
            >
              Entre em Contato!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Franquias;
