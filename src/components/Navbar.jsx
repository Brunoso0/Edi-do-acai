import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="box-logo">
        <Link to="/">
          <img src="/logos/LOGO-NAVBAR.png" alt="Logo do Edi do Açaí" />
        </Link>
      </div>
      <div className="box-navbar-content">
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/quem-somos">Quem Somos</Link></li>
          <li><Link to="/nossa-fabrica">Nossa Fábrica</Link></li>
          <li><Link to="/produtos">Produtos</Link></li>
          <li><Link to="/franquias">Franquias</Link></li>
          <li><Link to="/contato">Contato</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;