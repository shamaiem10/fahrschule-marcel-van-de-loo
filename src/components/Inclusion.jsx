import React from 'react';
import { motion } from 'framer-motion';

export default function Inclusion({ reduced }) {
  return (
    <section className="section section--light" id="inklusion">
      <div className="container">
        <motion.div className="badge-card" initial={{ opacity: 0, y: 4 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.28 }}>
          <div className="badge-head">
            <i className="bi bi-universal-access" aria-hidden="true"></i>
            <h3>Inklusion — NRW Badge</h3>
          </div>
          <p>Das Miteinander von Menschen mit und ohne Behinderung stärken.</p>
          <a className="link-chip" href="https://www.mags.nrw/inklusionsscheck" target="_blank" rel="noopener noreferrer">
            Inklusionsscheck NRW <i className="bi bi-link-45deg" aria-hidden="true"></i>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
