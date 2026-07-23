import React from 'react';
import { motion } from 'framer-motion';

export default function PromoStripe({ reduced }) {
  return (
    <section className="promo-stripe" id="aktion">
      <motion.div
        className="promo-band"
        initial={{ x: -24, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
      >
        <div className="container promo-inner">
          <div className="promo-text">
            <i className="bi bi-lightning-charge" aria-hidden="true"></i>
            <h3>Aktion: Gratis-Fahrstunde im Porsche Taycan – bei Anmeldung.</h3>
          </div>
          <a href="#kontakt" className="btn btn-ghost-dark">Jetzt sichern</a>
        </div>
      </motion.div>
    </section>
  );
}
