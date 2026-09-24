import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Button from "@/components/Button";

export const metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <>
      <Navigation />
      <section
        className="PrimaryHero"
        style={{
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="heroContainer" style={{ background: "var(--color-dark)", display: "flex", alignItems: "center" }}>
          <div className="heroContent" style={{ justifyContent: "center" }}>
            <h1 style={{ color: "var(--color-bg)" }}>Page Not Found</h1>
            <p style={{ color: "rgba(250,249,248,0.9)", marginBottom: "2rem", fontFamily: "var(--font-sans)", fontSize: "1.125rem", lineHeight: "2rem" }}>
              Sorry, the page you&apos;re looking for doesn&apos;t exist.
            </p>
            <div>
              <Button href="/" variant="accent">
                Back to Home
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
