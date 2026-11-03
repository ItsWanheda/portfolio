import type { MetadataRoute } from "next";

const siteUrl = "https://itswanheda.vercel.app";
const apiOrigin = process.env.API_SERVER_URL?.replace(/\/+$/, "");

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteUrl, changeFrequency: "weekly", priority: 1 },
    { url: siteUrl + "/projects", changeFrequency: "weekly", priority: 0.8 },
    { url: siteUrl + "/journal", changeFrequency: "daily", priority: 0.9 },
    { url: siteUrl + "/about", changeFrequency: "monthly", priority: 0.6 },
    { url: siteUrl + "/contact", changeFrequency: "monthly", priority: 0.5 },
  ];

  if (!apiOrigin) return staticRoutes;

  try {
    const response = await fetch(apiOrigin + "/api/v1/posts?limit=30", {
      next: { revalidate: 300 },
    });
    if (!response.ok) return staticRoutes;
    const data = await response.json() as { posts?: Array<{ slug: string; updatedAt?: string; publishedAt?: string }> };
    const articles: MetadataRoute.Sitemap = (data.posts || []).map((post) => ({
      url: siteUrl + "/journal/" + encodeURIComponent(post.slug),
      lastModified: post.updatedAt || post.publishedAt || undefined,
      changeFrequency: "monthly",
      priority: 0.7,
    }));
    return staticRoutes.concat(articles);
  } catch {
    return staticRoutes;
  }
}
