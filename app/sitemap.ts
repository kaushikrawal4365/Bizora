import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://bizora.com";
  return ["", "/work", "/services", "/pricing", "/about", "/contact", "/privacy", "/terms", "/cookies"].map((path) => ({ url: `${base}${path}`, lastModified: new Date() }));
}
