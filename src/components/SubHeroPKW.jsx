import React from 'react';
import { motion } from 'framer-motion';

export default function SubHeroPKW({ reduced }) {
  return (
    <div className="subhero">
      <div className="container subhero-grid">
        <div className="subhero-copy">
          <motion.h3 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} viewport={{ once: true, amount: 0.4 }}>
            PKW & Motorrad
          </motion.h3>
          <ul className="bullets">
            <li><i className="bi bi-check2"></i> Klassen: B/BF17, A1, A2, A, AM, BE</li>
            <li><i className="bi bi-check2"></i> Intensivkurse möglich</li>
            <li><i className="bi bi-check2"></i> NEU: Erste-Hilfe jeden Samstag 9–17 Uhr</li>
          </ul>
          <a href="#kontakt" className="btn btn-primary-red">Kontakt aufnehmen</a>
        </div>
        <div className="subhero-art" aria-hidden="true">
          <div className="gradient-portrait"></div>
        </div>
      </div>
    </div>
  );
}
