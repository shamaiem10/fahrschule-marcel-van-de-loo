import React from 'react';
import { motion } from 'framer-motion';

const tiles = [
  { icon: 'bi-car-front', label: 'B/BF17' },
  { icon: 'bi-motorbike', label: 'A/AM' },
  { icon: 'bi-truck', label: 'LKW (C/CE)' },
  { icon: 'bi-bus-front', label: 'Bus (D)' },
  { icon: 'bi-tree', label: 'Trecker' },
  { icon: 'bi-truck-flatbed', label: 'Anhänger (BE)' }
];

export default function ClassesOverview({ reduced }) {
  return (
    <section className="section section--light" id="klassen">
      <div className="container">
        <motion.h3 className="section-title" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} viewport={{ once: true, amount: 0.3 }}>
          Klassenübersicht — Alles auf einen Blick
        </motion.h3>
        <div className="tiles">
          {tiles.map((t, i) => (
            <motion.div
              key={t.label}
              className="icon-tile"
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: 'spring', stiffness: 120, damping: 16, delay: i * 0.06 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <i className={`bi ${t.icon}`} aria-hidden="true"></i>
              <span>{t.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
