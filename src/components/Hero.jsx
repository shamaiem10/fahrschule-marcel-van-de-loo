import React, { Suspense } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Scene3D from '../Scene3D.jsx';

export default function Hero({ reduced, desktop }) {
  const prefers = useReducedMotion();
  const should3D = desktop && !prefers && !reduced;

  return (
    <section className="hero section section--first-pad-fix" id="wege">
      <div className="hero-bg">
        <div className={`lane-markers${(reduced || prefers) ? ' paused' : ''}`}></div>
        <div className="diagonal left-tint"></div>
        <div className="diagonal right-tint"></div>
        {should3D && (
          <div className="hero-3d">
            <Suspense fallback={null}>
              <Scene3D />
            </Suspense>
          </div>
        )}
      </div>
      <div className="container hero-inner">
        <div className="hero-grid">
          <motion.div
            className="lane lane-left"
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <div className="lane-head">
              <i className="bi bi-car-front" aria-hidden="true"></i>
              <motion.h1
                className="hero-title"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                Zwei Spuren. Ein Ziel.
              </motion.h1>
              <motion.p className="hero-sub" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25, duration: 0.35 }}>
                Dein Führerschein in Goch & Kleve.
              </motion.p>
            </div>
            <div className="cta-row">
              <motion.a
                href="#pkw"
                className="btn btn-primary-red"
                whileHover={!reduced ? { scale: 1.03 } : {}}
                whileTap={{ scale: 0.98 }}
              >
                PKW & Motorrad starten
              </motion.a>
            </div>
          </motion.div>
          <motion.div
            className="lane lane-right"
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <div className="lane-head alt">
              <i className="bi bi-truck" aria-hidden="true"></i>
              <h2 className="hero-title alt">LKW • Bus • BKF</h2>
              <p className="hero-sub">Stark auf der rechten Spur.</p>
            </div>
            <div className="cta-row">
              <motion.a
                href="#kontakt"
                className="btn btn-outline-light"
                whileHover={!reduced ? { scale: 1.03 } : {}}
                whileTap={{ scale: 0.98 }}
              >
                LKW • Bus • BKF starten
              </motion.a>
            </div>
          </motion.div>
        </div>
        <div className="scroll-hint" aria-hidden="true">
          <i className="bi bi-chevron-down"></i>
        </div>
      </div>
    </section>
  );
}
