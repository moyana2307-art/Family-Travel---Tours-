import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { IMAGES, DESTINATIONS } from "@/lib/data";

export const metadata = {
  title: "Destinations",
  description:
    "Discover incredible destinations across Zimbabwe and Southern Africa - Victoria Falls, Hwange National Park, Zambezi River, Chobe, Livingstone, and Matobo.",
};

export default function DestinationsPage() {
  return (
    <>
      <Navigation />

      <PageHero
        title="Destinations"
        subtitle="Discover incredible places to explore across Zimbabwe and Southern Africa."
        image={IMAGES.heroFalls}
      />

      {/* First destination — large featured */}
      <section className="links-block">
        <div className="container">
          <div className="links-grid">
            <Reveal>
              <div className="links-image-wrapper">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={DESTINATIONS[0]?.image || IMAGES.falls} alt={DESTINATIONS[0]?.name || "Victoria Falls"} style={{ height: "100%" }} />
              </div>
            </Reveal>
            <div className="links-content-wrapper">
              <Reveal>
                <span className="eyebrow">Top Destinations</span>
              </Reveal>
              {DESTINATIONS.map((dest, i) => (
                <Reveal key={dest.name} delay={i * 0.08}>
                  <div className={`links-item ${i === 0 ? "active" : ""}`}>
                    <span className="links-item-location">{dest.country}</span>
                    <span className="links-item-label">{dest.name}</span>
                    <span className="links-item-desc">{dest.description}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Destination cards grid */}
      <section className="section" style={{ background: "var(--color-cream)" }}>
        <div className="container">
          <Reveal>
            <h2 className="section-title section-title-center" style={{ marginBottom: "3rem" }}>
              Explore Every Corner
            </h2>
          </Reveal>
          <div className="dest-grid">
            {DESTINATIONS.map((dest, i) => (
              <Reveal key={dest.name} delay={(i % 3) * 0.08}>
                <div className="dest-card">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={dest.image} alt={dest.name} loading="lazy" />
                  <div className="dest-overlay" />
                  <div className="dest-info">
                    <p className="dest-country">{dest.country}</p>
                    <h3>{dest.name}</h3>
                    <p>{dest.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
