import React from 'react';
import { motion } from 'framer-motion';

const cards = [
  {
    id: 'marcel',
    title: 'Fahrschule M. van de Loo',
    subtitle: 'Goch & Kleve-Unterstadt',
    offers: [
      'PKW & alle Motorradklassen (A1, A2, A, AM)',
      'Begleitetes Fahren (BF17)',
      'Intensivkurse möglich',
      'Erste-Hilfe: jeden Samstag 9–17 Uhr'
    ],
    border: 'cyan',
    contacts: [
      { type: 'phone', label: 'Tel. & WhatsApp in Goch: 02823 / 94 39 994', href: 'tel:+4928239439994' },
      { type: 'phone', label: 'Tel. Büro in Kleve: 02821 / 74 18 964', href: 'tel:+4928217418964' },
      { type: 'mail', label: 'fs-vandeloo@web.de', href: 'mailto:fs-vandeloo@web.de' }
    ],
    cta: { label: 'Zur Fahrschule', href: 'https://www.fahrschule-vandeloo.de/fahrschule-marcel-van-de-loo-neu/' }
  },
  {
    id: 'daniel',
    title: 'Fahrschule D. van de Loo',
    subtitle: 'Pfalzdorf & Kleve-Oberstadt',
    offers: [
      'PKW, LKW, Bus, Trecker & Anhänger (B bis CE)',
      'BKF, ADR, Gabelstapler',
      'Beschleunigte Grundqualifikation (BKrFQG)',
      'Zwei Standorte: Pfalzdorf & Kleve-Oberstadt'
    ],
    border: 'steel',
    contacts: [
      { type: 'phone', label: '02823 / 29790', href: 'tel:+49282329790' },
      { type: 'mail', label: 'd.info@fahrschule-vandeloo.de', href: 'mailto:d.info@fahrschule-vandeloo.de' }
    ],
    cta: { label: 'Zur Fahrschule', href: 'https://www.fahrschule-vandeloo.de/fahrschule-daniel-van-de-loo/' }
  }
];

export default function PathCards({ reduced }) {
  return (
    <section className="section section--dark" id="wege-cards">
      <div className="container">
        <div className="path-grid">
          {cards.map((c, idx) => (
            <motion.article
              key={c.id}
              className={`path-card ${c.border === 'cyan' ? 'border-cyan' : 'border-steel'}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45, ease: 'easeOut', delay: idx * 0.1 }}
            >
              <header className="path-head">
                <h3>{c.title}</h3>
                <p className="muted">{c.subtitle}</p>
              </header>
              <ul className="offer-list">
                {c.offers.map((o) => (
                  <li key={o}><i className="bi bi-check2"></i>{o}</li>
                ))}
              </ul>
              <div className="contact-block">
                {c.contacts.map((ct) => (
                  <a key={ct.label} href={ct.href} className="contact-link">
                    {ct.type === 'phone' && <i className="bi bi-telephone" aria-hidden="true"></i>}
                    {ct.type === 'mail' && <i className="bi bi-envelope" aria-hidden="true"></i>}
                    <span>{ct.label}</span>
                  </a>
                ))}
              </div>
              <div className="cta-wrap">
                <a className="btn btn-primary-red" target="_blank" rel="noopener noreferrer" href={c.cta.href}>{c.cta.label} <i className="bi bi-box-arrow-up-right"></i></a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
