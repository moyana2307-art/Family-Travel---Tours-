import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import { IMAGES } from "@/lib/data";

export const metadata = {
  title: "Family Travel",
  description:
    "Adventures for the whole family. Our family experiences in Zimbabwe are designed to bring parents, children, grandparents, and loved ones closer together.",
};

const CHECK_ICON = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

const INCLUDES = [
  "Family-friendly tours",
  "Safari experiences",
  "Victoria Falls activities",
  "Cultural experiences",
  "Comfortable transportation",
  "Custom itineraries",
  "Group travel",
  "Holiday packages",
];

export default function FamilyTravelPage() {
  return (
    <>
      <Navigation />

      <PageHero
        title="Family Travel"
        subtitle="Adventures For The Whole Family"
        image={IMAGES.family}
      />

      {/* Content Block — imageLeft */}
      <section className="content-block">
        <div className="container">
          <div className="cb-grid">
            <Reveal>
              <div className="cb-image-col">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={IMAGES.group} alt="Family exploring Zimbabwe together" />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="cb-text-col">
                <h2>
                  Travel Should Bring <br />
                  <span className="italic">People Closer Together</span>
                </h2>
                <p>
                  Our family experiences are designed to give parents, children,
                  grandparents, and loved ones opportunities to explore, laugh,
                  discover, and create memories together.
                </p>
                <p>
                  Whether you&apos;re planning a weekend getaway or a longer African
                  adventure, we can help create an experience that works for your
                  family.
                </p>
                <div className="cb-cta">
                  <Button href="/contact">Plan a Family Trip</Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Includes — USP Block style */}
      <section className="usp-block" style={{ background: "var(--color-cream)" }}>
        <div className="container">
          <div className="usp-grid">
            <Reveal>
              <div className="usp-text">
                <h2>
                  Everything Your <br />
                  <span className="italic">Family Needs</span>
                </h2>
                <p>
                  From activities to transportation, we handle the details so your
                  family can focus on making memories.
                </p>
                <div style={{ marginTop: "2rem" }}>
                  <Button href="/custom-travel" variant="outline-dark">
                    Build Your Family Journey
                  </Button>
                </div>
              </div>
            </Reveal>

            <div className="usp-items">
              {INCLUDES.map((item, i) => (
                <Reveal key={item} delay={i * 0.05}>
                  <div className="usp-item">
                    <div className="usp-item-icon">{CHECK_ICON}</div>
                    <div className="usp-item-text">
                      <h4>{item}</h4>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
