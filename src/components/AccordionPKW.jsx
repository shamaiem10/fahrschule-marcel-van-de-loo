import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ITEMS = [
  { key: 'am', title: 'Klasse AM' },
  { key: 'a1', title: 'Klasse A1' },
  { key: 'a2', title: 'Klasse A2' },
  { key: 'a', title: 'Klasse A' },
  { key: 'b_bf17', title: 'Klasse B/BF17' },
  { key: 'be', title: 'Klasse BE' }
];

export default function AccordionPKW({ reduced }) {
  const [open, setOpen] = useState(() => localStorage.getItem('pkw_open') || 'b_bf17');
  useEffect(() => { localStorage.setItem('pkw_open', open); }, [open]);

  return (
    <div className="container accordion">
      {ITEMS.map((it) => {
        const isOpen = open === it.key;
        return (
          <div key={it.key} className={`acc-item${isOpen ? ' open' : ''}`}>
            <button className="acc-header" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? '' : it.key)}>
              <div className="left">
                <i className="bi bi-collection" aria-hidden="true"></i>
                <span>{it.title}</span>
              </div>
              <i className={`bi bi-chevron-down chevron${isOpen ? ' rot' : ''}`} aria-hidden="true"></i>
            </button>
            <motion.div
              className="acc-panel"
              initial={false}
              animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
              transition={{ duration: reduced ? 0 : 0.28, ease: 'easeOut' }}
            >
              <div className="panel-inner">
                <ul className="panel-list">
                  <li><i className="bi bi-check2"></i> Theorie: Mo. – Do. 19:00 – 20:30 Uhr (Goch & Kleve-Unterstadt)</li>
                  <li><i className="bi bi-check2"></i> Erste-Hilfe: jeden Samstag 9–17 Uhr</li>
                  <li><i className="bi bi-check2"></i> Beratung: <a href="tel:+4928239439994">02823 / 94 39 994</a></li>
                </ul>
              </div>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
