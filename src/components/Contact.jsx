import React from 'react';
import { motion } from 'framer-motion';

const CONTACTS = [
  {
    title: 'Goch',
    lines: ['Steinstraße 2 / Am Markt', '47574 Goch'],
    phone: { label: '02823 / 94 39 994', href: 'tel:+4928239439994' },
    whatsapp: { label: 'WhatsApp 02823 / 94 39 994', href: 'https://wa.me/4928239439994' },
    email: { label: 'fs-vandeloo@web.de', href: 'mailto:fs-vandeloo@web.de' }
  },
  {
    title: 'Kleve-Unterstadt',
    lines: ['Briener Str. 14 / XOX-Gelände', '47533 Kleve-Unterstadt'],
    phone: { label: '02821 / 74 18 964', href: 'tel:+4928217418964' },
    email: { label: 'fs-vandeloo@web.de', href: 'mailto:fs-vandeloo@web.de' }
  },
  {
    title: 'Pfalzdorf',
    lines: ['Kuhstraße 90', '47574 Goch-Pfalzdorf'],
    phone: { label: '02823 / 29790', href: 'tel:+49282329790' },
    email: { label: 'd.info@fahrschule-vandeloo.de', href: 'mailto:d.info@fahrschule-vandeloo.de' }
  },
  {
    title: 'Kleve-Oberstadt',
    lines: ['Römerstraße 8', '47533 Kleve-Oberstadt'],
    phone: { label: '02823 / 29790', href: 'tel:+49282329790' },
    email: { label: 'd.info@fahrschule-vandeloo.de', href: 'mailto:d.info@fahrschule-vandeloo.de' }
  }
];

export default function Contact({ reduced }) {
  return (
    <section className="section section--light" id="kontakt">
      <div className="container">
        <h3 className="section-title dark">Standorte & Kontakt</h3>
        <div className="contact-grid">
          {CONTACTS.map((c, i) => (
            <motion.article
              key={c.title}
              className="contact-card"
              initial={{ opacity: 0, x: i === 0 ? -12 : i === 3 ? 12 : 0, y: i === 1 || i === 2 ? 12 : 0 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.28 }}
            >
              <h4>{c.title}</h4>
              <p className="address" onClick={() => navigator.clipboard && navigator.clipboard.writeText(c.lines.join(', '))}>
                <i className="bi bi-geo-alt" aria-hidden="true"></i>
                <span>{c.lines[0]}<br />{c.lines[1]}</span>
              </p>
              <div className="actions">
                {c.phone && (
                  <a className="btn btn-outline" href={c.phone.href}><i className="bi bi-telephone"></i>{c.phone.label}</a>
                )}
                {c.whatsapp && (
                  <a className="btn btn-outline" href={c.whatsapp.href} target="_blank" rel="noopener noreferrer"><i className="bi bi-whatsapp"></i>{c.whatsapp.label}</a>
                )}
                {c.email && (
                  <a className="btn btn-outline" href={c.email.href}><i className="bi bi-envelope"></i>{c.email.label}</a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
        <div className="map-placeholder" aria-hidden="true">
          <div className="map-inner">Karte</div>
        </div>
      </div>
    </section>
  );
}
