import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import EnquiryForm from "@/components/EnquiryForm";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import { IMAGES } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Custom Travel | Tailor-Made Tours in Zimbabwe",
  description:
    "Your Trip. Your Way. Tell us where you want to go, what you want to experience, and we'll create a personalized, tailor-made travel experience designed around your needs.",
  path: "/custom-travel",
  imagePath: IMAGES.adventure,
  keywords: [
    "custom tours Zimbabwe",
    "tailor-made holidays Victoria Falls",
    "private travel Zimbabwe",
    "personalized safaris",
  ],
});

const QUESTIONS = [
  "Where do you want to go?",
  "What would you like to experience?",
  "Who are you travelling with?",
  "How long would you like to stay?",
];

export default function CustomTravelPage() {
  return (
    <>
      <Navigation />

      <PageHero
        title="Custom Travel"
        subtitle="Your Trip. Your Way."
        image={IMAGES.adventure}
      />

      {/* Content Block — imageLeft */}
      <section className="content-block">
        <div className="container">
          <div className="cb-grid">
            <Reveal>
              <div className="cb-image-col">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={IMAGES.womanTravel} alt="Custom travel planning" />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="cb-text-col">
                <h2>
                  We Build Journeys <br />
                  <span className="italic">Around You</span>
                </h2>
                <p>
                  Don&apos;t want a standard package? Let us help create a journey
                  around your interests.
                </p>
                <p>
                  Tell us where you want to go, what you want to experience, how
                  long you want to stay, and who you&apos;re traveling with.
                </p>
                <p>
                  We&apos;ll help you create a personalized travel experience
                  designed around your needs. From the first conversation to the
                  final day of your trip, we focus on what you want
                  and create an experience around you.
                </p>
                <div className="cb-cta">
                  <Button href="/contact" variant="outline-dark">
                    Start Planning
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Questions — Numbers Block style */}
      <section className="numbers-block" style={{ background: "var(--color-cream)" }}>
        <div className="container">
          <Reveal>
            <span className="eyebrow eyebrow-center">Tell Us About Your Dream Trip</span>
            <h2 className="section-title section-title-center" style={{ marginBottom: "3rem" }}>
              Let&apos;s Build Your Journey
            </h2>
          </Reveal>
          <div className="numbers-grid">
            {QUESTIONS.map((q, i) => (
              <Reveal key={q} delay={i * 0.08}>
                <div className="number-card">
                  <h3>{String(i + 1).padStart(2, "0")}</h3>
                  <p>{q}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry form */}
      <section className="section" id="enquiry">
        <div className="container" style={{ maxWidth: 960, marginLeft: "auto", marginRight: "auto" }}>
          <Reveal>
            <span className="eyebrow eyebrow-center">Custom Travel Enquiry</span>
            <h2 className="section-title section-title-center">
              Tell Us About Your Dream Trip
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="form-glass-wrapper">
              <EnquiryForm />
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
