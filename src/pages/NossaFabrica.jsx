import React, { useState } from "react";
import "../styles/NossaFabrica.css";

const unidades = [
  {
    id: 1,
    cidade: "Senhor do Bonfim",
    funcionamento1: "Domingo à Quinta-Feira, 08:30 - 23:00",
    funcionamento2: "Sexta-Feira, 08:30 - 16:00",
    funcionamento3: "Sabado, 18:00 - 23:00",
    endereco: "Av. 2 de Julho - Centro",
    img: "/lojas/bonfim/bonfim.png",
    top: "30%",
    left: "58%",
  },
  {
    id: 2,
    cidade: "Santaluz",
    endereco: "Praça Maj. Benício Viana, 59 - Centro",
    funcionamento1: "Segunda-Feira à Quinta-Feira, 08:30 - 22:00",
    funcionamento2: "Sexta-Feira, 08:30 - 16:30",
    funcionamento3: "Sabado, 18:00 - 23:00",
    funcionamento4: "Domingo, 08:30 - 23:00",
    img: "/lojas/santa luz/santaluz.jpg",
    top: "39%",
    left: "63%",
  },
  {
    id: 3,
    cidade: "Capim Grosso",
    endereco: "Av. Antonio Carlos Magalhaes, 1452 - Centro",
    funcionamento1: "Segunda à Quinta-Feira, 08:30 - 22:00",
    funcionamento2: "Sexta-Feira, 08:30 - 16:30",
    funcionamento3: "Sabado, 18:00 - 23:00",
    funcionamento4: "Domingo , 08:30 - 23:00",
    img: "/LOJAS/CAPIM GROSSO/CapimGrosso.jpg",
    top: "42%",
    left: "58%",
  },
  {
    id: 4,
    cidade: "Jacobina",
    endereco: " R. J J Gouvêia, 58 - Missão",
    funcionamento1: "Segunda à Quinta-Feira, 08:30 - 22:00",
    funcionamento2: "Sexta-Feira, 08:30 - 16:30",
    funcionamento3: "Sabado, 18:00 - 23:00",
    funcionamento4: "Domingo , 08:30 - 23:00",
    img: "/img/jacobina.png",
    top: "40%",
    left: "53%",
  },
  {
    id: 5,
    cidade: "Salvador",
    endereco: "Av Almirete Marques De Leao,351-Barra",
    funcionamento1: "Segunda à Quinta-Feira, 08:30 - 21:00",
    funcionamento2: "Sexta-Feira, 08:30 - 16:30",
    funcionamento3: "Sabado, 18:00 - 22:00",
    funcionamento4: "Domingo , 08:30 - 22:00",
    img: "/lojas/salvador/salvador.jpg",
    top: "46%",
    left: "71%",
  },
];

const fabrica = [
  {
    id: 1,
    img: "/fabrica/02.jpg",
  },
  {
    id: 2,
    img: "/fabrica/06.jpg",
  },
  {
    id: 3,
    img: "/fabrica/09.jpg",
  },
  {
    id: 4,
    img: "/fabrica/04.jpg",
  },
  {
    id: 5,
    img: "/fabrica/01.jpg",
  },
  {
    id: 6,
    img: "/fabrica/03.jpg",
  },
  {
    id: 7,
    img: "/fabrica/07.jpg",
  },
  {
    id: 8,
    img: "/fabrica/08.jpg",
  },
  {
    id: 9,
    img: "/fabrica/05.jpg",
  },
]

function NossaFabrica() {
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [showLoja, setShowLoja] = useState(false);
  const [mapaAtivado, setMapaAtivado] = useState(false); // controla se foi ativado
  const [selected, setSelected] = useState(null);

  return (
    <div className="fabric-container" id="nossa-fabrica">
      <div className="fabric-banner">
        <img src="/img/folhas.png" alt="folhas" />
        <div className="fabric-banner-arara">
          <img src="/img/arara.png" alt="arara" />
        </div>
        <div className="fabric-banner-text">
          <h1>Nossa fábrica</h1>
          <h4>Onde tudo acontece!</h4>
        </div>
      </div>

      <div className="fabric-content">
        <div className="fabric-gallery-grid">
          {fabrica.map((fabrica) => (
            <div
              key={fabrica.id}
              className="fabric-gallery-item"
              onClick={() => setSelectedUnit(fabrica)}
            >
              <img src={fabrica.img} alt={fabrica.cidade} />
            </div>
          ))}
        </div>
        <div className="button">
        <button className="buttonn" onClick={() => window.location.href = "https://api.whatsapp.com/send?phone=5574999822323&text=Ol%C3%A1%2C%20Gostaria%20de%20Conhecer%20mais%20Sobre%20a%20Fabrica!"}>
            Veja Mais
          </button>
        </div>
      </div>

      <div className="fabric-map">
  <h2>Nossas <br /> Unidades</h2>
  <p className="subtitle-fabric">Conheça!!</p>
  <div className={`fabric-map-content ${selected ? "ativo" : ""}`}>
    
    <div className="map-container">
      <img src="/img/mapa.png" alt="Mapa da Bahia" className="map-image" />
      {unidades.map((unidade) => (
        <div
          key={unidade.id}
          className="map-point-wrapper"
          style={{ top: unidade.top, left: unidade.left }}
          onClick={() => setSelected(unidade)}
        >
          <span className="tooltip">{unidade.cidade}</span>
          <div className="map-point" >
          <span className="map-icon"><img src="/img/loja.png" alt="" /></span>
          </div>
        </div>
      ))}


    </div>

    {selected && (
  <div className="unit-card">
    <div className="unit-image">
      <img src={selected.img} alt={selected.cidade} />
    </div>
    <div className="unit-details">
      <h3>{selected.cidade}</h3>
      <p className="unit-address">{selected.endereco}</p>
      <ul className="unit-hours">
        {Object.keys(selected)
          .filter((key) => key.startsWith("funcionamento"))
          .map((key, index) => (
            <li key={index}>{selected[key]}</li>
          ))}
      </ul>
    </div>
  </div>
)}



  </div>
</div>


    </div>
  );
}

export default NossaFabrica;
