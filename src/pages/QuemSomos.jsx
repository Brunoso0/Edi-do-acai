import React from "react";
import "../styles/Quem-somos.css";

function QuemSomos() {
  return (
    <div className="about-us" id="quem-somos">
      <h1>Quem Somos?</h1>
      <h5>Quem é Edi?</h5>
      <p>Ainda adolescente, o empresário Edicarlos morou no estado do Pará, onde conheceu o açaí. Em 2003, casou-se com a empresária Gideane e, em 2017, fundaram a empresa Edi do Açaí em Capim Grosso-BA.</p>

      <div className="about-us-cards">
        <div className="card-about-us card-1">
          <div className="card-icon">
            <img src="/img/pote.png" alt="Ícone tecnologia" />
          </div>
          <p>
            <strong>Desenvolver produtos saborosos para uma geração mais saudável</strong> com a mais alta tecnologia do mercado atual.
          </p>
        </div>

        <div className="card-about-us card-2">
          <div className="card-icon">
            <img src="/img/grafico.png" alt="Ícone crescimento" />
          </div>
          <p>
            Estamos percebendo que, nos últimos anos, tem crescido o número de pessoas com um estilo de vida saudável e exigentes na qualidade dos alimentos. Com isso, estamos a cada dia produzindo o melhor açaí do mercado. Esperamos ser reconhecidos pelos nossos clientes como o melhor açaí de todo o Brasil.
          </p>
        </div>

        <div className="card-about-us card-3">
          <div className="card-icon">
            <img src="/img/joinha.png" alt="Ícone qualidade" />
          </div>
          <p>
            <strong>Transparência, qualidade, colaboradores qualificados</strong>, respeito pelos consumidores e conformidade com as normas dos órgãos responsáveis.
          </p>
        </div>
      </div>
    </div>
  );
}

export default QuemSomos;