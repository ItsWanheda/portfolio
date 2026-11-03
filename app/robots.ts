import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/dashboard", "/login", "/register"],
    },
    sitemap: "https://itswanheda.vercel.app/sitemap.xml",
  };
}
