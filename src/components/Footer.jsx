import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© Copyright Fahrschulen van de Loo</p>
        <nav className="footer-links" aria-label="Rechtliches">
          <a href="https://www.fahrschule-vandeloo.de/">Startseite</a>
          <a href="https://www.fahrschule-vandeloo.de/impressum-2/">Impressum</a>
          <a href="https://www.fahrschule-vandeloo.de/datenschutz/">Datenschutz</a>
        </nav>
      </div>
    </footer>
  );
}
