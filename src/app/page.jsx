import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import CtaBanner from "@/components/CtaBanner";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import { IMAGES, TOURS, DESTINATIONS, TESTIMONIALS, COMPANY } from "@/lib/data";

export const metadata = {
  title: "Family Travel and Tours | Victoria Falls, Zimbabwe",
  description:
    "Explore Zimbabwe with the people you love. Discover breathtaking landscapes, unforgettable wildlife, and rich culture with Family Travel and Tours based in Victoria Falls, Zimbabwe.",
};

const WHY = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    title: "Local Knowledge",
    text: "We know Victoria Falls and understand what makes Zimbabwe special. Our local knowledge helps travelers discover unforgettable experiences.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    title: "Personalized Travel",
    text: "No two travelers are the same. We help create experiences that suit your interests, schedule, group, and budget.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Family Friendly",
    text: "Our experiences are designed to make traveling together easier, more enjoyable, and more memorable.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 17a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9l4-4h8l4 4v8a1 1 0 0 1-1 1h-5a1 1 0 0 0-1 1z" />
        <path d="M16 3l4 4" />
        <path d="M9 21h6" />
        <path d="M12 17v4" />
      </svg>
    ),
    title: "Reliable Service",
    text: "We believe that great travel begins with dependable service and careful planning.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title: "Unforgettable Experiences",
    text: "From waterfalls and wildlife to sunsets and cultural encounters, we help you experience the best of Zimbabwe.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M16.24 7.76l-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z" />
      </svg>
    ),
    title: "Your Journey, Your Way",
    text: "Whether you want adventure, relaxation, wildlife, culture, or a combination of everything, we create the right experience for you.",
  },
];

const STATS = [
  { number: "100+", label: "Happy travelers" },
  { number: "20+", label: "Unique experiences" },
  { number: "8+", label: "Years of experience" },
  { number: "100%", label: "Memorable trips" },
];

export default function HomePage() {
  return (
    <>
      <Navigation />

      <Hero />

      {/* Marquee strip */}
      <div className="marquee" id="hero-content">
        <div className="marquee-track">
          {[...Array(2)].map((_, dup) => (
            <span key={dup}>
              {["Safaris", "Victoria Falls", "Zambezi", "Family Holidays", "Adventure", "Wildlife", "Chobe", "Cultural Experiences"].map(
                (w) => (
                  <span key={`${dup}-${w}`}>
                    {w} <span style={{ color: "var(--color-accent)" }}>&bull;</span>
                  </span>
                )
              )}
            </span>
          ))}
        </div>
      </div>

      {/* Welcome / Content Block — imageLeft style */}
      <section className="content-block">
        <div className="container">
          <div className="cb-grid">
            <Reveal>
              <div className="cb-image-col">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={IMAGES.family} alt="Family exploring Victoria Falls" />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="cb-text-col">
                <h2>
                  The Family Travel <br />
                  <span className="italic">Experience</span>
                </h2>
                <p>
                  Welcome to Family Travel and Tours, your trusted travel partner
                  in Victoria Falls, Zimbabwe.
                </p>
                <p>
                  We create memorable travel experiences for families, couples,
                  groups, and individual travelers looking to discover the beauty
                  of Zimbabwe and Southern Africa.
                </p>
                <p>
                  Whether you&apos;re looking for an exciting safari, a relaxing
                  holiday, an adventure around Victoria Falls, or a tailor-made
                  travel experience, our team is here to make your journey
                  comfortable, exciting, and unforgettable.
                </p>
                <div className="cb-cta">
                  <Button href="/about" variant="outline-dark">
                    About us
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why travel with us — USP Block with sticky scroll */}
      <section className="usp-block">
        <div className="container">
          <div className="usp-grid">
            <Reveal>
              <div className="usp-text">
                <h2>
                  Exceptional Excellence, <br />
                  <span className="italic">Unforgettable Journeys</span>
                </h2>
                <p>
                  We offer exclusive access to Victoria Falls and Zimbabwe&apos;s
                  most breathtaking landscapes. From iconic adventures and
                  luxury lodges to the tranquil Zambezi River and thrilling
                  safaris, every journey is thoughtfully crafted with meticulous
                  attention to detail, and a deep understanding of what makes
                  travel truly unforgettable.
                </p>
                <div style={{ marginTop: "2rem" }}>
                  <Button href="/destinations" variant="outline-dark">
                    Discover Zimbabwe
                  </Button>
                </div>
              </div>
            </Reveal>

            <div className="usp-items">
              {WHY.map((f, i) => (
                <Reveal key={f.title} delay={i * 0.08}>
                  <div className="usp-item">
                    <div className="usp-item-icon">{f.icon}</div>
                    <div className="usp-item-text">
                      <h4>{f.title}</h4>
                      <p>{f.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tours preview — Links Block style */}
      <section className="links-block">
        <div className="container">
          <div className="links-grid">
            <Reveal>
              <div className="links-image-wrapper">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={IMAGES.heroSafari}
                  alt="Victoria Falls Safari"
                  style={{ height: "100%" }}
                />
              </div>
            </Reveal>

            <div className="links-content-wrapper">
              <Reveal>
                <span className="eyebrow">Tours &amp; Experiences</span>
              </Reveal>

              {TOURS.slice(0, 4).map((tour, i) => (
                <Reveal key={tour.slug} delay={i * 0.08}>
                  <Link href={`/tours#${tour.slug}`} className={`links-item ${i === 0 ? "active" : ""}`}>
                    <span className="links-item-location">{tour.tag}</span>
                    <span className="links-item-label">{tour.name}</span>
                    <span className="links-item-desc">{tour.description}</span>
                  </Link>
                </Reveal>
              ))}

              <Reveal delay={0.4}>
                <div style={{ marginTop: "1rem" }}>
                  <Button href="/tours" variant="accent">
                    All packages
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Numbers Block — Stats */}
      <section className="numbers-block">
        <div className="container">
          <Reveal>
            <div className="numbers-grid">
              {STATS.map((stat) => (
                <div className="number-card" key={stat.label}>
                  <h3>{stat.number}</h3>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Parallax quote */}
      <section
        className="parallax"
        style={{ backgroundImage: `url(${IMAGES.chobe})` }}
      >
        <div style={{ position: "absolute", inset: 0, background: "rgba(20,30,20,0.6)" }} />
        <Reveal className="container" style={{ position: "relative", zIndex: 2 }}>
          <blockquote
            style={{
              color: "#fff",
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontSize: "clamp(1.6rem, 4vw, 2.8rem)",
              maxWidth: 900,
              margin: "0 auto",
              textAlign: "center",
              lineHeight: 1.2,
            }}
          >
            &ldquo;{COMPANY.tagline}&rdquo;
          </blockquote>
        </Reveal>
      </section>

      {/* Destinations — Parallax Carousel style */}
      <section className="parallax-carousel">
        <div className="container">
          <Reveal>
            <span className="eyebrow eyebrow-center" style={{ display: "block", marginBottom: "1rem" }}>Top Destinations</span>
            <h2 className="section-title section-title-center" style={{ marginBottom: "3rem" }}>
              Places We Explore
            </h2>
          </Reveal>

          <div className="carousel-grid">
            <Reveal>
              <div className="carousel-image">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={DESTINATIONS[0]?.image || IMAGES.falls}
                  alt={DESTINATIONS[0]?.name || "Victoria Falls"}
                  style={{ height: "100%" }}
                />
              </div>
            </Reveal>

            <div className="carousel-cards">
              {DESTINATIONS.map((dest, i) => (
                <Reveal key={dest.name} delay={i * 0.08}>
                  <div className="carousel-card">
                    <span className="dest-country">{dest.country}</span>
                    <h4>{dest.name}</h4>
                    <p>{dest.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <Reveal>
            <span className="eyebrow eyebrow-center">Testimonials</span>
            <h2 className="section-title section-title-center">
              What Our Travelers Say
            </h2>
          </Reveal>
          <div className="testimonial-grid">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.quote} delay={i * 0.1}>
                <div className="testimonial-card">
                  <div className="testimonial-stars">
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} width="18" height="18" viewBox="0 0 24 24" fill="var(--color-accent)" style={{ marginRight: 2 }}>
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
                  <p>{t.text}</p>
                  <p className="author">&mdash; {t.author}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBanner image={IMAGES.africaMap} />

      <Footer />
    </>
  );
}
