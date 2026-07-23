import React from 'react';
import { motion } from 'framer-motion';

export default function Schedule({ reduced }) {
  return (
    <section className="section section--dark" id="termine">
      <div className="container schedule-grid">
        <motion.div className="schedule-card" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.35 }}>
          <div className="schedule-head">
            <i className="bi bi-calendar2-week" aria-hidden="true"></i>
            <h3>Theorieunterricht</h3>
          </div>
          <ul className="times">
            <li>
              <strong>Steinstraße 2 / Am Markt, Goch</strong>
              <span>Mo. – Do. 19:00 – 20:30 Uhr</span>
            </li>
            <li>
              <strong>Briener Str. 14, Kleve-Unterstadt</strong>
              <span>Mo. – Do. 19:00 – 20:30 Uhr</span>
            </li>
          </ul>
        </motion.div>
        <motion.div className="schedule-card" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.35, delay: 0.1 }}>
          <div className="schedule-head">
            <i className="bi bi-heart-pulse" aria-hidden="true"></i>
            <h3>Erste-Hilfe</h3>
          </div>
          <div className="firstaid">
            <span className="badge">Samstag</span>
            <span className="time">9–17 Uhr</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
