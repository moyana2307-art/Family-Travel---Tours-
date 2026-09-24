export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.familytravelstours.com";

export const SITE_NAME = "Family Travel and Tours";

export const DEFAULT_OG_IMAGE = "/victoria-falls.jpg";

export function buildMetadata({
  title,
  description,
  path = "/",
  imagePath = DEFAULT_OG_IMAGE,
  keywords = [],
  type = "website",
}) {
  const canonical = path === "/" ? "/" : path;
  const url = `${SITE_URL}${canonical}`;
  const images = [{ url: imagePath, width: 1200, height: 630, alt: title }];

  return {
    title,
    description,
    keywords,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      type,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images,
    },
  };
}