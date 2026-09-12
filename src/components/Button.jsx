import Link from "next/link";

export default function Button({ href, variant = "primary", children, icon = true, onClick, type, disabled }) {
  const cls = `btn ${variant === "accent" ? "btn-accent" : variant === "secondary" ? "btn-secondary" : variant === "outline" ? "btn-outline" : variant === "outline-dark" ? "btn-outline-dark" : "btn-primary"} ${icon ? "" : "btn-no-icon"}`;

  const content = icon ? (
    <>
      <span className="btn-label">{children}</span>
      <span className="btn-icon">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </span>
    </>
  ) : (
    <span className="btn-label">{children}</span>
  );

  if (href) {
    if (href.startsWith("#")) {
      return (
        <a href={href} className={cls} onClick={onClick}>
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={cls} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} disabled={disabled} className={cls} onClick={onClick}>
      {content}
    </button>
  );
}
