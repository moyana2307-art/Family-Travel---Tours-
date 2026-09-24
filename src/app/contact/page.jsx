import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import EnquiryForm from "@/components/EnquiryForm";
import Reveal from "@/components/Reveal";
import { IMAGES, COMPANY } from "@/lib/data";

export const metadata = {
  title: "Contact & Book a Tour",
  description:
    "Start your journey with Family Travel and Tours. Have a question, need help planning your trip, or ready to start your adventure? Contact us in Victoria Falls, Zimbabwe.",
};

const MapPinIcon = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const PhoneIcon = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const MailIcon = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

export default function ContactPage() {
  return (
    <>
      <Navigation />

      <PageHero
        title="Contact & Book a Tour"
        subtitle="Let's Start Your Journey. Have a question, need help planning your trip, or ready to start your adventure? Our team would love to hear from you."
        image={IMAGES.heroSafari}
      />

      {/* Contact info — Content Block imageRight */}
      <section className="content-block">
        <div className="container">
          <div className="cb-grid">
            <Reveal delay={0.1}>
              <div className="cb-text-col">
                <h2>
                  Let&apos;s Start <br />
                  <span className="italic">Your Journey</span>
                </h2>
                <p>
                  Have a question, need help planning your trip, or ready to start
                  your adventure? Our team would love to hear from you.
                </p>

                <div className="contact-block">
                  <div className="contact-icon">{MapPinIcon}</div>
                  <div>
                    <h4>Visit Us</h4>
                    <p>{COMPANY.address}</p>
                  </div>
                </div>

                <div className="contact-block">
                  <div className="contact-icon">{PhoneIcon}</div>
                  <div>
                    <h4>Call Us</h4>
                    {COMPANY.phones.map((phone, idx) => (
                      <p key={phone}>
                        <a
                          href={`https://wa.me/${COMPANY.whatsapp[idx]}?text=${encodeURIComponent(COMPANY.waMessage)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: "var(--color-primary)" }}
                        >
                          {phone}
                        </a>
                      </p>
                    ))}
                  </div>
                </div>

                <div className="contact-block">
                  <div className="contact-icon">{MailIcon}</div>
                  <div>
                    <h4>Let&apos;s Travel Together</h4>
                    <p>
                      Whether you&apos;re planning a family holiday, safari
                      adventure, romantic getaway, group trip, or your first visit
                      to Victoria Falls, we&apos;re ready to help.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal>
              <div className="cb-image-col">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={IMAGES.travel} alt="Traveler watching a Zimbabwe sunset" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Booking enquiry — Form with glassmorphism */}
      <section className="section" id="book" style={{ background: "var(--color-cream)" }}>
        <div className="container" style={{ maxWidth: 960, marginLeft: "auto", marginRight: "auto" }}>
          <Reveal>
            <span className="eyebrow eyebrow-center">Book a Tour</span>
            <h2 className="section-title section-title-center">
              Let&apos;s Plan Your Adventure
            </h2>
            <p className="section-subtitle section-subtitle-center">
              Ready to explore Zimbabwe? Tell us what kind of experience
              you&apos;re looking for and our team will help you plan your journey.
            </p>
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
