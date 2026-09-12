"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, IMAGES } from "@/lib/data";

export default function Navigation() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <div className={`navigationWrapper ${scrolled ? "scrolled" : ""}`}>
        <div className="content">
          <div className="nav-inner">
            <Link href="/" className="nav-logo" onClick={() => setMenuOpen(false)}>
              <span className="logo-leaf">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={IMAGES.logo} alt="Family Travel and Tours logo" />
              </span>
              <span className="nav-logo-text">
                Family Travel and Tours
                <span className="nav-logo-loc">Victoria Falls, Zimbabwe</span>
              </span>
            </Link>

            <ul className="nav-links">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={pathname === link.href ? "active" : ""}
                  >
                    {link.label}
                    {pathname === link.href && <span className="nav-link-dot" />}
                  </Link>
                </li>
              ))}
            </ul>

            <span className="nav-separator" />

            <Link href="/contact" className="nav-cta">
              <span className="nav-cta-label">Book now</span>
              <span className="nav-cta-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </Link>

            <button
              className="nav-toggle"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`mobile-nav ${menuOpen ? "open" : ""}`}>
        <button className="mobile-nav-close" onClick={() => setMenuOpen(false)} aria-label="Close menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
        <div className="mobile-nav-links">
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={pathname === link.href ? "active" : ""}
              style={{ animationDelay: menuOpen ? `${0.05 + i * 0.04}s` : "0s" }}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <Link href="/contact" onClick={() => setMenuOpen(false)} style={{ marginTop: "1.5rem" }}>
          <span className="btn btn-accent" style={{ width: "100%" }}>
            <span className="btn-label">Book now</span>
          </span>
        </Link>
      </div>
    </>
  );
}
