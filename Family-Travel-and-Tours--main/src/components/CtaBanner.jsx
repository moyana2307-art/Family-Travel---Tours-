import Button from "@/components/Button";
import Reveal from "@/components/Reveal";

export default function CtaBanner({ image }) {
  return (
    <section className="cta-banner">
      <div className="cta-banner-inner">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="cta-banner-bg" src={image} alt="" />
        <div className="cta-banner-overlay" />
        <Reveal className="cta-banner-content">
          <h2>Your Next Adventure Is Waiting</h2>
          <p>
            The world is full of places to discover. Bring the people you love,
            choose your adventure, and let us help you create memories that last
            a lifetime.
          </p>
          <div className="cta-actions">
            <Button href="/tours" variant="accent">
              Explore Our Tours
            </Button>
            <Button href="/contact" variant="outline">
              Contact Us
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
