import React from "react";
import "../styles/NossaFabrica.css";

function NossaFabrica() {
  return (
    <div className="fabric-container">
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
          <div className="fabric-gallery-item grid1-fabric">
            <img src="/images/img1.jpg" alt="Paisagem 1" />
          </div>
          <div className="fabric-gallery-item grid2-fabric">
            <img src="/images/img2.jpg" alt="Paisagem 2" />
          </div>
          <div className="fabric-gallery-item grid3-fabric">
            <img src="/images/img3.jpg" alt="Paisagem 3" />
          </div>
          <div className="fabric-gallery-item grid4-fabric">
            <img src="/images/img4.jpg" alt="Paisagem 4" />
          </div>
          <div className="fabric-gallery-item grid5-fabric">
            <img src="/images/img5.jpg" alt="Paisagem 5" />
          </div>
          <div className="fabric-gallery-item grid6-fabric">
            <img src="/images/img6.jpg" alt="Paisagem 6" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NossaFabrica;