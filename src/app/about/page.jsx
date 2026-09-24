import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import { IMAGES } from "@/lib/data";

export const metadata = {
  title: "About Us",
  description:
    "Family Travel and Tours is a Victoria Falls-based travel company committed to connecting people with unforgettable destinations and experiences across Zimbabwe and Southern Africa.",
};

const MapPinIcon = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const BriefcaseIcon = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

const UsersIcon = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const ShieldIcon = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const StarIcon = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const TargetIcon = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const EyeIcon = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const HandshakeIcon = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 17a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9l4-4h8l4 4v8a1 1 0 0 1-1 1h-5a1 1 0 0 0-1 1z" />
    <path d="M16 3l4 4" />
    <path d="M9 21h6" />
    <path d="M12 17v4" />
  </svg>
);

const VALUES = [
  { icon: MapPinIcon, title: "Local Knowledge", text: "We know Victoria Falls and understand what makes Zimbabwe special. Our local knowledge helps travelers discover unforgettable experiences." },
  { icon: BriefcaseIcon, title: "Personalized Travel", text: "No two travelers are the same. We help create experiences that suit your interests, schedule, group, and budget." },
  { icon: UsersIcon, title: "Family Friendly", text: "Our experiences are designed to make traveling together easier, more enjoyable, and more memorable." },
  { icon: ShieldIcon, title: "Reliable Service", text: "We believe that great travel begins with dependable service and careful planning." },
  { icon: StarIcon, title: "Unforgettable Experiences", text: "From waterfalls and wildlife to sunsets and cultural encounters, we help you experience the best of Zimbabwe." },
];

const MISSIONS = [
  { icon: TargetIcon, title: "Our Mission", text: "To provide memorable, safe, comfortable, and personalized travel experiences that bring families, friends, and travelers closer together while showcasing the beauty of Zimbabwe and Africa." },
  { icon: EyeIcon, title: "Our Vision", text: "To become a trusted and leading travel company in Zimbabwe and Southern Africa, known for exceptional service, unforgettable experiences, and a genuine passion for connecting people with Africa." },
  { icon: HandshakeIcon, title: "Our Promise", text: "At Family Travel and Tours, we are committed to making every journey meaningful. From the first conversation to the final day of your trip, we focus on understanding what you want and creating an experience around you." },
];

export default function AboutPage() {
  return (
    <>
      <Navigation />

      <PageHero
        title="About Us"
        subtitle="Family Travel and Tours is a Victoria Falls-based travel company committed to connecting people with unforgettable destinations and experiences."
        image={IMAGES.heroFalls}
      />

      {/* Who we are — Content Block imageLeft */}
      <section className="content-block">
        <div className="container">
          <div className="cb-grid">
            <Reveal>
              <div className="cb-image-col">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={IMAGES.group} alt="Family travel in Victoria Falls" />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="cb-text-col">
                <h2>
                  Connecting People <br />
                  <span className="italic">With Africa</span>
                </h2>
                <p>
                  Family Travel and Tours is a Victoria Falls-based travel company
                  committed to connecting people with unforgettable destinations
                  and experiences.
                </p>
                <p>
                  We believe that travel is more than simply visiting a destination.
                  It is about discovering new places, experiencing different
                  cultures, spending quality time with the people you love, and
                  creating memories that last a lifetime.
                </p>
                <p>
                  With Victoria Falls as our home, we are perfectly positioned to
                  help travelers experience one of Africa&apos;s greatest natural
                  wonders while discovering the incredible wildlife, landscapes,
                  culture, and adventure that Zimbabwe and Southern Africa have to
                  offer.
                </p>
                <p>
                  From safaris and tours to comfortable accommodation, we offer a
                  complete travel experience, helping you plan everything from the
                  moment you arrive to your very last day in Zimbabwe.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Promise */}
      <section className="usp-block" style={{ background: "var(--color-cream)" }}>
        <div className="container">
          <Reveal>
            <span className="eyebrow eyebrow-center">Our Foundation</span>
            <h2 className="section-title section-title-center" style={{ marginBottom: "3rem" }}>
              Mission, Vision &amp; Promise
            </h2>
          </Reveal>
          <div className="usp-items" style={{ maxWidth: 720, margin: "0 auto" }}>
            {MISSIONS.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.1}>
                <div className="usp-item">
                  <div className="usp-item-icon">{v.icon}</div>
                  <div className="usp-item-text">
                    <h4>{v.title}</h4>
                    <p>{v.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why travel with us */}
      <section className="usp-block">
        <div className="container">
          <div className="usp-grid">
            <Reveal>
              <div className="usp-text">
                <h2>
                  The Family Travel <br />
                  <span className="italic">and Tours Difference</span>
                </h2>
                <p>
                  Whether you want adventure, relaxation, wildlife, culture, or a
                  combination of everything, we can help create the right experience
                  for you.
                </p>
                <div style={{ marginTop: "2rem" }}>
                  <Button href="/tours">Explore Our Tours</Button>
                </div>
              </div>
            </Reveal>

            <div className="usp-items">
              {VALUES.map((v, i) => (
                <Reveal key={v.title} delay={i * 0.08}>
                  <div className="usp-item">
                    <div className="usp-item-icon">{v.icon}</div>
                    <div className="usp-item-text">
                      <h4>{v.title}</h4>
                      <p>{v.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBanner image={IMAGES.adventure} />

      <Footer />
    </>
  );
}
