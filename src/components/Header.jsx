import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'PKW & Motorrad', href: '#pkw' },
  { label: 'LKW, Bus & BKF', href: '#wege' },
  { label: 'Kurse & Termine', href: '#termine' },
  { label: 'Standorte & Kontakt', href: '#kontakt' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Anmelden', href: '#kontakt' }
];

export default function Header({ reduced }) {
  const [active, setActive] = useState('home');
  const [copied, setCopied] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const ids = ['home', 'pkw', 'wege', 'termine', 'kontakt', 'faq'];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setActive(e.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: 0.01 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const h = headerRef.current;
      if (!h) return;
      const sc = window.scrollY;
      h.classList.toggle('is-stuck', sc > 4);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navVariants = {
    initial: { opacity: 0, y: -12 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.45 } }
  };
  const linkStagger = {
    animate: reduced
      ? { transition: { staggerChildren: 0, delayChildren: 0 } }
      : { transition: { staggerChildren: 0.05, delayChildren: 0.1 } }
  };
  const linkChild = {
    initial: { opacity: 0, y: 6 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.28 } }
  };

  const copyPhone = async () => {
    try {
      await navigator.clipboard.writeText('02823 94 39 994');
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {}
  };

  return (
    <motion.header ref={headerRef} className="navbar glass fixed" variants={navVariants} initial="initial" animate="animate">
      <div className="container nav-inner">
        <motion.a href="#home" className="brand" initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }}>
          <span className="brand-mark">M</span>
          <span className="brand-text">Fahrschulen van de Loo</span>
        </motion.a>
        <motion.nav className="nav" aria-label="Hauptnavigation" variants={linkStagger} initial="initial" animate="animate">
          {NAV_ITEMS.map((item) => (
            <motion.a
              key={item.href}
              className={`nav-link${active === item.href.slice(1) ? ' is-active' : ''}`}
              href={item.href}
              variants={linkChild}
            >
              {item.label}
              <span className="underline" aria-hidden="true"></span>
            </motion.a>
          ))}
        </motion.nav>
        <div className="nav-utility" role="group" aria-label="Schnellzugriff">
          <button className="icon-btn" aria-label="Telefon Marcel (kopieren)" onClick={copyPhone}>
            <i className="bi bi-telephone" aria-hidden="true"></i>
          </button>
          <a className="icon-btn" aria-label="WhatsApp Marcel" href="https://wa.me/4928239439994" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-whatsapp" aria-hidden="true"></i>
          </a>
          <a className="btn btn-cta" href="#kontakt">Jetzt anmelden</a>
        </div>
      </div>
      <div className={`copy-toast${copied ? ' show' : ''}`} role="status" aria-live="polite">Nummer kopiert</div>
    </motion.header>
  );
}
