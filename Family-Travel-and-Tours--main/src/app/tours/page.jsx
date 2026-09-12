import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import { IMAGES, TOURS } from "@/lib/data";

export const metadata = {
  title: "Tours & Experiences",
  description:
    "Discover unforgettable tours and experiences in Victoria Falls, Zimbabwe - from Victoria Falls experiences and Zambezi cruises to Hwange safaris and white water rafting.",
};

export default function ToursPage() {
  return (
    <>
      <Navigation />

      <PageHero
        title="Tours & Experiences"
        subtitle="From wildlife safaris to breathtaking adventures, discover unforgettable experiences across Victoria Falls, Zimbabwe, and Southern Africa."
        image={IMAGES.heroSafari}
      />

      <section className="section">
        <div className="container">
          {TOURS.map((tour, i) => (
            <div
              className="accordion-block-no-image"
              id={tour.slug}
              key={tour.slug}
              style={{
                padding: "2.5rem 1.5rem",
                marginBottom: i === TOURS.length - 1 ? 0 : "2rem",
              }}
            >
              <div className="cb-grid">
                <Reveal>
                  <div className="cb-image-col" style={{ minHeight: "18rem" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={tour.image} alt={tour.name} loading="lazy" />
                  </div>
                </Reveal>
                <Reveal delay={0.1}>
                  <div className="cb-text-col">
                    <span className="tag">{tour.tag}</span>
                    <h2 style={{ marginTop: "0.75rem" }}>{tour.name}</h2>
                    <p style={{ color: "var(--color-accent)", fontWeight: 700, fontSize: "0.875rem", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.75rem" }}>
                      {tour.lead}
                    </p>
                    <p>{tour.description}</p>
                    <p style={{ marginBottom: "1.5rem" }}>
                      <strong>Perfect for:</strong> {tour.perfectFor}
                    </p>
                    <Button href="/contact">Book This Experience</Button>
                  </div>
                </Reveal>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner image={IMAGES.zambezi} />

      <Footer />
    </>
  );
}
