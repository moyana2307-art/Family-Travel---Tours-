const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.familytravelstours.com";

export default function sitemap() {
  const routes = [
    { path: "", changeFrequency: "weekly", priority: 1.0 },
    { path: "/about", changeFrequency: "monthly", priority: 0.8 },
    { path: "/tours", changeFrequency: "weekly", priority: 0.9 },
    { path: "/destinations", changeFrequency: "weekly", priority: 0.8 },
    { path: "/family-travel", changeFrequency: "monthly", priority: 0.7 },
    { path: "/custom-travel", changeFrequency: "monthly", priority: 0.7 },
    { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}