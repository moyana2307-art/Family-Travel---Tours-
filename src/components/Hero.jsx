"use client";

import { motion } from "framer-motion";
import Button from "@/components/Button";
import { IMAGES } from "@/lib/data";

export default function Hero() {
  const scrollToContent = () => {
    const el = document.getElementById("hero-content");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="PrimaryHero">
      <div className="heroContainer">
        <div className="imageWrapper">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="heroImage"
            src={IMAGES.heroMain}
            alt="Victoria Falls landscape"
          />
        </div>

        <motion.div
          className="heroContent"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1>Africa&apos;s Wild Heart.</h1>
          <p className="heroDesc">
            Custom Safaris, just for You. Discover breathtaking landscapes,
            unforgettable wildlife, rich culture, and extraordinary adventures
            with Family Travel and Tours based in Victoria Falls, Zimbabwe.
          </p>
          <div className="heroActions">
            <Button href="/tours" variant="accent">
              Explore Our Tours
            </Button>
            <Button href="/contact" variant="outline">
              Book now
            </Button>
          </div>
        </motion.div>
      </div>

      <button className="heroScrollDown" onClick={scrollToContent} aria-label="Scroll down">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </button>
    </section>
  );
}
