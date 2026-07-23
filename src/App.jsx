import React, { useEffect, useMemo, useState, Suspense } from 'react';
import { useReducedMotion } from 'framer-motion';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import PathCards from './components/PathCards.jsx';
import PromoStripe from './components/PromoStripe.jsx';
import ClassesOverview from './components/ClassesOverview.jsx';
import Schedule from './components/Schedule.jsx';
import Contact from './components/Contact.jsx';
import Inclusion from './components/Inclusion.jsx';
import SubHeroPKW from './components/SubHeroPKW.jsx';
import AccordionPKW from './components/AccordionPKW.jsx';
import Cursor from './components/Cursor.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';

function useViewport() {
  const [w, setW] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  useEffect(() => {
    const onR = () => setW(window.innerWidth);
    window.addEventListener('resize', onR);
    return () => window.removeEventListener('resize', onR);
  }, []);
  return { width: w, isDesktop: w >= 992 };
}

export default function App() {
  const prefersReduced = useReducedMotion();
  const { isDesktop } = useViewport();

  // Smooth scroll for internal anchors
  useEffect(() => {
    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (a) {
        const id = a.getAttribute('href').slice(1);
        const el = document.getElementById(id);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth', block: 'start' });
        }
      }
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [prefersReduced]);

  const cursorEnabled = useMemo(() => true, []);

  return (
    <div className="app" id="home">
      <ScrollProgress reduced={prefersReduced} />
      {cursorEnabled && <Cursor reduced={prefersReduced} />}
      <Header reduced={prefersReduced} />
      <main>
        <Hero reduced={prefersReduced} desktop={isDesktop} />
        <PathCards reduced={prefersReduced} />
        <PromoStripe reduced={prefersReduced} />
        <ClassesOverview reduced={prefersReduced} />
        <section id="pkw" className="section section--dark section--first-pad-fix">
          <SubHeroPKW reduced={prefersReduced} />
        </section>
        <section className="section section--light">
          <AccordionPKW reduced={prefersReduced} />
        </section>
        <Schedule reduced={prefersReduced} />
        <Contact reduced={prefersReduced} />
        <Inclusion reduced={prefersReduced} />
        <section id="faq" className="section section--light">
          <div className="container">
            <div className="faq-card">
              <div className="faq-header">
                <i className="bi bi-question-circle" aria-hidden="true"></i>
                <h3>FAQ</h3>
              </div>
              <p>Antworten finden Sie auf der offiziellen Website.</p>
              <a className="btn btn-ghost" href="https://www.fahrschule-vandeloo.de/faq-marcel-van-de-loo/" target="_blank" rel="noopener noreferrer">
                Zur FAQ-Seite <i className="bi bi-box-arrow-up-right" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </section>
      </main>
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
    </div>
  );
}
