import React, { useState } from "react";
import { Link } from "react-scroll";
import { useMediaQuery } from "react-responsive";
import "../styles/Navbar.css";

function Navbar() {
  const isMobile = useMediaQuery({ maxWidth: 1024 }); // inclui tablets

  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => setMenuAberto(!menuAberto);
  const fecharMenu = () => setMenuAberto(false);

  return (
    <nav className="navbar">
      <div className="box-logo">
        <Link to="inicio" smooth={true} duration={1000} offset={-80} onClick={fecharMenu}>
          <img src="/logos/LOGO-NAVBAR.png" alt="Logo do Edi do Açaí" />
        </Link>
      </div>

      {isMobile && (
        <button className="menu-toggle" onClick={toggleMenu}>
          {menuAberto ? "✖" : "☰"}
        </button>
      )}

      <div className={`box-navbar-content ${isMobile && menuAberto ? "ativo" : ""}`}>
        <ul>
          {["inicio", "quem-somos", "nossa-fabrica", "produtos", "franquias", "contato"].map((id) => (
            <li key={id}>
              <Link
                to={id}
                smooth={true}
                duration={1000}
                offset={-80}
                onClick={fecharMenu}
              >
                {id.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
