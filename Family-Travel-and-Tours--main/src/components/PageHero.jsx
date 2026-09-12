"use client";

import { motion } from "framer-motion";

export default function PageHero({ title, subtitle, image }) {
  return (
    <section className="page-hero">
      <div className="heroContainer">
        <div className="imageWrapper">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="pageHeroImage"
            src={image}
            alt={title}
          />
        </div>

        <div className="heroContent">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1>{title}</h1>
            {subtitle && <p className="heroSubtitle">{subtitle}</p>}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
