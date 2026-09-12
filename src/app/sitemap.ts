import type { MetadataRoute } from "next";
import { SITE_URL } from "@/data/profile";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: SITE_URL, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/llms.txt`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/profile.md`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/api/profile`, lastModified, changeFrequency: "monthly", priority: 0.5 },
  ];
}
