import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer" id="contato">
      <div className="footer-content">
        <img src="/logos/logo-navbar.png" alt="Logo Edi do Açaí" className="footer-logo" />

        <div className="footer-links">
          <span>74 9 9982-2323 </span>
          <span>Edidoacaiescritorio@gmail.com</span>
          <div className="footer-socials">
            <img src="/img/insta.png" alt="" />
            <span><a href="https://www.instagram.com/edidoacai/">Edi do Açaí</a></span>
          </div>
        </div>

        <hr className="footer-divider" />

        <p className="footer-copy">© 2025 Bruno Santos. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
